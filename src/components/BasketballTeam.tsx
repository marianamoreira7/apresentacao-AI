import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import { GAMES, TEAM, TEAM_FACTS } from '@/data/school'
import TeamLogo from '@/components/TeamLogo'

export default function BasketballTeam() {
  return (
    <section id="basquete" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rounded-[2rem] border-t-8 border-yellow-400 bg-purple-950 p-6 text-white shadow-xl sm:p-10 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[15rem_1fr]">
            <TeamLogo className="mx-auto w-48 drop-shadow-xl md:w-60" />

            <div>
              <p className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-extrabold text-purple-950">
                {TEAM.sport}
              </p>
              <h2 className="mt-4 text-4xl font-extrabold text-yellow-300 md:text-5xl">{TEAM.name}</h2>
              <p className="mt-2 text-xl font-bold text-purple-200">“{TEAM.motto}”</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-purple-100">{TEAM.description}</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {TEAM_FACTS.map((fact) => (
                  <li key={fact.label} className="rounded-2xl border-2 border-yellow-400 bg-purple-900 p-4">
                    <strong className="block text-2xl font-extrabold text-yellow-300">{fact.value}</strong>
                    <span className="text-purple-100">{fact.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-yellow-400/60 bg-purple-900 p-6">
              <h3 className="text-xl font-extrabold text-yellow-300">Treinos</h3>
              <ul className="mt-4 space-y-3 text-purple-50">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
                  {TEAM.practice}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
                  {TEAM.place}
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
                  {TEAM.coach}
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-purple-950 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                Quero jogar!
              </a>
            </div>

            <div className="rounded-2xl border-2 border-yellow-400/60 bg-purple-900 p-6">
              <h3 className="text-xl font-extrabold text-yellow-300">Próximos jogos</h3>
              <ul className="mt-4 space-y-4">
                {GAMES.map((game) => (
                  <li key={game.date} className="flex items-start gap-3 text-purple-50">
                    <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
                    <span>
                      <strong className="block text-white">{game.match}</strong>
                      {game.date} · {game.time} · {game.where}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-purple-200">Conteúdo ilustrativo para demonstração.</p>
        </div>
      </div>
    </section>
  )
}
