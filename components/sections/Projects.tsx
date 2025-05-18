'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of project 1. Explain what this project is, what technologies you used, and what you learned.',
    image: '/project1.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://project1.com',
    github: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of project 2. Explain what this project is, what technologies you used, and what you learned.',
    image: '/project2.jpg',
    tags: ['TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://project2.com',
    github: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description of project 3. Explain what this project is, what technologies you used, and what you learned.',
    image: '/project3.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: 'https://project3.com',
    github: 'https://github.com/yourusername/project3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is a description of project 4. Explain what this project is, what technologies you used, and what you learned.',
    image: '/project4.jpg',
    tags: ['Vue.js', 'Nuxt.js', 'Supabase'],
    link: 'https://project4.com',
    github: 'https://github.com/yourusername/project4',
  },
]

// Categories for filtering
const categories = ['All', 'Web', 'Mobile', 'Design', 'Other']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Filtered projects based on category
  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.tags.includes(activeCategory)
  )

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge that I've tackled.
          </p>
          
          {/* Filter categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      View Project
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 font-medium"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 