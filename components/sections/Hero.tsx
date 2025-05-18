'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                  Hi, I'm
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="text-gray-900 dark:text-white">Your </span>
                  <span className="text-primary-600 dark:text-primary-500">Name</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                I'm a passionate [Your Profession] who loves creating amazing experiences.
                Welcome to my personal website where I showcase my work and share my thoughts.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                  <Link href="/projects" className="button-primary">
                    View My Work
                  </Link>
                  <Link href="/contact" className="button-secondary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <div className="relative block w-full rounded-lg overflow-hidden">
                <Image
                  src="/hero-image.jpg"
                  alt="Hero image"
                  width={600}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute inset-y-0 right-0 hidden xl:block xl:inset-y-0 xl:left-2/3 xl:w-screen bg-gradient-to-r from-primary-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
    </div>
  )
} 