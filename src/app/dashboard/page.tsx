'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { companies, newsArticles, tradeOpportunities } from '@/lib/data'

export default function DashboardPage() {
  const userCompany = companies[0] // Mock current user company
  const savedCompanies = companies.slice(1, 4)
  const recentNews = newsArticles.slice(0, 3)
  const watchedTrades = tradeOpportunities.slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
              <p className="text-gray-600 mt-1">
                {userCompany.name} • {userCompany.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline">
                Edit Profile
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Post Trade Offer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Profile Views</CardDescription>
              <CardTitle className="text-2xl">1,247</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-green-600">+12% from last month</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Connection Requests</CardDescription>
              <CardTitle className="text-2xl">23</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-blue-600">8 pending responses</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Trade Posts</CardDescription>
              <CardTitle className="text-2xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-600">3 sell, 2 buy orders</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Messages</CardDescription>
              <CardTitle className="text-2xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-red-600">4 unread messages</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="connections">My Connections</TabsTrigger>
            <TabsTrigger value="trades">My Trades</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent News */}
            <Card>
              <CardHeader>
                <CardTitle>Industry Updates</CardTitle>
                <CardDescription>Latest news relevant to your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNews.map((article) => (
                    <div key={article.id} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {article.author} • {article.readTime} min read
                        </p>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All News
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <div className="w-8 h-8 bg-blue-100 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <span className="text-sm">Find Suppliers</span>
                  </Button>
                  
                  <Button variant="outline" className="h-20 flex-col">
                    <div className="w-8 h-8 bg-green-100 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded"></div>
                    </div>
                    <span className="text-sm">Post Trade</span>
                  </Button>
                  
                  <Button variant="outline" className="h-20 flex-col">
                    <div className="w-8 h-8 bg-purple-100 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    </div>
                    <span className="text-sm">Market Data</span>
                  </Button>
                  
                  <Button variant="outline" className="h-20 flex-col">
                    <div className="w-8 h-8 bg-orange-100 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-600 rounded"></div>
                    </div>
                    <span className="text-sm">Logistics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connections Tab */}
          <TabsContent value="connections">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedCompanies.map((company) => (
                <Card key={company.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription>{company.location}</CardDescription>
                      </div>
                      {company.verified && (
                        <Badge className="bg-green-100 text-green-700">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={company.image} 
                          alt={`${company.name} facility`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Specialties</p>
                        <div className="flex flex-wrap gap-1">
                          {company.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                          {company.specialties.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{company.specialties.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Profile
                        </Button>
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Trades Tab */}
          <TabsContent value="trades">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Your Active Trade Posts</h3>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Create New Trade Post
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {watchedTrades.map((trade) => (
                  <Card key={trade.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{trade.chemical}</CardTitle>
                        <Badge className={trade.type === 'buy' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}>
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                      <CardDescription>Posted by {trade.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Quantity</p>
                            <p className="text-lg font-semibold">{trade.quantity}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Price</p>
                            <p className="text-lg font-semibold">{trade.price}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700">Location</p>
                          <p className="text-sm">{trade.location}</p>
                        </div>
                        
                        <div className="pt-3 border-t flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Valid until {new Date(trade.validUntil).toLocaleDateString()}
                          </span>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Remove
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

          {/* Watchlist Tab */}
          <TabsContent value="watchlist">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Price Watchlist</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Methanol</CardTitle>
                      <Badge className="bg-green-100 text-green-700">+2.3%</Badge>
                    </div>
                    <CardDescription>Current price trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">$425/MT</div>
                    <p className="text-sm text-gray-600">FOB Houston</p>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Set Alert
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Benzene</CardTitle>
                      <Badge className="bg-red-100 text-red-700">-1.8%</Badge>
                    </div>
                    <CardDescription>Current price trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">$920/MT</div>
                    <p className="text-sm text-gray-600">CFR Europe</p>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Set Alert
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Ethylene Glycol</CardTitle>
                      <Badge className="bg-green-100 text-green-700">+5.1%</Badge>
                    </div>
                    <CardDescription>Current price trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">$780/MT</div>
                    <p className="text-sm text-gray-600">CIF Asia</p>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">
                        Set Alert
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}