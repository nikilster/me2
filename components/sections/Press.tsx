'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Sample press data - replace with your actual press features
const pressFeatures = [
  {
    id: 1,
    title: 'How This Developer Built an App That Changed an Industry',
    publication: 'Tech Magazine',
    date: 'November 10, 2023',
    excerpt: 'An in-depth look at how Your Name developed an application that revolutionized the industry.',
    image: '/press1.jpg',
    logo: '/techmagazine-logo.png',
    link: 'https://example.com/press1',
  },
  {
    id: 2,
    title: 'The Rising Stars of Tech: 30 Under 30',
    publication: 'Business Weekly',
    date: 'September 5, 2023',
    excerpt: 'Your Name was featured in this year\'s list of promising young talent in the technology sector.',
    image: '/press2.jpg',
    logo: '/businessweekly-logo.png',
    link: 'https://example.com/press2',
  },
  {
    id: 3,
    title: 'Interview: The Future of [Your Industry]',
    publication: 'Industry Insider',
    date: 'July 22, 2023',
    excerpt: 'A conversation with Your Name about trends, challenges, and the future of the industry.',
    image: '/press3.jpg',
    logo: '/insider-logo.png',
    link: 'https://example.com/press3',
  },
]

export default function Press() {
  return (
    <section id="press" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Press Features</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I've been fortunate to be featured in various publications. Here are some highlights from the press.
          </p>
          
          <div className="space-y-12">
            {pressFeatures.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              >
                <div className="md:w-1/3 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-6 w-6 mr-2 relative">
                        <Image
                          src={item.logo}
                          alt={item.publication}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.publication} • {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.excerpt}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center font-medium"
                  >
                    Read Article
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