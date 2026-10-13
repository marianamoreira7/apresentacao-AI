import { CalendarDays, HandHeart, Trophy } from 'lucide-react'
import { PROJECTS, SCHOOL_NAME, TURMAS } from '@/data/school'
import SchoolIllustration from '@/components/SchoolIllustration'

const STATS = [
  { icon: CalendarDays, title: `${TURMAS.length} turmas`, text: 'com itinerário para explorar' },
  { icon: Trophy, title: `${PROJECTS.length} projetos`, text: 'de esporte, arte e ciência' },
  { icon: HandHeart, title: 'Inclusão de verdade', text: 'apoio para estudantes com necessidades especiais' },
]

export default function Hero() {
  return (
    <section id="topo" className="bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-6 md:pt-20 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-blue-800">
              Escola municipal · Pelotas, RS
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
              Aqui, cada estudante tem o seu lugar.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
              O {SCHOOL_NAME} é uma escola acolhedora, de portas abertas para todas as famílias.
              Aprender junto, respeitando o jeito e o tempo de cada um.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#itinerario"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-800 shadow-sm hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver o itinerário
              </a>
              <a
                href="#projetos"
                className="rounded-xl border-2 border-white px-6 py-3 font-bold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Conhecer os projetos
              </a>
            </div>
          </div>

          <SchoolIllustration className="mx-auto w-full max-w-md rounded-3xl shadow-2xl md:max-w-none" />
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <li key={stat.title} className="flex items-center gap-4 rounded-2xl bg-white p-5 text-slate-800 shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-xl font-extrabold text-blue-900">{stat.title}</strong>
                  <span className="text-slate-700">{stat.text}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
