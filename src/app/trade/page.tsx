'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tradeOpportunities, logisticsServices } from '@/lib/data'

export default function TradePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const filteredTrades = tradeOpportunities.filter(trade => {
    const matchesSearch = trade.chemical.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = selectedType === 'all' || trade.type === selectedType
    const matchesLocation = selectedLocation === 'all' || 
      trade.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSearch && matchesType && matchesLocation
  })

  const filteredLogistics = logisticsServices.filter(service => {
    const matchesSearch = service.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.coverage.some(region => region.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesSearch
  })

  const getTradeTypeColor = (type: string) => {
    return type === 'buy' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Trade & Logistics</h1>
              <p className="text-lg text-gray-600 mt-2">
                Discover trade opportunities and logistics solutions worldwide
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline">
                Post Buy Request
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Post Sell Offer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="opportunities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunities">Trade Opportunities</TabsTrigger>
            <TabsTrigger value="logistics">Logistics Services</TabsTrigger>
            <TabsTrigger value="market-data">Market Data</TabsTrigger>
          </TabsList>

          {/* Trade Opportunities Tab */}
          <TabsContent value="opportunities">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search chemicals, companies, locations..."
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
                    <SelectValue placeholder="Trade Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="buy">Buy Orders</SelectItem>
                    <SelectItem value="sell">Sell Offers</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="middle east">Middle East</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Trade Opportunities Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredTrades.length} Active Opportunities
                </h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="quantity">Quantity: Large to Small</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTrades.map((trade) => (
                  <Card key={trade.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CardTitle className="text-lg">
                            {trade.chemical}
                          </CardTitle>
                          <Badge className={getTradeTypeColor(trade.type)}>
                            {trade.type.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{trade.price}</div>
                          <div className="text-sm text-gray-500">{trade.quantity}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Company</p>
                            <p className="text-sm text-gray-900">{trade.company}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Location</p>
                            <p className="text-sm text-gray-900">{trade.location}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
                          <p className="text-sm text-gray-600">{trade.description}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Specifications</p>
                          <div className="flex flex-wrap gap-1">
                            {trade.specifications.map((spec, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="text-sm text-gray-500">
                            Valid until: {new Date(trade.validUntil).toLocaleDateString()}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Get Quote
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Contact Seller
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Logistics Services Tab */}
          <TabsContent value="logistics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLogistics.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.company} services`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{service.company}</CardTitle>
                      <Badge variant="outline">
                        {service.serviceType.charAt(0).toUpperCase() + service.serviceType.slice(1)}
                      </Badge>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Coverage Areas</p>
                        <div className="flex flex-wrap gap-1">
                          {service.coverage.map((area, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Certifications</p>
                        <div className="flex flex-wrap gap-1">
                          {service.certifications.map((cert, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <Button variant="outline" size="sm">
                          Get Quote
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Market Data Tab */}
          <TabsContent value="market-data">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Price Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Chemical Price Index</CardTitle>
                  <CardDescription>Real-time pricing data for major chemicals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Methanol</p>
                        <p className="text-sm text-gray-500">Per MT, FOB</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">$425</p>
                        <p className="text-sm text-green-600">+2.3%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Ethylene</p>
                        <p className="text-sm text-gray-500">Per MT, CIF</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">$1,250</p>
                        <p className="text-sm text-red-600">-1.8%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Benzene</p>
                        <p className="text-sm text-gray-500">Per MT, CFR</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">$920</p>
                        <p className="text-sm text-green-600">+5.1%</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    View Full Price Dashboard
                  </Button>
                </CardContent>
              </Card>

              {/* Shipping Rates */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Rates</CardTitle>
                  <CardDescription>Current freight rates for chemical transport</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Houston - Rotterdam</p>
                        <p className="text-sm text-gray-500">Chemical tanker</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$85/MT</p>
                        <p className="text-sm text-gray-500">15 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Singapore - Mumbai</p>
                        <p className="text-sm text-gray-500">Bulk carrier</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$45/MT</p>
                        <p className="text-sm text-gray-500">8 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Shanghai - Los Angeles</p>
                        <p className="text-sm text-gray-500">Container</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">$120/MT</p>
                        <p className="text-sm text-gray-500">18 days</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    Get Shipping Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}