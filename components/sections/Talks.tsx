'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Sample talks data - replace with your actual talks
const talks = [
  {
    id: 1,
    title: 'Revolutionizing UX Design',
    event: 'UX Conference 2023',
    date: 'October 15, 2023',
    description: 'A talk about the latest trends in UX design and how to implement them in your projects.',
    image: '/talk1.jpg',
    link: 'https://youtu.be/example1',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    event: 'TechSummit 2023',
    date: 'August 20, 2023',
    description: 'Discussing emerging technologies and methodologies in web development.',
    image: '/talk2.jpg',
    link: 'https://youtu.be/example2',
  },
  {
    id: 3,
    title: 'Building Scalable Applications',
    event: 'DevCon 2023',
    date: 'June 5, 2023',
    description: 'Strategies and best practices for building applications that can scale efficiently.',
    image: '/talk3.jpg',
    link: 'https://youtu.be/example3',
  },
]

export default function Talks() {
  return (
    <section id="talks" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">My Talks</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I enjoy sharing my knowledge and insights through speaking engagements. Here are some of my recent talks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talks.map((talk) => (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: talk.id * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm text-white bg-primary-600 inline-block px-2 py-1 rounded">
                      {talk.event}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{talk.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{talk.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{talk.description}</p>
                  <Link
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Watch Talk
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 