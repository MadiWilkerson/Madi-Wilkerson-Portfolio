import { Navigate, useParams } from 'react-router-dom'
import { projectBySlug, type ProjectSlug } from '../data/projects'
import { ProjectContent } from './ProjectContent'
import { ProjectShell } from '../components/ProjectShell'

const slugs: ProjectSlug[] = [
  'backseat-lovers-album-cover',
  'monster-icons',
  'gamer-audience-staged-photo',
  'van-gogh-clock',
  'magazine-spread',
  'editorial-illustration',
  'bodoni-type-specimin-poster',
  'collage',
  'netherlands-postcards',
  'elmers-glue-animation',
  'hot-sauce-bottles',
  '8-bit-dog-webzine',
]

function isProjectSlug(s: string | undefined): s is ProjectSlug {
  return s !== undefined && (slugs as string[]).includes(s)
}

export function ProjectPage() {
  const { slug } = useParams()

  if (!isProjectSlug(slug)) {
    return <Navigate to="/" replace />
  }

  const project = projectBySlug[slug]

  return (
    <ProjectShell project={project}>
      <ProjectContent slug={slug} />
    </ProjectShell>
  )
}
