import Link from 'next/link'
import { Home, Mail } from 'lucide-react'
import Image from 'next/image'
import cleanSpacesLogo from '@/assets/Clogo.png'

export default function Footer() {
    return (
        <footer className="bg-charcoal-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image src={cleanSpacesLogo} alt="CleanSpaces logo" width={60} height={60} className='rounded-lg' />

                            <span className="ml-5 font-playfair text-xl font-semibold">Clean Spaces</span>
                        </Link>
                        <p className=" text-gray-300 text-sm">
                            Beautiful living starts at home. Discover inspiration for every corner of your space.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-montserrat font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/blogs"
                                    className="text-gray-300 hover:text-peachy-tan transition-colors text-sm"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-peachy-tan transition-colors text-sm"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-300 hover:text-peachy-tan transition-colors text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-300 hover:text-peachy-tan transition-colors text-sm"
                                >
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">© 2025 Clean Spaces. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
