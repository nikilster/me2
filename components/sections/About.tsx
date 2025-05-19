'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nikil/',
      handle: '@nikil'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nikil',
      handle: '@nikil'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/nikilster',
      handle: 'nikilster'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nikilster',
      handle: 'nikilster'
    }
  ]

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2">About Me</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            All you ever wanted to know...
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-md rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                <Image
                  src="/images/about/nikil-profile-pic-latest-with-forbes.jpg"
                  alt="Nikil Viswanathan"
                  width={600}
                  height={800}
                  className="object-cover"
                  priority
                  unoptimized={true}
                />
              </div>
            </div>
            
            {/* About Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">Hi! 👋 I'm <Link href="/" className="text-primary-600 dark:text-primary-400 no-underline hover:underline">Nikil!</Link></h2>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  You're probably here either because you were trying to go to Facebook but accidentally typed nikilster.com instead (in which case, <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">here you go</a>) or you're curious about me. In which case, here a bit about me:
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  I had the time of my life at <Link href="/life" className="text-primary-600 dark:text-primary-400">Stanford</Link> doing my undergrad and masters in Computer Science with a focus on Artifical Intelligence. <Link href="/fun" className="text-primary-600 dark:text-primary-400">I build a lot of stuff for fun</Link> which has led me to a lot of funny situations - such as receiving a <Link href="/fun/#checkintomyflight" className="text-primary-600 dark:text-primary-400">cease and desist</Link> from Southwest Airlines or going to the barbershop and seeing my face plastered on the <Link href="/press/#check-in-to-my-flight-san-joe-mercury-front-page" className="text-primary-600 dark:text-primary-400">front page of a bunch of newspapers</Link>).
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  I started a company that's on the quest to help you feel like you're always living with your friends, just like it was in college. One Sunday, for fun we built the <Link href="/fun/#downtolunch" className="text-primary-600 dark:text-primary-400">Down To Lunch</Link> app which ended up being the <Link href="/fun/#downtolunch" className="text-primary-600 dark:text-primary-400">#1 Social App / #2 Overall App</Link> in the App Store, was featured as the <Link href="/press/#dtl-new-york-times" className="text-primary-600 dark:text-primary-400">front page cover story</Link> on the New York Times business section, and is <a href="http://imdtl.com/story.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400">used by college students and high schoolers around the world</a>.
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  People tell us that <Link href="/stories" className="text-primary-600 dark:text-primary-400">our life</Link> is basically HBO's Silicon Valley - but even more ridiculous. Everything from creating a Silicon Valley hacker house, to putting our phone number in DTL and getting 5000 text messages a day from random people around the world (had to get the CEO of Apple to fix our phones), to being honored as part of the <Link href="/press/#forbes-30-under-30" className="text-primary-600 dark:text-primary-400">Forbes 30 Under 30</Link>. Life is pretty crazy, a lot of hard work, and a ton of fun!
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Lots more to say - will add more soon! Have a fantastic day and enjoy checking out the other stuff on my site!
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  - Nikil 😄
                </p>
                
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                  Also we're almost always hiring so if you're interested in working with us or just wanna say hi, hit me up: <a href="mailto:nikil@cs.stanford.edu?subject=Yo!" className="text-primary-600 dark:text-primary-400">nikil@cs.stanford.edu</a>
                </p>
                
                <p className="mb-8 text-gray-800 dark:text-gray-300">
                  To get inside inside look into my ridiculous and entertaining Silicon Valley life, add me on:
                </p>
                
                {/* Social Media Links */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      {link.name} ({link.handle})
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 