import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { returnNumberedBlogs } from '@/lib/fetch/hygraphBlogs'
import { getDateOrTime } from '@/lib/fetch/datem'


export const revalidate = 60; // seconds


export default async function HomePage() {
    // Import the types if not already imported
    // import type { DMultipleBlog, INumberedBlog } from '@/lib/fetch/hygraphBlogs'
    let receivedBlogs: Awaited<ReturnType<typeof returnNumberedBlogs>> = { blogBs: [] }

    try {
        receivedBlogs = await returnNumberedBlogs(3)
    } catch (error) {
        console.error('Failed to fetch blogs:', error)
        // Optionally show a toast or send error to monitoring service
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?cs=srgb&dl=pexels-falling4utah-2724748.jpg&fm=jpg"
                        alt="Cozy home interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="font-playfair text-headline font-bold mb-6">Beautiful Living Starts at Home</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover fresh inspiration, simple tips, and beautiful ideas to elevate your living space—one
                        corner at a time.
                    </p>
                    <Link
                        href="/blogs"
                        className="inline-block bg-peachy-tan text-white px-8 py-4 rounded-md font-montserrat font-semibold hover:bg-cocoa-brown transition-colors text-lg"
                    >
                        Explore Home Ideas
                    </Link>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-playfair text-subheading font-semibold text-charcoal-black mb-6">
                                Why Clean Spaces?
                            </h2>
                            <p className="text-body text-gray-700 leading-relaxed">
                                At Clean Spaces, we believe that a well-designed home inspires a well-lived life.
                                Whether you're a minimalist, a color lover, or someone discovering your style—our blog
                                helps you create harmony, beauty, and comfort in your daily surroundings.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="https://images.pexels.com/photos/29870247/pexels-photo-29870247.jpeg?cs=srgb&dl=pexels-szymon-shields-1503561-29870247.jpg&fm=jpg"
                                alt="Beautiful home interior"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Blog Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-playfair text-subheading font-semibold text-charcoal-black mb-4">
                            Latest Home Inspiration
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular posts filled with practical tips, beautiful transformations, and
                            creative ideas for every room.
                        </p>
                    </div>

                    {receivedBlogs.blogBs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {receivedBlogs.blogBs.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    title={post.title}
                                    slug={post.slug}
                                    description={post.description}
                                    date={getDateOrTime(post.createdAt)}
                                    image={post.image}
                                    id={post.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">No blog posts available at the moment.</div>
                    )}

                    <div className="text-center">
                        <Link
                            href="/blogs"
                            className="inline-block bg-cocoa-brown text-white px-8 py-3 rounded-md font-montserrat font-medium hover:bg-dark-maroon transition-colors"
                        >
                            View All Posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Email Subscription CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{/* <EmailSubscription /> */}</div>
            </section>
        </div>
    )
}
