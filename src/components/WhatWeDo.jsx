import React from 'react'
import { Bot, Users, BookOpen } from 'lucide-react'

const Item = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7.5">
    <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
      <Icon className="h-5 w-5 text-violet-300" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{children}</p>
  </div>
)

export default function WhatWeDo() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">What We Do</h2>
        <p className="mt-3 text-slate-200/90">
          Comfortably Chaotic exists to make life feel lighter, calmer, and more manageable. We create tools that support emotional regulation, overwhelm, executive dysfunction, and burnout, all designed with and for neurodivergent brains.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Item icon={Bot} title="AI-powered companion tools">
          Support that adapts to your energy, focus, and feelings — gentle prompts, reflections, and suggestions that fit how your brain works.
        </Item>
        <Item icon={Users} title="Community support and meet-ups">
          A low-pressure space for connection and validation. Local meet-ups, online check-ins, and peer support.
        </Item>
        <Item icon={BookOpen} title="Guides, resources, and templates">
          Practical, compassionate tools you can actually use in daily life — simple, clear, and designed for overwhelmed brains.
        </Item>
      </div>
    </section>
  )
}
