import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar, Share2, Home, DollarSign, AlertCircle, CheckCircle, Calculator, TrendingUp } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function FirstHomeBuyerGuide2025() {
  const grants = [
    { state: "NSW", grant: "First Home Owner Grant", amount: "$10,000", condition: "New homes up to $600,000" },
    { state: "VIC", grant: "First Home Owner Grant", amount: "$10,000", condition: "New homes up to $750,000" },
    { state: "QLD", grant: "First Home Owner Grant", amount: "$15,000", condition: "New homes up to $750,000" },
    { state: "SA", grant: "First Home Owner Grant", amount: "$15,000", condition: "New homes up to $575,000" },
    { state: "WA", grant: "First Home Owner Grant", amount: "$10,000", condition: "New homes up to $750,000" },
    { state: "TAS", grant: "First Home Owner Grant", amount: "$20,000", condition: "New homes up to $600,000" }
  ]

  const timeline = [
    { step: "1-3 months before", tasks: ["Check credit score", "Save deposit", "Research areas", "Get pre-approval"] },
    { step: "1 month before", tasks: ["Engage conveyancer", "Arrange building inspection", "Finalise home loan", "Plan moving logistics"] },
    { step: "Settlement day", tasks: ["Final inspection", "Sign documents", "Receive keys", "Arrange utilities"] },
    { step: "After purchase", tasks: ["Set up home insurance", "Register for council rates", "Plan renovations", "Build emergency fund"] }
  ]

  return (
    <>
      <Head>
        <title>First Home Buyer's Guide Australia 2025: Steps, Grants & Expert Tips | ClearCompare</title>
        <meta name="description" content="Complete first home buyer guide for 2025. Learn about government grants, deposit requirements, loan options, and step-by-step process to buy your first home in Australia." />
        <meta name="keywords" content="first home buyer guide australia 2025, first home owner grant, home loan first time buyer, property buying guide, first home deposit" />
        <meta property="og:title" content="First Home Buyer's Guide Australia 2025: Complete Step-by-Step Guide" />
        <meta property="og:description" content="Everything first home buyers need to know in 2025: grants, deposits, loans, and expert tips to secure your first property." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://clearcompare.com.au/blog/first-home-buyer-guide-2025" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "First Home Buyer's Guide Australia 2025: Steps, Grants & Expert Tips",
            "description": "Complete guide for first time property buyers including government grants, deposit requirements, and step-by-step buying process.",
            "image": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "author": {
              "@type": "Person",
              "name": "Michael Rodriguez"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ClearCompare",
              "logo": {
                "@type": "ImageObject",
                "url": "https://clearcompare.com.au/noBgColor (3).png"
              }
            },
            "datePublished": "2025-01-12",
            "dateModified": "2025-01-12"
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
              <span className="text-primary-orange">First Home Buyer Guide 2025</span>
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
              First Home Buyer's Guide Australia 2025: Steps, Grants & Expert Tips
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-medium-gray mb-8 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 12, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              <Button variant="outline" size="sm" className="border-light-orange text-primary-orange hover:bg-light-orange">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative mb-12 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="First home buyer guide"
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
            <div className="text-lg text-medium-gray leading-relaxed mb-8">
              Buying your first home in Australia is one of life's biggest milestones and financial commitments. With property prices continuing to rise and lending criteria becoming more stringent, first-time buyers need to be well-prepared and informed to navigate the market successfully in 2025.
            </div>

            <div className="bg-light-orange/20 border-l-4 border-primary-orange p-6 rounded-lg mb-12">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-primary-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-opensans-bold text-dark-gray mb-2">Key Insight</h4>
                  <p className="text-medium-gray m-0">
                    First home buyers in 2025 need at least 5% deposit plus stamp duty and buying costs. Government grants and schemes can significantly reduce the upfront burden.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Government Grants and Schemes 2025</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Australian governments offer various grants and schemes to help first home buyers enter the property market. Here's what's available in 2025:
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-opensans-bold text-dark-gray mb-4">First Home Owner Grants by State</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                    <thead className="bg-light-orange/30">
                      <tr>
                        <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">State</th>
                        <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Grant Name</th>
                        <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Amount</th>
                        <th className="border border-light-orange p-4 text-left font-opensans-bold text-dark-gray">Conditions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grants.map((grant, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-light-orange/10'}>
                          <td className="border border-light-orange p-4 font-opensans-bold text-primary-orange">{grant.state}</td>
                          <td className="border border-light-orange p-4 text-dark-gray">{grant.grant}</td>
                          <td className="border border-light-orange p-4 font-opensans-bold text-secondary-orange">{grant.amount}</td>
                          <td className="border border-light-orange p-4 text-medium-gray text-sm">{grant.condition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-primary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                      <Home className="w-5 h-5 mr-2 text-primary-orange" />
                      First Home Guarantee (FHG)
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-medium-gray">
                      <li>• Buy with just 5% deposit</li>
                      <li>• Government guarantees up to 15%</li>
                      <li>• Avoid Lenders Mortgage Insurance</li>
                      <li>• 40,000 places available annually</li>
                      <li>• Income caps apply ($125,000 singles, $200,000 couples)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-secondary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-secondary-orange" />
                      Regional First Home Guarantee
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-medium-gray">
                      <li>• Buy in regional areas with 5% deposit</li>
                      <li>• Higher income caps than standard FHG</li>
                      <li>• 10,000 places available annually</li>
                      <li>• Includes new builds and established homes</li>
                      <li>• Must live in property for at least 6 months</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Step-by-Step First Home Buying Process</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                The home buying journey can seem overwhelming, but breaking it down into clear steps makes the process more manageable. Here's your complete roadmap:
              </p>

              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <Card key={index} className="border-light-orange">
                    <CardHeader>
                      <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                        <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-opensans-bold text-sm">{index + 1}</span>
                        </div>
                        {phase.step}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-medium-gray">{task}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Deposit Requirements and Saving Strategies</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                One of the biggest hurdles for first home buyers is saving enough for a deposit. Here's what you need to know about deposit requirements and how to save effectively:
              </p>

              <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 p-6 rounded-lg mb-8">
                <h4 className="font-opensans-bold text-dark-gray mb-4">Deposit Calculator Example</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h5 className="font-opensans-medium text-dark-gray mb-2">Property Value</h5>
                    <p className="text-2xl font-opensans-bold text-primary-orange">$600,000</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-opensans-medium text-dark-gray mb-2">5% Deposit</h5>
                    <p className="text-2xl font-opensans-bold text-secondary-orange">$30,000</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-opensans-medium text-dark-gray mb-2">Plus Buying Costs</h5>
                    <p className="text-2xl font-opensans-bold text-dark-gray">~$25,000</p>
                  </div>
                </div>
                <p className="text-center text-medium-gray mt-4">
                  <strong>Total upfront cost: ~$55,000</strong> (may vary by state and property type)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-opensans-bold text-dark-gray mb-4">Deposit Options</h4>
                  <ul className="space-y-3 text-medium-gray">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>5% deposit:</strong> Available with government guarantee schemes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>10% deposit:</strong> Standard low deposit option (requires LMI)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>20% deposit:</strong> Avoids LMI, better loan terms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Family guarantee:</strong> Use parents' property as security</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-opensans-bold text-dark-gray mb-4">Saving Strategies</h4>
                  <ul className="space-y-3 text-medium-gray">
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>First Home Super Saver:</strong> Use super contributions to save</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>High-interest savings:</strong> Maximize returns on deposit savings</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Side income:</strong> Freelancing or part-time work</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Reduce expenses:</strong> Track spending and cut unnecessary costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Home Loan Options for First Home Buyers</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Choosing the right home loan is crucial for long-term financial success. First home buyers have several loan types and features to consider:
              </p>

              <div className="space-y-6">
                <Card className="border-primary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Variable Rate Home Loans</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Best for:</h4>
                        <ul className="space-y-1 text-sm text-medium-gray">
                          <li>• Borrowers wanting flexibility</li>
                          <li>• Those planning extra repayments</li>
                          <li>• Buyers wanting loan features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-medium-gray">
                          <li>• Offset accounts available</li>
                          <li>• Redraw facilities</li>
                          <li>• No exit fees typically</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Fixed Rate Home Loans</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-opensans-medium text-secondary-orange mb-2">Best for:</h4>
                        <ul className="space-y-1 text-sm text-medium-gray">
                          <li>• First-time budgeters</li>
                          <li>• Risk-averse borrowers</li>
                          <li>• Those expecting rate rises</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-opensans-medium text-secondary-orange mb-2">Considerations:</h4>
                        <ul className="space-y-1 text-sm text-medium-gray">
                          <li>• Limited extra repayments</li>
                          <li>• Break fees may apply</li>
                          <li>• Less loan features</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-light-orange/20 rounded-lg">
                <h4 className="font-opensans-bold text-dark-gray mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-primary-orange" />
                  First Home Buyer Loan Features to Look For
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-medium-gray">
                    <li>• No or low comparison fees</li>
                    <li>• Discounted rates for first home buyers</li>
                    <li>• Flexible repayment options</li>
                    <li>• Professional package discounts</li>
                  </ul>
                  <ul className="space-y-2 text-medium-gray">
                    <li>• Online account management</li>
                    <li>• Split loan options (fixed/variable)</li>
                    <li>• Construction loan availability</li>
                    <li>• Rate lock facilities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Common First Home Buyer Mistakes to Avoid</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Learning from others' experiences can save you time, money, and stress. Here are the most common mistakes first home buyers make and how to avoid them:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-300 bg-red-50/50">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-red-700">❌ Common Mistakes</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-medium-gray">
                      <li>• Not getting pre-approved before house hunting</li>
                      <li>• Skipping building and pest inspections</li>
                      <li>• Borrowing maximum amount approved</li>
                      <li>• Not budgeting for ongoing costs</li>
                      <li>• Buying in unfamiliar areas without research</li>
                      <li>• Not comparing multiple loan offers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-300 bg-green-50/50">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-green-700">✅ Smart Strategies</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-medium-gray">
                      <li>• Get pre-approved to understand your budget</li>
                      <li>• Always arrange professional inspections</li>
                      <li>• Borrow conservatively, allow for life changes</li>
                      <li>• Budget for rates, insurance, maintenance</li>
                      <li>• Research suburb growth potential</li>
                      <li>• Compare loans from multiple lenders</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">2025 Market Outlook for First Home Buyers</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Understanding market conditions can help you make informed decisions about timing and strategy. Here's what first home buyers can expect in 2025:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-orange pl-6">
                  <h4 className="font-opensans-bold text-dark-gray mb-2">Interest Rate Environment</h4>
                  <p className="text-medium-gray">
                    With the RBA expected to cut rates in the second half of 2025, borrowing costs may decrease. However, this could also stimulate demand and property prices.
                  </p>
                </div>

                <div className="border-l-4 border-secondary-orange pl-6">
                  <h4 className="font-opensans-bold text-dark-gray mb-2">Property Price Trends</h4>
                  <p className="text-medium-gray">
                    Regional areas continue to offer better value, while capital city markets show mixed results. Research specific locations rather than broad market trends.
                  </p>
                </div>

                <div className="border-l-4 border-light-orange pl-6">
                  <h4 className="font-opensans-bold text-dark-gray mb-2">Government Support</h4>
                  <p className="text-medium-gray">
                    Continued focus on first home buyer assistance with expanded guarantee schemes and potential new initiatives to improve housing affordability.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-orange text-white rounded-lg">
                <h4 className="font-opensans-bold mb-4">Ready to Start Your Home Buying Journey?</h4>
                <p className="mb-4">
                  Get pre-approved and see what you can borrow with our smart matching technology. Compare home loan offers from 50+ lenders in just 2 minutes.
                </p>
                <Button className="bg-white text-primary-orange hover:bg-white/90">
                  <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                    Get Pre-Approved Now
                    <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                  </Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Conclusion</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Becoming a first home buyer in 2025 requires careful planning, thorough research, and strategic decision-making. While the market presents challenges with elevated property prices and interest rates, government support schemes and competitive lending options provide pathways to homeownership.
              </p>

              <p className="text-medium-gray leading-relaxed mb-6">
                The key to success lies in understanding your financial position, taking advantage of available grants and schemes, and choosing the right loan structure for your circumstances. Don't rush the process – take time to research, compare options, and seek professional advice when needed.
              </p>

              <p className="text-medium-gray leading-relaxed">
                Remember that buying your first home is not just a financial transaction but the beginning of a new chapter in your life. With proper preparation and the right support, you can navigate the journey successfully and secure a property that meets both your current needs and future aspirations.
              </p>
            </section>
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
                <p><strong>Australian Government - First Home Owner Grant</strong> - State and territory grant information</p>
                <p className="text-xs text-gray-500">https://www.firsthome.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>National Housing Finance and Investment Corporation (NHFIC)</strong> - First Home Guarantee scheme details</p>
                <p className="text-xs text-gray-500">https://www.nhfic.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Australian Taxation Office (ATO)</strong> - First Home Super Saver Scheme information</p>
                <p className="text-xs text-gray-500">https://www.ato.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>State Revenue Offices</strong> - Stamp duty rates and concessions by state</p>
                <p className="text-xs text-gray-500">NSW, VIC, QLD, SA, WA, TAS, NT, ACT revenue offices</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Reserve Bank of Australia (RBA)</strong> - Housing market data and interest rate information</p>
                <p className="text-xs text-gray-500">https://www.rba.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>CoreLogic Australia</strong> - Property price data and market trends</p>
                <p className="text-xs text-gray-500">Housing market research and analysis</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Australian Prudential Regulation Authority (APRA)</strong> - Lending standards and borrowing capacity guidelines</p>
                <p className="text-xs text-gray-500">https://www.apra.gov.au</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-light-orange/20 rounded-lg">
              <p className="text-xs text-medium-gray">
                <strong>Disclaimer:</strong> Grant amounts and eligibility criteria are subject to change and may vary by location. The information provided is for general guidance only and should not be considered as financial advice. Always verify current grant details and eligibility requirements with the relevant government agencies and consult with qualified professionals before making property purchase decisions.
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
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Home loan rates guide"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary-orange text-white border-0">Home Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/home-loan-rates-2025-guide">
                      Home Loan Rates Australia 2025: Complete Guide
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Compare current rates and get expert predictions for 2025.</p>
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
                  <Badge className="w-fit mb-2 bg-secondary-orange text-white border-0">Car Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/car-loan-calculator-guide">
                      Car Loan Calculator: Budget for Your Vehicle
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Learn how to use car loan calculators effectively.</p>
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
