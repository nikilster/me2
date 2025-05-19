import About from '@/components/sections/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Nikil Viswanathan',
  description: 'Learn more about Nikil Viswanathan, Stanford CS graduate, entrepreneur, and creator of Down To Lunch.',
}

export default function AboutPage() {
  return <About />
} 