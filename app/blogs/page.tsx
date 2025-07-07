import BlogCard from '@/components/BlogCard'
import { getDateOrTime } from '@/lib/fetch/datem'
import { returnMultipleBlogs } from '@/lib/fetch/hygraphBlogs'


export default async function BlogsPage() {

    let receivedBlogs:Awaited<ReturnType<typeof returnMultipleBlogs>> = {blogBs: []}

    try {
        receivedBlogs =  await returnMultipleBlogs()
    } catch (error) {
        console.error('failed to fetch blogs')
        
    }


    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-playfair text-headline font-bold text-charcoal-black mb-4">
                        Inspiration for Every Corner
                    </h1>
                    <p className="text-body text-gray-600 max-w-3xl mx-auto">
                        Browse our latest blog posts filled with practical guides, before-and-afters, home organization
                        tips, and decorating stories.
                    </p>
                </div>

                {/* Blog Grid */}
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

                {/* Pagination
                <div className="flex justify-center items-center space-x-4">
                    <button className="px-4 py-2 text-sm font-montserrat font-medium text-gray-500 bg-gray-100 rounded-md cursor-not-allowed">
                        Previous
                    </button>
                    <div className="flex space-x-2">
                        <button className="px-3 py-2 text-sm font-montserrat font-medium bg-cocoa-brown text-white rounded-md">
                            1
                        </button>
                        <button className="px-3 py-2 text-sm font-montserrat font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                            2
                        </button>
                        <button className="px-3 py-2 text-sm font-montserrat font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                            3
                        </button>
                    </div>
                    <button className="px-4 py-2 text-sm font-montserrat font-medium text-cocoa-brown bg-gray-100 rounded-md hover:bg-gray-200">
                        Next
                    </button>
                </div> */}
            </div>
        </div>
    )
}
