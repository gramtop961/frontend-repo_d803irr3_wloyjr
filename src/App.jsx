import React from 'react'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import AppSection from './components/AppSection'
import Community from './components/Community'
import OurWhy from './components/OurWhy'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const handleJoin = () => {
    const el = document.getElementById('newsletter')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrototype = () => {
    alert('Prototype preview coming soon. For now, explore the concepts below!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-100">
      <Hero onPrimaryClick={handleJoin} onSecondaryClick={handlePrototype} />

      <main className="relative">
        <WhatWeDo />
        <AppSection onPrototype={handlePrototype} />
        <Community onUpdates={handleJoin} />
        <OurWhy />
        <div id="newsletter">
          <Newsletter />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
