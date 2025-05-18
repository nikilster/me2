import Press from '@/components/sections/Press'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press | Personal Website',
  description: 'Media coverage, interviews, and features about my work.',
}

export default function PressPage() {
  return <Press />
} 