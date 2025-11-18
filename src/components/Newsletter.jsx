import React, { useState } from 'react'

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-violet-400 ${props.className || ''}`}
  />
)

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'website', consent: true })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus('success')
      setName('')
      setEmail('')
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <h3 className="text-xl font-semibold text-white">Get updates, early access, and community invitations.</h3>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-3">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="sm:col-span-1" />
          <button type="submit" className="sm:col-span-1 inline-flex items-center justify-center rounded-xl bg-violet-500 px-6 py-3 text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-600">
            {status === 'loading' ? 'Sending…' : 'Sign up'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-sm text-emerald-300">Thanks for joining — you’ll hear from us soon.</p>
        )}
        {status && status !== 'success' && status !== 'loading' && (
          <p className="mt-3 text-sm text-rose-300">{String(status)}</p>
        )}
      </div>
    </section>
  )
}
