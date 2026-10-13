import { useEffect, useRef, useState } from 'react'
import type { DragEvent } from 'react'
import { ChevronLeft, ChevronRight, Clock, GripVertical, RotateCcw, Users } from 'lucide-react'
import { PROJECTS } from '@/data/school'
import SectionHeading from '@/components/SectionHeading'

const STORAGE_KEY = 'projects-order'
const DEFAULT_ORDER = PROJECTS.map((project) => project.id)

function loadOrder(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_ORDER
    const parsed: unknown = JSON.parse(raw)
    if (
      Array.isArray(parsed) &&
      parsed.length === DEFAULT_ORDER.length &&
      DEFAULT_ORDER.every((id) => parsed.includes(id))
    ) {
      return parsed as string[]
    }
  } catch {
    // sem armazenamento: usa a ordem padrão
  }
  return DEFAULT_ORDER
}

function arrayMove(list: string[], from: number, to: number): string[] {
  const next = [...list]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

export default function Projects() {
  const [order, setOrder] = useState<string[]>(loadOrder)
  const [dragId, setDragId] = useState<string | null>(null)
  const [overId, setOverId] = useState<string | null>(null)
  const [status, setStatus] = useState('')
  const dragRef = useRef<string | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
    } catch {
      // ignora
    }
  }, [order])

  const projects = order.map((id) => PROJECTS.find((project) => project.id === id)!)

  function moveTo(id: string, to: number) {
    const from = order.indexOf(id)
    if (from === to || to < 0 || to >= order.length) return
    setOrder(arrayMove(order, from, to))
    const title = PROJECTS.find((project) => project.id === id)?.title
    setStatus(`${title} movido para a posição ${to + 1} de ${order.length}.`)
  }

  function onDragStart(event: DragEvent<HTMLElement>, id: string) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', id)
    dragRef.current = id
    // Muda o visual só depois que o navegador iniciou o arrasto (senão o Chrome cancela)
    setTimeout(() => setDragId(id), 0)
  }

  function onDrop(event: DragEvent<HTMLElement>, targetId: string) {
    event.preventDefault()
    const id = dragRef.current ?? event.dataTransfer.getData('text/plain')
    if (id && id !== targetId) moveTo(id, order.indexOf(targetId))
    endDrag()
  }

  function endDrag() {
    dragRef.current = null
    setDragId(null)
    setOverId(null)
  }

  return (
    <section id="projetos" className="bg-blue-100 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Projetos" title="Esporte, arte e ciência">
          Projetos abertos a todas as turmas. Arraste os cartões para mudar a ordem ou use as setas de cada cartão.
        </SectionHeading>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setOrder(DEFAULT_ORDER)
              setStatus('Ordem original restaurada.')
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Voltar à ordem original
          </button>
        </div>

        <p role="status" aria-live="polite" className="sr-only">
          {status}
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isDragging = dragId === project.id
            const isOver = overId === project.id && dragId !== project.id
            return (
              <li
                key={project.id}
                draggable
                onDragStart={(event) => onDragStart(event, project.id)}
                onDragEnd={endDrag}
                onDragOver={(event) => {
                  event.preventDefault()
                  event.dataTransfer.dropEffect = 'move'
                  if (overId !== project.id) setOverId(project.id)
                }}
                onDrop={(event) => onDrop(event, project.id)}
                className={`flex cursor-grab flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-md transition active:cursor-grabbing ${
                  isDragging ? 'scale-95 opacity-40' : ''
                } ${isOver ? 'border-dashed border-blue-900 ring-4 ring-blue-400' : 'border-blue-300'}`}
              >
                <div className={`${project.band} flex items-center justify-between px-4 py-4 text-white`}>
                  <Icon className="h-9 w-9" aria-hidden="true" />
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-blue-900">
                    {project.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-xl font-extrabold text-blue-950">{project.title}</h3>
                  <p className="min-h-[4.5rem] text-slate-800">{project.description}</p>
                  <ul className="mt-auto min-h-[4.75rem] space-y-2 border-t border-blue-200 pt-3 text-sm text-slate-800">
                    <li className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                      {project.schedule}
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                      {project.teacher}
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t-2 border-blue-300 bg-blue-100 px-3 py-2">
                  <span className="flex items-center gap-1 text-sm font-bold text-blue-900">
                    <GripVertical className="h-4 w-4" aria-hidden="true" />
                    {index + 1} de {projects.length}
                  </span>
                  <span className="flex gap-1">
                    <button
                      type="button"
                      aria-label={`Mover ${project.title} para trás`}
                      disabled={index === 0}
                      onClick={() => moveTo(project.id, index - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-800 hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-blue-700 disabled:opacity-30"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Mover ${project.title} para frente`}
                      disabled={index === projects.length - 1}
                      onClick={() => moveTo(project.id, index + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-800 hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-blue-700 disabled:opacity-30"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
