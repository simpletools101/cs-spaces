import Image from 'next/image'
import { Calendar } from 'lucide-react'
import EmailSubscription from '@/components/EmailSubscription'
import { returnSingleBlog } from '@/lib/fetch/hygraphBlogs'
import { getDateOrTime } from '@/lib/fetch/datem'
import { RichText } from '@graphcms/rich-text-react-renderer'
import type { Metadata } from 'next'
import Link from 'next/link';

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export const revalidate = 60; // seconds


// ✅ Optional SEO metadata
export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
    const { slug } = props.params
    const data = await returnSingleBlog(slug)
    const blog = data.blogB

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            images: [blog.image],
        },
    }
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const { slug } = props.params
    let data: Awaited<ReturnType<typeof returnSingleBlog>> = {
        blogB: {
            id: '',
            title: '',
            slug: '',
            description: '',
            image: '',
            createdAt: '',
            content: { raw: '' },
            blogComments: [],
        },
    }

    try {
        data = await returnSingleBlog(slug)
    } catch (error) {
        console.log('failed to fetch blog data for:', slug)
    }
    const blog = data.blogB

    return (
        <div className="py-12" suppressContentEditableWarning suppressHydrationWarning>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Image */}
                <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
                </div>

                {/* Article Header */}
                <header className="mb-8">
                    <h1 className="font-playfair text-headline font-bold text-charcoal-black mb-4">{blog.title}</h1>
                    <div className="flex items-center space-x-6 text-cocoa-brown">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-montserrat text-sm">{getDateOrTime(blog.createdAt)}</span>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none mb-12 font-source-sans text-xl font-normal text-gray-800 mt-8 ">
                    <RichText
                        content={blog.content.raw}
                        renderers={{
                            a: ({ children, openInNewTab, href, rel, ...rest }) => {
                                if (href!.match(/^https?:\/\/|^\/\//i)) {
                                    return (
                                        <a
                                            href={href}
                                            target={openInNewTab ? '_blank' : '_self'}
                                            rel={rel || 'noopener noreferrer'}
                                            {...rest}
                                            className='underline'
                                        >
                                            {children}
                                        </a>
                                    )
                                }

                                return (
                                    <Link href={`${href}`} className='underline'>
                                        <a {...rest} className='underline'>{children}</a>
                                    </Link>
                                )
                            },
                        }}
                    />
                </article>

                {/* Subscribe CTA */}
                {/* <div className="mb-12">
                    <EmailSubscription
                        title="Love this content?"
                        description="Get more home inspiration and decorating tips delivered straight to your inbox."
                    />
                </div> */}

                {/* Comments Section */}
            </div>
        </div>
    )
}
