import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

interface BlogPost {
    id: string
    title: string
    description: string
    image: string
    slug: string
    date: string
}



export default function BlogCard({ id, title, description, image, slug, date }: BlogPost) {
    return (
        <article className="bg-white rounded-lg shadow-sm border border-soft-blush overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-4 text-caption text-cocoa-brown mb-3">
                    <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{date}</span>
                    </div>
                </div>

                <h3 className="font-playfair text-xl font-semibold text-charcoal-black mb-3 line-clamp-2">{title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center font-montserrat text-sm font-medium text-cocoa-brown hover:text-dark-maroon transition-colors"
                >
                    Read More
                    <span className="ml-1">→</span>
                </Link>
            </div>
        </article>
    )
}
