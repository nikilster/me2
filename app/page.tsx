import Hero from '@/components/sections/Hero'
import Link from 'next/link'

export default function Home() {
  const sections = [
    {
      title: 'About',
      description: 'Learn more about my background, skills, and interests.',
      link: '/about',
    },
    {
      title: 'Projects',
      description: 'Explore my portfolio of projects and case studies.',
      link: '/projects',
    },
    {
      title: 'Talks',
      description: 'Watch recordings of my talks and presentations.',
      link: '/talks',
    },
    {
      title: 'Press',
      description: 'Read media coverage and interviews about my work.',
      link: '/press',
    },
    {
      title: 'Stories',
      description: 'Check out my blog posts and articles.',
      link: '/stories',
    },
    {
      title: 'Contact',
      description: 'Get in touch for collaborations or opportunities.',
      link: '/contact',
    },
  ]

  return (
    <>
      <Hero />
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore My Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div 
                key={section.title}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {section.description}
                </p>
                <Link 
                  href={section.link}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                >
                  Visit {section.title}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 