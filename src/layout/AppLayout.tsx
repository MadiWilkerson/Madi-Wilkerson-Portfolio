import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'

export function AppLayout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
