import Fun from '@/components/sections/Fun'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fun Projects | Nikil Viswanathan',
  description: 'Check out the fun projects I\'ve built for myself and others, including Down To Lunch, Check In To My Flight, and more.',
}

export default function FunPage() {
  return <Fun />
} 