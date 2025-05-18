'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Sample blog posts - replace with your actual posts
const posts = [
  {
    id: 1,
    title: 'The Evolution of Web Development',
    date: 'December 5, 2023',
    excerpt: 'An exploration of how web development has changed over the past decade and what the future might hold.',
    category: 'Technology',
    image: '/post1.jpg',
    slug: 'evolution-of-web-development',
  },
  {
    id: 2,
    title: 'Designing for Accessibility',
    date: 'November 18, 2023',
    excerpt: 'Why accessibility should be a priority in your design process and tips for making your websites more inclusive.',
    category: 'Design',
    image: '/post2.jpg',
    slug: 'designing-for-accessibility',
  },
  {
    id: 3,
    title: 'My Journey as a Developer',
    date: 'October 30, 2023',
    excerpt: 'A personal reflection on my career path, challenges faced, and lessons learned along the way.',
    category: 'Personal',
    image: '/post3.jpg',
    slug: 'my-journey-as-developer',
  },
  {
    id: 4,
    title: 'Best Practices for Modern React',
    date: 'October 10, 2023',
    excerpt: 'A comprehensive guide to writing clean, efficient, and maintainable React code in 2023.',
    category: 'Development',
    image: '/post4.jpg',
    slug: 'best-practices-modern-react',
  },
]

export default function Stories() {
  return (
    <section id="stories" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Stories</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I occasionally write about technology, design, and my experiences. Here are some of my recent posts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link href={`/stories/${post.slug}`} className="block">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 p-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/stories" className="button-primary">
              View All Stories
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 