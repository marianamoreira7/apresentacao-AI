import { Sparkles } from 'lucide-react'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 p-8 text-center text-white">
      <Sparkles className="h-12 w-12 text-yellow-300" />
      <h1 className="text-4xl font-bold">Your site starts here</h1>
      <p className="max-w-md text-slate-300">
        This is a blank starter. Tell the AI what to build and watch this page
        change.
      </p>
    </main>
  )
}
