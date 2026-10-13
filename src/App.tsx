import { useEffect, useState } from 'react'
import BasketballTeam from '@/components/BasketballTeam'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { TextSize } from '@/components/Header'
import Hero from '@/components/Hero'
import Inclusion from '@/components/Inclusion'
import Projects from '@/components/Projects'
import Timetable from '@/components/Timetable'

const PERCENT: Record<TextSize, string> = { normal: '100%', large: '115%', xlarge: '130%' }

export default function App() {
  const [textSize, setTextSize] = useState<TextSize>('normal')

  useEffect(() => {
    document.documentElement.style.fontSize = PERCENT[textSize]
  }, [textSize])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only rounded-lg bg-blue-700 px-4 py-2 font-bold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
      >
        Pular para o conteúdo
      </a>
      <Header textSize={textSize} onTextSize={setTextSize} />
      <main id="conteudo">
        <Hero />
        <Timetable />
        <Projects />
        <BasketballTeam />
        <Inclusion />
      </main>
      <Footer />
    </>
  )
}
