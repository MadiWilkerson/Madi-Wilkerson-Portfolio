import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { MenuOverlay } from '../components/MenuOverlay'
import { MenuMorphButton } from '../components/MenuMorphButton'

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div>
      <MenuMorphButton open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <SiteHeader variant={isHome ? 'home' : 'inner'} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
