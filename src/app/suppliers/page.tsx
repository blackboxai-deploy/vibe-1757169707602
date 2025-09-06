'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { companies, chemicalCategories, regions } from '@/lib/data'

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesType = selectedType === 'all' || company.type === selectedType
    const matchesRegion = selectedRegion === 'all' || company.location.toLowerCase().includes(selectedRegion.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
      company.specialties.some(specialty => specialty.toLowerCase().includes(selectedCategory.toLowerCase()))

    return matchesSearch && matchesType && matchesRegion && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Suppliers & Traders</h1>
              <p className="text-lg text-gray-600 mt-2">
                Connect with verified chemical companies worldwide
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Register Your Company
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search companies, chemicals, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Company Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="supplier">Suppliers</SelectItem>
                <SelectItem value="trader">Traders</SelectItem>
                <SelectItem value="logistics">Logistics</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region.toLowerCase()}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Chemical Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {chemicalCategories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                Search: {searchTerm} ×
              </Badge>
            )}
            {selectedType !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedType('all')}>
                Type: {selectedType} ×
              </Badge>
            )}
            {selectedRegion !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedRegion('all')}>
                Region: {selectedRegion} ×
              </Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                Category: {selectedCategory} ×
              </Badge>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredCompanies.length} Companies Found
            </h2>
            <p className="text-sm text-gray-600">
              Showing verified suppliers, traders, and logistics providers
            </p>
          </div>
          
          <Select defaultValue="relevance">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Sort by Relevance</SelectItem>
              <SelectItem value="name">Company Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="verified">Verified First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg leading-tight">
                        {company.name}
                      </CardTitle>
                      {company.verified && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {company.type.charAt(0).toUpperCase() + company.type.slice(1)}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Est. {company.yearEstablished}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={company.image} 
                    alt={`${company.name} facility`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardDescription className="line-clamp-3">
                  {company.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Location</p>
                    <p className="text-sm text-gray-600">{company.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1">
                      {company.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {company.specialties.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{company.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-1">
                      {company.certifications.slice(0, 2).map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                      {company.certifications.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{company.certifications.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      {company.employeeCount} employees
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredCompanies.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Companies
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters to find more results.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedType('all')
                setSelectedRegion('all')
                setSelectedCategory('all')
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}