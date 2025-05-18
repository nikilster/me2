'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm Your Name
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a Web Developer based in New York. I have 5 years of experience in full-stack development, 
                specializing in modern JavaScript frameworks. My journey began when I built my first website during college and got hooked on web development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My approach to development is focused on creating clean, maintainable code that delivers exceptional user experiences. I believe in 
                using the right tool for the job and always strive to stay current with industry best practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me hiking or reading science fiction. 
                I'm also passionate about photography and enjoy cooking new recipes from around the world.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 