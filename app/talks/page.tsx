import Talks from '@/components/sections/Talks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talks | Personal Website',
  description: 'Watch recordings of my talks and presentations at conferences and events.',
}

export default function TalksPage() {
  return <Talks />
} 