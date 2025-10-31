import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar, Share2, TrendingUp, AlertCircle, CheckCircle, Calculator } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function HomeLoanRates2025Guide() {
  const tableOfContents = [
    { title: "Current Home Loan Rates Overview", anchor: "current-rates" },
    { title: "Fixed vs Variable Rate Comparison", anchor: "fixed-vs-variable" },
    { title: "How Interest Rates Are Determined", anchor: "rate-factors" },
    { title: "Best Home Loan Deals 2025", anchor: "best-deals" },
    { title: "Rate Predictions for 2025", anchor: "predictions" },
    { title: "How to Get the Best Rate", anchor: "getting-best-rate" }
  ]

  const currentRates = [
    { lender: "Big Four Banks", variable: "6.24%", fixed1yr: "5.89%", fixed3yr: "5.99%", comparisonRate: "6.31%" },
    { lender: "Regional Banks", variable: "5.95%", fixed1yr: "5.69%", fixed3yr: "5.79%", comparisonRate: "6.08%" },
    { lender: "Online Lenders", variable: "5.79%", fixed1yr: "5.49%", fixed3yr: "5.59%", comparisonRate: "5.92%" },
    { lender: "Credit Unions", variable: "5.89%", fixed1yr: "5.59%", fixed3yr: "5.69%", comparisonRate: "6.02%" }
  ]

  return (
    <>
      <Head>
        <title>Home Loan Rates Australia 2025: Complete Comparison Guide | ClearCompare</title>
        <meta name="description" content="Compare current home loan interest rates from 50+ Australian lenders. Get expert insights on fixed vs variable rates, predictions for 2025, and how to secure the best deal." />
        <meta name="keywords" content="home loan rates australia 2025, mortgage interest rates, fixed variable rates, home loan comparison, best home loan rates" />
        <meta property="og:title" content="Home Loan Rates Australia 2025: Complete Comparison Guide" />
        <meta property="og:description" content="Expert analysis of current home loan rates, market predictions, and how to get the best mortgage deal in 2025." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://clearcompare.com.au/blog/home-loan-rates-2025-guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Home Loan Rates Australia 2025: Complete Comparison Guide",
            "description": "Compare current home loan interest rates from 50+ Australian lenders. Expert insights on fixed vs variable rates and 2025 predictions.",
            "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "author": {
              "@type": "Person",
              "name": "Sarah Chen"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ClearCompare",
              "logo": {
                "@type": "ImageObject",
                "url": "https://clearcompare.com.au/noBgColor (3).png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>
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

              <Button className="hidden md:flex gradient-orange hover:opacity-90 text-white shadow-lg">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Loans
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="px-4 sm:px-6 lg:px-8 py-4 bg-light-orange/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-medium-gray">
              <Link href="/" className="hover:text-primary-orange">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-orange">Blog</Link>
              <span>/</span>
              <span className="text-primary-orange">Home Loan Rates 2025 Guide</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-primary-orange hover:text-secondary-orange transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Badge className="mb-6 bg-primary-orange text-white border-0">
              Home Loans
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-opensans-bold mb-6 text-dark-gray leading-tight">
              Home Loan Rates Australia 2025: Complete Comparison Guide
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-medium-gray mb-8 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>8 min read</span>
              </div>
              <Button variant="outline" size="sm" className="border-light-orange text-primary-orange hover:bg-light-orange">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative mb-12 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Home loan rates comparison guide"
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="lg:grid lg:grid-cols-4 lg:gap-12">
              {/* Table of Contents - Sidebar */}
              <aside className="lg:col-span-1 mb-8 lg:mb-0">
                <div className="sticky top-24">
                  <Card className="border-light-orange">
                    <CardHeader className="pb-4">
                      <h3 className="font-opensans-bold text-dark-gray">Table of Contents</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {tableOfContents.map((item, index) => (
                          <li key={index}>
                            <a 
                              href={`#${item.anchor}`}
                              className="text-sm text-medium-gray hover:text-primary-orange transition-colors block py-1"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:col-span-3 prose prose-lg max-w-none">
                <div className="text-lg text-medium-gray leading-relaxed mb-8">
                  Home loan interest rates in Australia continue to be a major factor for property buyers and existing homeowners in 2025. With the Reserve Bank of Australia (RBA) maintaining a cautious approach to monetary policy, understanding current rates and future predictions is crucial for making informed borrowing decisions.
                </div>

                <div className="bg-light-orange/20 border-l-4 border-primary-orange p-6 rounded-lg mb-12">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-primary-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-opensans-bold text-dark-gray mb-2">Key Takeaway</h4>
                      <p className="text-medium-gray m-0">
                        Home loan rates are expected to remain elevated throughout 2025, making it more important than ever to compare offers from multiple lenders to secure the best deal.
                      </p>
                    </div>
                  </div>
                </div>

                <section id="current-rates" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Current Home Loan Rates Overview</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    As of January 2025, Australian home loan rates vary significantly across different lender types and loan products. Here's a comprehensive breakdown of current rates across the market:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                      <thead className="bg-light-orange/30">
                        <tr>
                          <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Lender Type</th>
                          <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Variable Rate</th>
                          <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">1-Year Fixed</th>
                          <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">3-Year Fixed</th>
                          <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Comparison Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentRates.map((rate, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-light-orange/10'}>
                            <td className="border border-light-orange p-4 font-opensans-medium text-dark-gray">{rate.lender}</td>
                            <td className="border border-light-orange p-4 text-primary-orange font-opensans-bold">{rate.variable}</td>
                            <td className="border border-light-orange p-4 text-primary-orange font-opensans-bold">{rate.fixed1yr}</td>
                            <td className="border border-light-orange p-4 text-primary-orange font-opensans-bold">{rate.fixed3yr}</td>
                            <td className="border border-light-orange p-4 text-medium-gray">{rate.comparisonRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-secondary-orange/10 p-6 rounded-lg">
                    <h4 className="font-opensans-bold text-dark-gray mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-secondary-orange" />
                      Market Trend Analysis
                    </h4>
                    <ul className="space-y-2 text-medium-gray">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        Online lenders continue to offer the most competitive rates, averaging 0.4-0.5% below major banks
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        Fixed rates remain below variable rates for shorter terms (1-2 years)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        Regional banks and credit unions offer competitive middle-ground options
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="fixed-vs-variable" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Fixed vs Variable Rate Comparison</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    One of the most important decisions when choosing a home loan is whether to opt for a fixed or variable interest rate. Each option has distinct advantages and considerations:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-primary-orange">
                      <CardHeader>
                        <h3 className="font-opensans-bold text-lg text-dark-gray">Fixed Rate Loans</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-opensans-medium text-primary-orange mb-2">Advantages:</h4>
                            <ul className="space-y-1 text-sm text-medium-gray">
                              <li>• Predictable repayments</li>
                              <li>• Protection against rate rises</li>
                              <li>• Better budgeting certainty</li>
                              <li>• Peace of mind</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-opensans-medium text-primary-orange mb-2">Disadvantages:</h4>
                            <ul className="space-y-1 text-sm text-medium-gray">
                              <li>• Miss out if rates fall</li>
                              <li>• Less loan flexibility</li>
                              <li>• Break fees if switching</li>
                              <li>• Limited extra payment options</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary-orange">
                      <CardHeader>
                        <h3 className="font-opensans-bold text-lg text-dark-gray">Variable Rate Loans</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-opensans-medium text-secondary-orange mb-2">Advantages:</h4>
                            <ul className="space-y-1 text-sm text-medium-gray">
                              <li>• Benefit if rates decrease</li>
                              <li>• More loan features available</li>
                              <li>• Greater repayment flexibility</li>
                              <li>• No break fees for switching</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-opensans-medium text-secondary-orange mb-2">Disadvantages:</h4>
                            <ul className="space-y-1 text-sm text-medium-gray">
                              <li>• Repayments can increase</li>
                              <li>• Harder to budget</li>
                              <li>• Market uncertainty</li>
                              <li>• Potential payment shock</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="rate-factors" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">How Interest Rates Are Determined</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    Understanding the factors that influence home loan interest rates can help you better navigate the lending market and time your comparison strategically.
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary-orange pl-6">
                      <h4 className="font-opensans-bold text-dark-gray mb-2">Reserve Bank of Australia (RBA) Cash Rate</h4>
                      <p className="text-medium-gray">
                        The RBA's official cash rate serves as the baseline for all lending rates in Australia. Currently at 4.35%, any changes directly impact home loan rates across all lenders.
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary-orange pl-6">
                      <h4 className="font-opensans-bold text-dark-gray mb-2">Bank Funding Costs</h4>
                      <p className="text-medium-gray">
                        Lenders' costs to source funds (from deposits, wholesale markets, or overseas) directly influence the rates they can offer to borrowers.
                      </p>
                    </div>

                    <div className="border-l-4 border-light-orange pl-6">
                      <h4 className="font-opensans-bold text-dark-gray mb-2">Competition and Market Positioning</h4>
                      <p className="text-medium-gray">
                        Competitive pressure, especially from online lenders and non-bank institutions, helps keep rates lower as lenders compete for market share.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-orange pl-6">
                      <h4 className="font-opensans-bold text-dark-gray mb-2">Individual Risk Assessment</h4>
                      <p className="text-medium-gray">
                        Your personal financial situation, credit history, loan-to-value ratio, and employment stability all influence the rate you're offered.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="best-deals" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Best Home Loan Deals 2025</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    While rates vary constantly, some lenders consistently offer competitive deals. Here are the standout options as of January 2025:
                  </p>

                  <div className="space-y-6">
                    <Card className="border-primary-orange">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-opensans-bold text-lg text-dark-gray">Best Variable Rate</h3>
                            <p className="text-primary-orange font-opensans-bold text-2xl">5.49% p.a.</p>
                          </div>
                          <Badge className="bg-primary-orange text-white">Best Deal</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-medium-gray">
                          <li>• Online application and management</li>
                          <li>• No monthly account keeping fees</li>
                          <li>• Unlimited additional repayments</li>
                          <li>• 100% offset account available</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary-orange">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-opensans-bold text-lg text-dark-gray">Best Fixed Rate (2 Year)</h3>
                            <p className="text-secondary-orange font-opensans-bold text-2xl">5.29% p.a.</p>
                          </div>
                          <Badge className="bg-secondary-orange text-white">Popular</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-medium-gray">
                          <li>• Rate guaranteed for 2 years</li>
                          <li>• $10,000 extra repayments allowed per year</li>
                          <li>• Professional package available</li>
                          <li>• Fast approval process</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="predictions" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Rate Predictions for 2025</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    Economic experts and the RBA have provided guidance on potential interest rate movements throughout 2025. Here's what to expect:
                  </p>

                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 p-6 rounded-lg mb-6">
                    <h4 className="font-opensans-bold text-dark-gray mb-4">Expert Consensus Forecast</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <h5 className="font-opensans-medium text-dark-gray mb-2">Q1-Q2 2025</h5>
                        <p className="text-2xl font-opensans-bold text-primary-orange mb-1">4.35%</p>
                        <p className="text-sm text-medium-gray">RBA holds rates steady</p>
                      </div>
                      <div>
                        <h5 className="font-opensans-medium text-dark-gray mb-2">Q3 2025</h5>
                        <p className="text-2xl font-opensans-bold text-secondary-orange mb-1">4.10%</p>
                        <p className="text-sm text-medium-gray">First rate cut expected</p>
                      </div>
                      <div>
                        <h5 className="font-opensans-medium text-dark-gray mb-2">Q4 2025</h5>
                        <p className="text-2xl font-opensans-bold text-primary-orange mb-1">3.85%</p>
                        <p className="text-sm text-medium-gray">Additional cuts possible</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-opensans-bold text-dark-gray">Key Factors Influencing Rate Changes:</h4>
                    <ul className="space-y-2 text-medium-gray">
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Inflation trends:</strong> Core inflation needs to return sustainably to RBA's 2-3% target range</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Labour market:</strong> Employment levels and wage growth will influence monetary policy decisions</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Global economy:</strong> International interest rates and economic conditions affect Australia's policy</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Housing market:</strong> Property price movements and borrowing demand impact rate decisions</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="getting-best-rate" className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">How to Get the Best Rate</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    Securing the lowest possible interest rate requires strategic planning and thorough preparation. Follow these expert tips to maximise your chances of getting the best deal:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-opensans-bold text-dark-gray flex items-center">
                        <Calculator className="w-5 h-5 mr-2 text-primary-orange" />
                        Before You Compare
                      </h4>
                      <ul className="space-y-2 text-medium-gray">
                        <li>• Check and improve your credit score (aim for 700+)</li>
                        <li>• Save a larger deposit (20%+ avoids LMI)</li>
                        <li>• Reduce existing debts and commitments</li>
                        <li>• Gather all financial documents</li>
                        <li>• Research and compare multiple lenders</li>
                        <li>• Get pre-approval to strengthen your position</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-opensans-bold text-dark-gray flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-secondary-orange" />
                        During Comparison
                      </h4>
                      <ul className="space-y-2 text-medium-gray">
                        <li>• Compare with multiple lenders simultaneously</li>
                        <li>• Use a mortgage broker for expert guidance</li>
                        <li>• Negotiate with lenders on rates and fees</li>
                        <li>• Consider professional packages if eligible</li>
                        <li>• Ask about rate discounts for existing customers</li>
                        <li>• Be flexible with loan features vs. rate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-primary-orange text-white rounded-lg">
                    <h4 className="font-opensans-bold mb-4">Ready to Compare Home Loan Rates?</h4>
                    <p className="mb-4">
                      Get personalised rate quotes from 50+ Australian lenders in just 2 minutes. Our smart matching technology finds loans suited to your specific situation.
                    </p>
                    <Button className="bg-white text-primary-orange hover:bg-white/90">
                      <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                        Compare Rates Now
                        <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Conclusion</h2>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    Home loan rates in 2025 present both challenges and opportunities for Australian borrowers. While rates remain elevated compared to recent years, the competitive lending market means significant savings are available for those who research and compare their options.
                  </p>

                  <p className="text-medium-gray leading-relaxed mb-6">
                    The key to securing the best home loan rate lies in preparation, comparison, and timing. With experts predicting potential rate cuts in the latter half of 2025, borrowers should stay informed about market movements while focusing on finding the most competitive deal available today.
                  </p>

                  <p className="text-medium-gray leading-relaxed">
                    Remember, the lowest advertised rate isn't always the best deal once fees and loan features are considered. Use comparison tools, speak with mortgage professionals, and don't hesitate to negotiate with lenders to secure the best possible outcome for your situation.
                  </p>
                </section>
              </main>
            </div>
          </div>
        </div>

        {/* Sources Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Sources</h2>
            
            <p className="text-medium-gray mb-4 text-sm">
              The information in this article has been compiled from the following sources:
            </p>
            
            <div className="space-y-3 text-sm text-medium-gray">
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Reserve Bank of Australia (RBA)</strong> - Official cash rate data and monetary policy statements</p>
                <p className="text-xs text-gray-500">https://www.rba.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Australian Prudential Regulation Authority (APRA)</strong> - Banking statistics and lending standards</p>
                <p className="text-xs text-gray-500">https://www.apra.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Australian Bureau of Statistics (ABS)</strong> - Housing finance and economic data</p>
                <p className="text-xs text-gray-500">https://www.abs.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Major Australian Banks</strong> - Current home loan rates and market data from ANZ, CBA, NAB, and Westpac</p>
                <p className="text-xs text-gray-500">Published rates as of January 2025</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Mortgage Industry Association of Australia</strong> - Industry trends and forecasts</p>
                <p className="text-xs text-gray-500">Industry reports and market analysis</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Financial comparison websites</strong> - Current market rates and lender comparisons</p>
                <p className="text-xs text-gray-500">Rate data compiled from multiple lenders January 2025</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-light-orange/20 rounded-lg">
              <p className="text-xs text-medium-gray">
                <strong>Disclaimer:</strong> All rates and figures are indicative and subject to change. The information provided is for general guidance only and should not be considered as financial advice. Always consult with a qualified financial advisor and verify current rates directly with lenders before making any financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-opensans-bold text-center mb-12 text-dark-gray">
              Related Articles
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="group hover:shadow-lg transition-all duration-300 border-light-orange">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="First home buyer guide"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-secondary-orange text-white border-0">Home Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/first-home-buyer-guide-2025">
                      First Home Buyer's Guide Australia 2025
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Complete roadmap for first-time property buyers, including grants and tips.</p>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-light-orange">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Car loan calculator"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary-orange text-white border-0">Car Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/car-loan-calculator-guide">
                      Car Loan Calculator: Budget for Your Vehicle
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Learn how to use car loan calculators and find the best financing options.</p>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-light-orange">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Credit score improvement"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-light-orange text-primary-orange border-0">Financial Tips</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/credit-score-improvement-guide">
                      How to Improve Your Credit Score Fast
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">10 proven strategies to boost your credit score and loan approval chances.</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-gray text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Image 
                    src="/noBgColor (3).png" 
                    alt="ClearCompare Logo" 
                    width={80} 
                    height={32}
                    className="object-contain w-16 h-6 sm:w-20 sm:h-8"
                  />
                </div>
                <p className="text-light-orange leading-relaxed font-opensans text-sm">
                  Making loan comparison simple, transparent, and fast for all Australians.
                </p>
              </div>
              
              <div>
                <h4 className="font-opensans-bold mb-4">Loan Types</h4>
                <ul className="space-y-2 text-light-orange">
                  <li><Link href="/loans/home" className="hover:text-white transition-colors text-sm">Home Loans</Link></li>
                  <li><Link href="/loans/car" className="hover:text-white transition-colors text-sm">Car Loans</Link></li>
                  <li><Link href="/loans/personal" className="hover:text-white transition-colors text-sm">Personal Loans</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-opensans-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-light-orange">
                  <li><Link href="/blog" className="hover:text-white transition-colors text-sm">Blog</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors text-sm">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-opensans-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-light-orange">
                  <li><Link href="/terms" className="hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-white transition-colors text-sm">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-medium-gray pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-light-orange text-xs sm:text-sm font-opensans">
                © 2025 ClearCompare. All rights reserved.
              </p>
              <p className="text-light-orange text-xs sm:text-sm mt-4 md:mt-0 font-opensans">
                Australian Credit Licence Representative
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
