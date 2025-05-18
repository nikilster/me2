import Projects from '@/components/sections/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Personal Website',
  description: 'Explore my portfolio of projects and case studies.',
}

export default function ProjectsPage() {
  return <Projects />
} 