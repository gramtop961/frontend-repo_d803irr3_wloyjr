import React from 'react'
import { HeartPulse, Flame, ClipboardCheck, CalendarHeart, Sunrise } from 'lucide-react'

const Feature = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
    <div className="mb-3 inline-flex rounded-xl bg-violet-500/10 p-2 text-violet-300 ring-1 ring-violet-500/30">
      <Icon className="h-5 w-5" />
    </div>
    <h4 className="text-base font-semibold text-white">{title}</h4>
    <p className="mt-1 text-sm text-slate-200/90">{children}</p>
  </div>
)

export default function AppSection({ onPrototype }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">The App (Comfortably Chaotic Companion)</h2>
          <p className="mt-3 text-slate-200/90">
            Gentle, practical tools that meet you where you are.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Feature icon={HeartPulse} title="Emotion Regulator Check-in">
              Notice, name, and soothe emotions with simple prompts and supportive language.
            </Feature>
            <Feature icon={Flame} title="Burnout Mode support">
              Strip things back to essentials when you're running on low — rest, basics, and care.
            </Feature>
            <Feature icon={ClipboardCheck} title="Executive Function helpers">
              Break tasks into small steps with built-in momentum and kind reminders.
            </Feature>
            <Feature icon={CalendarHeart} title="Gentle planning tools">
              Plan lightly with flexible structure that adapts to energy and capacity.
            </Feature>
            <Feature icon={Sunrise} title="Daily prompts and grounding">
              Tiny nudges for reflection, self-compassion, and regulation.
            </Feature>
          </div>
          <button onClick={onPrototype} className="mt-8 inline-flex items-center justify-center rounded-xl bg-violet-500 px-6 py-3 text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-600">
            View the prototype
          </button>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-emerald-500/10 p-6 ring-1 ring-white/10">
          <div className="aspect-[4/3] w-full rounded-2xl bg-slate-900/60 ring-1 ring-white/10" />
          <p className="mt-3 text-center text-xs text-slate-300/80">Preview coming soon — concept visuals for the Companion app.</p>
        </div>
      </div>
    </section>
  )
}
