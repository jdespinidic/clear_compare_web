import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Calendar, TrendingUp, Home, Car, CreditCard } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

const blogPosts = [
  {
    id: 1,
    slug: "home-loan-rates-2025-guide",
    title: "Home Loan Rates Australia 2025: Complete Comparison Guide",
    excerpt: "Everything you need to know about current home loan rates, how they're determined, and which lenders offer the best deals in 2025.",
    content: "Comprehensive guide covering fixed vs variable rates, comparison rates, and expert predictions for Australian home loan market trends.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Home Loans",
    tags: ["home loans", "interest rates", "mortgage", "australia"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 2,
    slug: "first-home-buyer-guide-2025",
    title: "First Home Buyer's Guide Australia 2025: Steps, Grants & Tips",
    excerpt: "Step-by-step guide for first home buyers including government grants, deposit requirements, and insider tips from mortgage brokers.",
    content: "Complete roadmap for first-time property buyers, covering eligibility criteria, application processes, and money-saving strategies.",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Home Loans",
    tags: ["first home buyer", "grants", "deposits", "property"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 3,
    slug: "car-loan-calculator-guide",
    title: "Car Loan Calculator: How to Budget for Your Next Vehicle Purchase",
    excerpt: "Learn how to use car loan calculators effectively, understand repayment structures, and find the best financing options for your budget.",
    content: "Detailed breakdown of car loan calculations, factors affecting your repayments, and strategies to secure better rates.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Car Loans",
    tags: ["car loans", "calculator", "budgeting", "financing"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 4,
    slug: "personal-loan-debt-consolidation",
    title: "Personal Loans for Debt Consolidation: Complete Strategy Guide",
    excerpt: "How to use personal loans to consolidate multiple debts, reduce interest payments, and simplify your financial life in 2025.",
    content: "Expert strategies for debt consolidation, comparing personal loan options, and creating a sustainable repayment plan.",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Personal Loans",
    tags: ["debt consolidation", "personal loans", "financial planning"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 5,
    slug: "credit-score-improvement-guide",
    title: "How to Improve Your Credit Score Fast: 10 Proven Strategies for 2025",
    excerpt: "Actionable steps to boost your credit score quickly, understand credit reports, and increase your loan approval chances.",
    content: "Comprehensive guide to credit improvement, including timeline expectations, common mistakes to avoid, and expert tips.",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Financial Tips",
    tags: ["credit score", "financial health", "loan approval"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  }
]

const categories = [
  { name: "Home Loans", count: 12, icon: Home },
  { name: "Car Loans", count: 8, icon: Car },
  { name: "Personal Loans", count: 10, icon: CreditCard },
  { name: "Financial Tips", count: 15, icon: TrendingUp }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)
  const recentPosts = blogPosts.slice(3)

  return (
    <>
      <Head>
        <title>Financial Blog - Loan Guides, Tips & Expert Advice | ClearCompare</title>
        <meta name="description" content="Expert financial advice, loan comparison guides, and money-saving tips. Stay updated with the latest Australian lending market insights and strategies." />
        <meta name="keywords" content="loan advice, financial blog, home loans, car loans, personal loans, credit score, interest rates, Australia" />
        <meta property="og:title" content="Financial Blog - Expert Loan Advice | ClearCompare" />
        <meta property="og:description" content="Get expert financial advice and loan comparison guides from Australia's trusted lending platform." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://clearcompare.com.au/blog" />
      </Head>

      <div className="min-h-screen bg-white font-opensans">
        {/* Header */}
        <header className="border-b border-light-orange bg-white/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/noBgColor (3).png" 
                  alt="ClearCompare Logo" 
                  width={360} 
                  height={120}
                  className="object-contain w-72 h-24 sm:w-90 sm:h-30"
                  priority
                />
              </Link>
              
              <div className="md:hidden">
                <MobileNavigation />
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/loans/home" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Home Loans
                </Link>
                <Link href="/loans/car" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Car Loans
                </Link>
                <Link href="/loans/personal" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Personal Loans
                </Link>
                <Link href="/blog" className="text-primary-orange font-opensans-medium">
                  Blog
                </Link>
              </nav>

              <Button className="hidden md:flex gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/20 transition-all duration-300">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Loans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-light-orange/5 to-secondary-orange/10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-light-orange text-primary-orange border-light-orange font-opensans-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Financial Insights & Expert Advice
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-opensans-bold mb-6 text-dark-gray leading-tight">
                Your Guide to <span className="text-primary-orange">Smart Borrowing</span>
              </h1>
              
              <p className="text-lg md:text-xl text-medium-gray mb-8 leading-relaxed max-w-3xl mx-auto">
                Get expert insights on loans, mortgages, and financial planning from Australia's leading comparison platform.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-opensans-bold text-center mb-8 text-dark-gray">
              Browse by Category
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 border-light-orange hover:border-primary-orange cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-light-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-orange transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary-orange group-hover:text-white" />
                      </div>
                      <h3 className="font-opensans-bold text-dark-gray mb-2">{category.name}</h3>
                      <p className="text-medium-gray text-sm">{category.count} articles</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-white to-light-orange/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-opensans-bold text-center mb-12 text-dark-gray">
              Featured Articles
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-md overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={index === 0 ? 800 : 400}
                      height={index === 0 ? 400 : 250}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary-orange text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-medium-gray mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-AU')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className={`font-opensans-bold text-dark-gray leading-tight mb-3 group-hover:text-primary-orange transition-colors ${index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-medium-gray leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-light-orange text-primary-orange hover:bg-light-orange">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full border-light-orange text-primary-orange hover:bg-light-orange group-hover:gradient-orange group-hover:text-white group-hover:border-primary-orange transition-all duration-300">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-opensans-bold text-center mb-12 text-dark-gray">
              Recent Articles
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {recentPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-light-orange overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardHeader className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-medium-gray mb-3">
                        <Badge variant="outline" className="border-light-orange text-primary-orange">
                          {post.category}
                        </Badge>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="font-opensans-bold text-lg text-dark-gray leading-tight mb-3 group-hover:text-primary-orange transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-medium-gray leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-medium-gray">
                          ClearCompare Team
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="text-primary-orange hover:bg-light-orange p-2">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-primary-orange to-secondary-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-opensans-bold text-white mb-6">
              Stay Updated with Financial Insights
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly tips, rate updates, and expert advice delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-dark-gray"
              />
              <Button className="bg-white text-primary-orange hover:bg-white/90 px-8 py-3 rounded-xl font-opensans-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
