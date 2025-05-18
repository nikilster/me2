import Contact from '@/components/sections/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Personal Website',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
}

export default function ContactPage() {
  return <Contact />
} 