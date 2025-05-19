import Projects from '@/components/sections/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Nikil Viswanathan',
  description: 'Explore academic and research projects by Nikil Viswanathan, including work in Computer Vision, Natural Language Processing, and more.',
}

export default function ProjectsPage() {
  return <Projects />
} 