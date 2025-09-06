'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { newsArticles } from '@/lib/data'

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'market', label: 'Market Analysis' },
    { value: 'regulatory', label: 'Regulatory Updates' },
    { value: 'company', label: 'Company News' },
    { value: 'technology', label: 'Technology & Innovation' }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'market': return 'bg-blue-100 text-blue-700'
      case 'regulatory': return 'bg-red-100 text-red-700'
      case 'company': return 'bg-green-100 text-green-700'
      case 'technology': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">News & Market Intelligence</h1>
              <p className="text-lg text-gray-600 mt-2">
                Stay informed with the latest chemical industry insights and trends
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline">
                Subscribe to Newsletter
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Download Reports
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search news, companies, chemicals..."
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
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
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
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                Category: {categories.find(c => c.value === selectedCategory)?.label} ×
              </Badge>
            )}
          </div>
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className={getCategoryColor(filteredNews[0].category)}>
                      {filteredNews[0].category.charAt(0).toUpperCase() + filteredNews[0].category.slice(1)}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(filteredNews[0].publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-sm text-gray-500">
                      {filteredNews[0].readTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredNews[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredNews[0].summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{filteredNews[0].author}</p>
                        <p className="text-xs text-gray-500">Senior Market Analyst</p>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/news/${filteredNews[0].id}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Latest News ({filteredNews.length} articles)
            </h2>
            <p className="text-sm text-gray-600">
              Stay up-to-date with chemical industry developments
            </p>
          </div>
          
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className={getCategoryColor(article.category)} variant="secondary">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {article.readTime} min read
                  </span>
                </div>
                
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
                
                <CardDescription className="line-clamp-3">
                  {article.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(article.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/news/${article.id}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all categories.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Never Miss Industry Updates
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter and get the latest chemical market insights, 
            regulatory updates, and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-50">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}