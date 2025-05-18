'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-gray-900">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
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
                I'm a passionate Web Developer who loves creating amazing experiences.
                Welcome to my personal website where I showcase my work and share my thoughts.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    View My Work
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/hero-image.jpg"
                  alt="Hero image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 