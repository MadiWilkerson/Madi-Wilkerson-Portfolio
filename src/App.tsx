import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { WorkPage } from './pages/WorkPage'
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
