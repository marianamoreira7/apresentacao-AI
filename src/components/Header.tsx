import { School } from 'lucide-react'
import { SCHOOL_NAME } from '@/data/school'

export type TextSize = 'normal' | 'large' | 'xlarge'

const SIZES: { id: TextSize; aria: string; className: string }[] = [
  { id: 'normal', aria: 'Texto normal', className: 'text-sm' },
  { id: 'large', aria: 'Texto grande', className: 'text-base' },
  { id: 'xlarge', aria: 'Texto muito grande', className: 'text-xl' },
]

const LINKS = [
  { href: '#itinerario', label: 'Itinerário' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#basquete', label: 'Basquete' },
  { href: '#inclusao', label: 'Inclusão' },
  { href: '#contato', label: 'Contato' },
]

export default function Header({
  textSize,
  onTextSize,
}: {
  textSize: TextSize
  onTextSize: (size: TextSize) => void
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3 sm:px-6">
        <a
          href="#topo"
          className="order-1 mr-auto flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
            <School className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base leading-tight font-extrabold text-blue-900 sm:text-lg">{SCHOOL_NAME}</span>
        </a>

        <div
          role="group"
          aria-label="Tamanho do texto"
          className="order-2 flex items-center gap-1 rounded-xl border border-blue-200 p-1 md:order-3"
        >
          {SIZES.map((size) => (
            <button
              key={size.id}
              type="button"
              aria-label={size.aria}
              aria-pressed={textSize === size.id}
              onClick={() => onTextSize(size.id)}
              className={`${size.className} flex h-8 w-8 items-center justify-center rounded-lg font-extrabold focus-visible:outline-2 focus-visible:outline-blue-700 ${
                textSize === size.id ? 'bg-blue-700 text-white' : 'text-blue-800 hover:bg-blue-50'
              }`}
            >
              A
            </button>
          ))}
        </div>

        <nav aria-label="Principal" className="order-3 -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 md:order-2 md:mx-0 md:w-auto md:overflow-visible md:px-0">
          <ul className="flex gap-1 whitespace-nowrap">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-blue-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
