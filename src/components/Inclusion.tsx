import { Accessibility, BookOpen, Clock, Heart, HandHeart, Users } from 'lucide-react'
import { INCLUSION_ITEMS } from '@/data/school'
import SectionHeading from '@/components/SectionHeading'

const ICONS = [HandHeart, Users, BookOpen, Accessibility, Clock, Heart]

export default function Inclusion() {
  return (
    <section id="inclusao" className="bg-blue-800 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Inclusão" title="Uma escola para todos" light>
          Acolher é o nosso ponto de partida. Aqui, estudantes com necessidades especiais aprendem,
          brincam e participam de tudo, junto com a turma.
        </SectionHeading>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUSION_ITEMS.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <li key={item.title} className="rounded-2xl bg-white p-6 text-slate-800 shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-blue-950">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.text}</p>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-sm text-blue-100">Conteúdo ilustrativo para demonstração.</p>
      </div>
    </section>
  )
}
