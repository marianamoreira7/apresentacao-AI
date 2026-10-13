import { Clock, Mail, MapPin, Phone, School } from 'lucide-react'
import { CONTACT, SCHOOL_NAME } from '@/data/school'

const LINKS = [
  { href: '#itinerario', label: 'Itinerário' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#basquete', label: 'Basquete feminino' },
  { href: '#inclusao', label: 'Inclusão' },
]

export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-950 py-14 text-blue-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-3 text-lg font-extrabold text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-800">
                <School className="h-5 w-5" aria-hidden="true" />
              </span>
              {SCHOOL_NAME}
            </p>
            <p className="mt-4 max-w-xs">Uma escola acolhedora, onde cada estudante tem o seu lugar.</p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-white">Venha nos conhecer</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                {CONTACT.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                {CONTACT.email}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-lg font-extrabold text-white">Navegue</h2>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold text-white underline-offset-4 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-blue-800 pt-6 text-sm text-blue-200">
          © {SCHOOL_NAME}. Site de demonstração criado em uma oficina de IA: todos os nomes, horários e contatos
          são fictícios.
        </p>
      </div>
    </footer>
  )
}
