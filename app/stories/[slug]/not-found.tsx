import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Sorry, the post you're looking for doesn't exist or has been removed.
      </p>
      <Link 
        href="/stories" 
        className="button-primary"
      >
        Back to Stories
      </Link>
    </div>
  )
} 