'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
// import { VhumaniLogo } from '../../../public/assets/images/images'
import Image from 'next/image'
import { ModeToggle } from '@/components/layouts/mode-toggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/for-businesses', label: 'For Businesses' },
    { href: '/for-influencers', label: 'For Influencers' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 group"
              aria-label="Vhumani Home"
            >
              <div className='flex items-center'>
                <Image src="/vhumani-logo.png" alt='logo' width={50} height={50} />
              </div>
             
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group',
                    isActiveLink(link.href)
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute inset-x-2 bottom-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
               
              ))}
               <ModeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-16 left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out',
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                    isActiveLink(link.href)
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Header