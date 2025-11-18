import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-b-[2rem] bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/20 backdrop-blur">
          Neurodivergent-first • Friendly • Practical
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Comfortably Chaotic Co
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Tools, community, and real support for neurodivergent humans.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-6 py-3 text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-600">
            Join the Community
          </button>
          <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-slate-100 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
            Explore the App Prototype
          </button>
        </div>
      </div>
    </section>
  )
}
