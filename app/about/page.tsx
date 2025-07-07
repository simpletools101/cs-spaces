import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-headline font-bold text-charcoal-black mb-6">Meet Clean Spaces</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              We're a small team of homebodies, designers, and everyday organizers passionate about creating beautiful,
              livable spaces. Clean Spaces was born from the joy of simplifying and styling the places we call home.
            </p>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              We write, share, and explore ideas that bring comfort and beauty into your everyday life. Whether you're
              looking to declutter your kitchen, create a cozy reading corner, or completely transform a room, we're
              here to inspire and guide you through the process.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              Our philosophy is simple: beautiful living doesn't require perfection or a huge budget. It's about
              creating spaces that reflect who you are and support how you want to live.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.pexels.com/photos/2260838/pexels-photo-2260838.jpeg?cs=srgb&dl=pexels-arthurbrognoli-2260838.jpg&fm=jpg"
              alt="Clean Spaces team workspace"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-soft-blush rounded-lg p-8 mb-12">
          <h2 className="font-playfair text-subheading font-semibold text-charcoal-black mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-body text-cocoa-brown text-center leading-relaxed max-w-3xl mx-auto">
            To inspire and empower people to create homes that are not just beautiful, but truly livable. We believe
            that everyone deserves a space that brings them joy, peace, and comfort—regardless of size, budget, or style
            preference.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold text-charcoal-black mb-3">Authenticity</h3>
            <p className="text-gray-600">
              We share real homes, honest advice, and practical solutions that work for everyday life.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold text-charcoal-black mb-3">Accessibility</h3>
            <p className="text-gray-600">
              Beautiful design should be achievable for everyone, regardless of budget or experience.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold text-charcoal-black mb-3">Community</h3>
            <p className="text-gray-600">
              We're building a supportive community of home lovers who inspire and learn from each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
