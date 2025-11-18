import React from 'react'
import { MapPin, Video, Handshake } from 'lucide-react'

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/20">
    {children}
  </span>
)

export default function Community({ onUpdates }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Community & Meet-ups</h2>
          <p className="mt-3 text-slate-200/90">
            A low-pressure community created for connection, belonging, and shared understanding.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill><MapPin className="mr-1 h-3 w-3" /> South Coast UK meet-ups</Pill>
            <Pill><Video className="mr-1 h-3 w-3" /> Online check-ins</Pill>
            <Pill><Handshake className="mr-1 h-3 w-3" /> Peer support</Pill>
          </div>
          <button onClick={onUpdates} className="mt-8 inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-slate-100 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
            Get updates
          </button>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-violet-500/10 p-6 ring-1 ring-white/10">
          <div className="aspect-[4/3] w-full rounded-2xl bg-slate-900/60 ring-1 ring-white/10" />
          <p className="mt-3 text-center text-xs text-slate-300/80">A friendly, inclusive space — self-diagnosed and questioning welcome.</p>
        </div>
      </div>
    </section>
  )
}
