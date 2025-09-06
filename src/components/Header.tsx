'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BI</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Business</span>
                <span className="text-xl font-bold text-blue-600">Intel</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/suppliers" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Suppliers & Traders
            </Link>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              News & Reports
            </Link>
            <Link 
              href="/trade" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Trade & Logistics
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search companies, chemicals..."
                className="w-64 pl-10"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/suppliers" 
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Suppliers & Traders
                  </Link>
                  <Link 
                    href="/news" 
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    News & Reports
                  </Link>
                  <Link 
                    href="/trade" 
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Trade & Logistics
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                  
                  <div className="pt-4 border-t">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="mb-4"
                    />
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm">
                        Sign In
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Register
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Suggestions Dropdown (Desktop) */}
      {isSearchOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden md:block">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Methanol suppliers</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Chemical logistics Europe</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Petrochemical traders</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">REACH compliance</div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}