import React from 'react'
import { Mail, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-lg font-semibold text-white">Comfortably Chaotic Co</h4>
            <p className="mt-1 text-sm text-slate-300/80">A neurodivergent-first brand and community.</p>
          </div>
          <div className="flex items-center gap-3 text-slate-300/80">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
              <Twitter className="h-4 w-4" /> Twitter/X
            </a>
            <a href="mailto:hello@comfortablychaotic.co" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10">
              <Mail className="h-4 w-4" /> hello@comfortablychaotic.co
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Comfortably Chaotic Co. All rights reserved.</div>
      </div>
    </footer>
  )
}
