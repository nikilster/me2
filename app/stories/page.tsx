import Stories from '@/components/sections/Stories'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stories | Personal Website',
  description: 'Read my blog posts, articles, and stories about technology, design, and more.',
}

export default function StoriesPage() {
  return <Stories />
} 