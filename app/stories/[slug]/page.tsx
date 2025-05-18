import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Sample blog posts - replace with your actual posts
const posts = [
  {
    id: 1,
    title: 'The Evolution of Web Development',
    date: 'December 5, 2023',
    excerpt: 'An exploration of how web development has changed over the past decade and what the future might hold.',
    content: `
      <p>The field of web development has undergone significant transformation over the past decade. From the days of simple HTML pages to complex web applications built with modern frameworks, the journey has been remarkable.</p>
      
      <h2>The Early Days</h2>
      <p>In the early days, web development was primarily focused on creating static web pages with HTML. CSS was introduced to add styling, and JavaScript was used sparingly for simple interactions.</p>
      
      <h2>The Rise of Frameworks</h2>
      <p>As web applications became more complex, frameworks like jQuery, Angular, React, and Vue.js emerged to help developers build interactive user interfaces more efficiently.</p>
      
      <h2>Modern Web Development</h2>
      <p>Today, web development has evolved into a sophisticated field with tools like Next.js, TypeScript, and GraphQL leading the way. Server-side rendering, static site generation, and JAMstack architecture have become popular approaches for building performant web applications.</p>
      
      <h2>The Future</h2>
      <p>Looking ahead, we can expect further advancements in web development with technologies like WebAssembly, Progressive Web Apps, and AI-driven development tools shaping the future of the web.</p>
    `,
    category: 'Technology',
    image: '/post1.jpg',
    slug: 'evolution-of-web-development',
  },
  {
    id: 2,
    title: 'Designing for Accessibility',
    date: 'November 18, 2023',
    excerpt: 'Why accessibility should be a priority in your design process and tips for making your websites more inclusive.',
    content: `
      <p>Accessibility is a crucial aspect of web design that is often overlooked. Designing accessible websites ensures that people with disabilities can use your site effectively.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility is not just about compliance with regulations; it's about creating inclusive experiences for all users. By designing with accessibility in mind, you can reach a wider audience and provide a better user experience for everyone.</p>
      
      <h2>Key Accessibility Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive set of recommendations for making web content more accessible. Some key guidelines include providing text alternatives for non-text content, ensuring keyboard accessibility, and making content distinguishable.</p>
      
      <h2>Practical Tips</h2>
      <p>Some practical tips for improving accessibility include using semantic HTML, providing sufficient color contrast, adding proper alt text for images, and ensuring form fields have associated labels.</p>
      
      <h2>Testing for Accessibility</h2>
      <p>Regular testing is essential to ensure your website meets accessibility standards. Tools like axe, WAVE, and Lighthouse can help identify accessibility issues that need to be addressed.</p>
    `,
    category: 'Design',
    image: '/post2.jpg',
    slug: 'designing-for-accessibility',
  },
  {
    id: 3,
    title: 'My Journey as a Developer',
    date: 'October 30, 2023',
    excerpt: 'A personal reflection on my career path, challenges faced, and lessons learned along the way.',
    content: `
      <p>My journey as a developer began several years ago when I took my first programming class. Since then, I've worked on numerous projects, faced various challenges, and learned valuable lessons along the way.</p>
      
      <h2>Getting Started</h2>
      <p>Like many developers, I started with the basics - HTML, CSS, and JavaScript. I built simple websites and gradually moved on to more complex projects as I gained confidence and knowledge.</p>
      
      <h2>Challenges Faced</h2>
      <p>Throughout my journey, I've faced numerous challenges, from debugging complex issues to working with legacy codebases. Each challenge has been an opportunity to learn and grow as a developer.</p>
      
      <h2>Key Lessons</h2>
      <p>Some key lessons I've learned include the importance of continuous learning, the value of collaboration, and the need for effective problem-solving skills.</p>
      
      <h2>Looking Forward</h2>
      <p>As I continue my journey, I'm excited about exploring new technologies, taking on challenging projects, and making meaningful contributions to the developer community.</p>
    `,
    category: 'Personal',
    image: '/post3.jpg',
    slug: 'my-journey-as-developer',
  },
  {
    id: 4,
    title: 'Best Practices for Modern React',
    date: 'October 10, 2023',
    excerpt: 'A comprehensive guide to writing clean, efficient, and maintainable React code in 2023.',
    content: `
      <p>React has become one of the most popular libraries for building user interfaces. In this post, I'll share some best practices for writing clean, efficient, and maintainable React code.</p>
      
      <h2>Use Functional Components</h2>
      <p>With the introduction of hooks, functional components have become the preferred way to write React components. They are simpler, more concise, and can do everything that class components can do.</p>
      
      <h2>Optimize Performance</h2>
      <p>Performance optimization is crucial for React applications. Techniques like memoization, code splitting, and lazy loading can significantly improve the performance of your React apps.</p>
      
      <h2>State Management</h2>
      <p>Choose the right state management approach based on your application's needs. For simple applications, React's built-in state management might be sufficient. For complex applications, consider using libraries like Redux or Zustand.</p>
      
      <h2>Testing</h2>
      <p>Write tests for your React components to ensure they work as expected. Libraries like Jest and React Testing Library make it easy to test React components.</p>
      
      <h2>Keep Up with Updates</h2>
      <p>React is constantly evolving, with new features and improvements being added regularly. Stay updated with the latest React versions and best practices to write modern React code.</p>
    `,
    category: 'Development',
    image: '/post4.jpg',
    slug: 'best-practices-modern-react',
  },
]

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    }
  }
  
  return {
    title: `${post.title} | Personal Website`,
    description: post.excerpt,
  }
}

export default function StoryPage({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/stories"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Stories
          </Link>
          
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
              {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  )
} 