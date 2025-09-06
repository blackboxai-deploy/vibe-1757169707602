import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { companies, newsArticles, tradeOpportunities } from '@/lib/data'

export default function HomePage() {
  const featuredCompanies = companies.slice(0, 3)
  const latestNews = newsArticles.slice(0, 3)
  const recentTrades = tradeOpportunities.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect the Global
              <span className="block text-blue-200">Chemical Market</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The premier platform linking suppliers, traders, and logistics providers 
              across the worldwide chemical industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Explore Suppliers
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                View Trade Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Verified Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">180</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Trade Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Platform Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From supplier connections to market intelligence, BusinessIntel provides 
              comprehensive tools for chemical industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Suppliers & Traders Column */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Suppliers & Traders</CardTitle>
                <CardDescription>
                  Connect with verified chemical suppliers and traders worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {featuredCompanies.map((company) => (
                    <div key={company.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img 
                        src={company.image} 
                        alt={`${company.name} facility`}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {company.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {company.location}
                        </p>
                      </div>
                      {company.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          Verified
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href="/suppliers">Browse All Companies</Link>
                </Button>
              </CardContent>
            </Card>

            {/* News & Reports Column */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">News & Reports</CardTitle>
                <CardDescription>
                  Stay informed with latest market intelligence and industry news
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {latestNews.map((article) => (
                    <div key={article.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{article.readTime} min read</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {article.summary}
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/news">Read All News</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Trade & Logistics Column */}
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Trade & Logistics</CardTitle>
                <CardDescription>
                  Discover trade opportunities and logistics solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {recentTrades.map((trade) => (
                    <div key={trade.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {trade.chemical}
                        </h3>
                        <Badge variant={trade.type === 'buy' ? 'destructive' : 'default'} className="text-xs">
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>{trade.quantity} @ {trade.price}</div>
                        <div>{trade.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/trade">View All Opportunities</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BusinessIntel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide for comprehensive chemical market solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Network</h3>
              <p className="text-gray-600">
                All companies undergo strict verification processes to ensure reliability and trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Intelligence</h3>
              <p className="text-gray-600">
                Access live market data, pricing trends, and industry insights as they happen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connect with partners across 180+ countries with localized support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Trading</h3>
              <p className="text-gray-600">
                Enterprise-grade security with compliance tracking and document management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated industry experts available 24/7 to help with your chemical business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Powerful analytics and reporting tools to make data-driven business decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Chemical Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of chemical professionals who trust BusinessIntel 
            for their supply chain and trading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}