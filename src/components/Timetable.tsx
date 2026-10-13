import { useState } from 'react'
import { Clock, GraduationCap, MapPin, Users } from 'lucide-react'
import { BREAK, DAYS, PERIODS, SUBJECT_LIST, TURMAS, getSubject, shortTeacher } from '@/data/school'
import type { SubjectId } from '@/data/school'
import SectionHeading from '@/components/SectionHeading'

interface Selection {
  day: number
  period: number
}

export default function Timetable() {
  const [turma, setTurma] = useState(0)
  const [selected, setSelected] = useState<Selection | null>(null)
  const [highlight, setHighlight] = useState<SubjectId | null>(null)
  const [today] = useState(() => new Date().getDay() - 1) // 0 = segunda ... 4 = sexta

  const sel = selected ? getSubject(turma, selected.day, selected.period) : null

  const rows: ({ kind: 'lesson'; period: number } | { kind: 'break' })[] = []
  PERIODS.forEach((_, period) => {
    if (period === 2) rows.push({ kind: 'break' })
    rows.push({ kind: 'lesson', period })
  })

  return (
    <section id="itinerario" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Itinerário" title="A semana de cada turma">
          Escolha a turma e clique em uma aula para ver a professora, a sala e o horário.
        </SectionHeading>

        <div
          role="group"
          aria-label="Escolha a turma"
          className="mt-8 inline-flex flex-wrap gap-1 rounded-2xl bg-blue-700 p-1.5"
        >
          {TURMAS.map((name, index) => (
            <button
              key={name}
              type="button"
              aria-pressed={turma === index}
              onClick={() => {
                setTurma(index)
                setSelected(null)
              }}
              className={`rounded-xl px-5 py-2 font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 ${
                turma === index ? 'bg-white text-blue-800 shadow' : 'text-white hover:bg-blue-600'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_19rem] lg:items-start">
          <div className="overflow-x-auto rounded-2xl border-2 border-blue-300 bg-white p-4 shadow-sm">
            <div className="grid min-w-[44rem] grid-cols-[5rem_repeat(5,minmax(0,1fr))] gap-2">
              <div />
              {DAYS.map((day, index) => (
                <div
                  key={day}
                  className={`flex h-11 items-center justify-center rounded-lg font-bold text-white ${
                    today === index ? 'bg-blue-950' : 'bg-blue-700'
                  }`}
                >
                  {day}
                  {today === index && <span className="ml-2 rounded bg-white px-1.5 text-xs text-blue-900">hoje</span>}
                </div>
              ))}

              {rows.map((row) =>
                row.kind === 'break' ? (
                  <div
                    key="break"
                    className="col-span-6 rounded-lg border-2 border-dashed border-blue-400 bg-blue-100 py-2 text-center text-sm font-bold text-blue-900"
                  >
                    Intervalo · {BREAK.start} às {BREAK.end}
                  </div>
                ) : (
                  <Row
                    key={row.period}
                    period={row.period}
                    turma={turma}
                    selected={selected}
                    highlight={highlight}
                    onSelect={setSelected}
                  />
                ),
              )}
            </div>
          </div>

          <aside
            aria-live="polite"
            className="rounded-2xl border-2 border-blue-700 bg-blue-100 p-6 lg:sticky lg:top-28"
          >
            {sel && selected ? (
              <div>
                <p className="text-sm font-extrabold tracking-wide text-blue-800 uppercase">
                  {DAYS[selected.day]} · {selected.period + 1}ª aula
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-blue-950">{sel.name}</h3>
                <ul className="mt-5 space-y-3 text-slate-900">
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    {sel.teacher}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    {PERIODS[selected.period].start} às {PERIODS[selected.period].end}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    {sel.room}
                  </li>
                </ul>
                <p className="mt-5 rounded-xl bg-white p-3 text-sm text-slate-800">
                  A professora de apoio e os materiais adaptados estão disponíveis em todas as aulas.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-blue-950">Detalhes da aula</h3>
                <p className="mt-2 text-slate-800">Clique em uma aula da tabela para ver as informações aqui.</p>
              </div>
            )}
          </aside>
        </div>

        <h3 className="mt-12 text-xl font-extrabold text-blue-950">Nossas professoras</h3>
        <p className="mt-1 text-slate-700">Toque em uma matéria para destacar todas as aulas dela na semana.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECT_LIST.map((subject) => (
            <li key={subject.id}>
              <button
                type="button"
                aria-pressed={highlight === subject.id}
                onClick={() => setHighlight(highlight === subject.id ? null : subject.id)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                  highlight === subject.id
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-blue-300 bg-white text-slate-900 hover:bg-blue-50'
                }`}
              >
                <GraduationCap className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="block font-extrabold">{subject.name}</strong>
                  <span className="text-sm">{subject.teacher}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Row({
  period,
  turma,
  selected,
  highlight,
  onSelect,
}: {
  period: number
  turma: number
  selected: Selection | null
  highlight: SubjectId | null
  onSelect: (selection: Selection) => void
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-sm font-semibold text-slate-800">
        <span className="font-extrabold text-blue-900">{period + 1}ª aula</span>
        {PERIODS[period].start}
      </div>
      {DAYS.map((day, dayIndex) => {
        const subject = getSubject(turma, dayIndex, period)
        const isSelected = selected?.day === dayIndex && selected.period === period
        const dimmed = highlight !== null && highlight !== subject.id
        const lit = highlight === subject.id
        return (
          <button
            key={day}
            type="button"
            aria-pressed={isSelected}
            aria-label={`${day}, ${period + 1}ª aula, ${subject.name} com ${subject.teacher}`}
            onClick={() => onSelect({ day: dayIndex, period })}
            className={`${subject.cell} flex h-[4.5rem] flex-col justify-center rounded-lg border-2 px-2 text-left text-slate-950 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 ${
              isSelected ? 'ring-4 ring-blue-900' : lit ? 'ring-4 ring-blue-700' : 'hover:brightness-95'
            } ${dimmed ? 'opacity-30' : ''}`}
          >
            <span className="block text-sm leading-tight font-extrabold">{subject.name}</span>
            <span className="mt-0.5 block text-xs leading-tight">{shortTeacher(subject.teacher)}</span>
          </button>
        )
      })}
    </>
  )
}
