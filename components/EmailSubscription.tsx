"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

interface EmailSubscriptionProps {
  title?: string
  description?: string
  className?: string
}

export default function EmailSubscription({
  title = "Get home inspiration in your inbox",
  description = "Join our community of home lovers and receive weekly tips, ideas, and inspiration.",
  className = "",
}: EmailSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className={`bg-soft-blush rounded-lg p-8 text-center ${className}`}>
      <Mail className="h-8 w-8 text-cocoa-brown mx-auto mb-4" />
      <h3 className="font-playfair text-2xl font-semibold text-charcoal-black mb-2">{title}</h3>
      <p className="text-cocoa-brown mb-6 max-w-md mx-auto">{description}</p>

      {isSubmitted ? (
        <div className="text-cocoa-brown font-medium">Thank you for subscribing! 🏠</div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md border border-peachy-tan focus:outline-none focus:ring-2 focus:ring-cocoa-brown text-charcoal-black"
            />
            <button
              type="submit"
              className="bg-cocoa-brown text-white px-6 py-3 rounded-md hover:bg-dark-maroon transition-colors font-montserrat font-medium"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
