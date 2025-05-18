import About from '@/components/sections/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Personal Website',
  description: 'Learn more about me, my background, skills, and interests.',
}

export default function AboutPage() {
  return <About />
} 