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
                I'm a [Your Profession] based in [Your Location]. I have [X years] of experience in [Your Field], 
                specializing in [Your Specialization]. My journey began when I [brief story about how you got started].
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My approach to [Your Field] is focused on [Your Approach/Philosophy]. I believe in 
                [Your Beliefs about your work] and always strive to [Your Goals].
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When I'm not [working on projects], you can find me [Your Hobbies/Interests]. 
                I'm also passionate about [Other Passions] and enjoy [Activities].
              </p>
              <div className="flex flex-wrap gap-2">
                {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'].map((skill) => (
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
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 