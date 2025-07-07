'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home } from 'lucide-react'
import Image from 'next/image'
import cleanSpacesLogo from "@/assets/Clogo.png"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blog' },
        { href: '/about', label: 'About' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
    ]

    return (
        <nav className="bg-white shadow-sm  h-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={cleanSpacesLogo} alt='CleanSpaces logo' width={80} height={80}  />
                        <span className="font-playfair text-xl font-bold text-charcoal-black">Clean Spaces</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-montserrat text-sm font-medium text-charcoal-black hover:text-cocoa-brown transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => {
                                // console.log("onDidClick")
                                setIsOpen(!isOpen)
                            }}
                            className="  text-charcoal-black hover:text-cocoa-brown"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border border-green-600  top-0 relative z-20">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white  border border-red-500">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-2 font-montserrat text-sm font-medium text-charcoal-black hover:text-cocoa-brown transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
