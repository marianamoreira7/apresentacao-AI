import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string
  title: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-extrabold tracking-widest uppercase ${light ? 'text-blue-200' : 'text-blue-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-extrabold md:text-4xl ${light ? 'text-white' : 'text-blue-950'}`}>{title}</h2>
      <p className={`mt-3 text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-slate-700'}`}>{children}</p>
    </div>
  )
}
