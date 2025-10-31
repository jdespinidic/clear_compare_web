import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar, Share2, Calculator, Car, DollarSign, AlertCircle, CheckCircle, TrendingUp } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function CarLoanCalculatorGuide() {
  const loanScenarios = [
    {
      vehicle: "New Toyota Camry",
      price: "$35,000",
      deposit: "$7,000",
      loanAmount: "$28,000",
      rate: "6.99%",
      term: "5 years",
      monthlyPayment: "$567"
    },
    {
      vehicle: "Used Mazda CX-5 (2021)",
      price: "$28,000", 
      deposit: "$5,600",
      loanAmount: "$22,400",
      rate: "7.49%",
      term: "4 years",
      monthlyPayment: "$543"
    },
    {
      vehicle: "New BMW 3 Series",
      price: "$65,000",
      deposit: "$13,000",
      loanAmount: "$52,000",
      rate: "5.99%",
      term: "7 years",
      monthlyPayment: "$741"
    }
  ]

  const factors = [
    {
      factor: "Loan Amount",
      impact: "Higher loan = higher repayments",
      tip: "Maximize your deposit to reduce borrowing"
    },
    {
      factor: "Interest Rate",
      impact: "Lower rate = significant savings over loan term", 
      tip: "Shop around and compare rates from multiple lenders"
    },
    {
      factor: "Loan Term",
      impact: "Longer term = lower repayments but more interest paid",
      tip: "Choose the shortest term you can comfortably afford"
    },
    {
      factor: "Vehicle Age",
      impact: "Newer vehicles typically qualify for better rates",
      tip: "Consider certified pre-owned for balance of value and rates"
    }
  ]

  return (
    <>
      <Head>
        <title>Car Loan Calculator Guide: How to Budget for Your Next Vehicle | ClearCompare</title>
        <meta name="description" content="Learn how to use car loan calculators effectively, understand repayment structures, and find the best vehicle financing options for your budget in 2025." />
        <meta name="keywords" content="car loan calculator, auto loan calculator, car finance calculator, vehicle loan repayments, car loan rates australia 2025" />
        <meta property="og:title" content="Car Loan Calculator Guide: Budget for Your Next Vehicle Purchase" />
        <meta property="og:description" content="Master car loan calculations, understand what affects your repayments, and discover strategies to get the best car financing deal." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://clearcompare.com.au/blog/car-loan-calculator-guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Car Loan Calculator Guide: How to Budget for Your Next Vehicle",
            "description": "Complete guide to car loan calculators, repayment structures, and vehicle financing strategies.",
            "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "author": {
              "@type": "Person",
              "name": "Emma Thompson"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ClearCompare",
              "logo": {
                "@type": "ImageObject",
                "url": "https://clearcompare.com.au/noBgColor (3).png"
              }
            },
            "datePublished": "2025-01-10",
            "dateModified": "2025-01-10"
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
                <Link href="/loans/car" className="text-primary-orange font-opensans-medium">
                  Car Loans
                </Link>
                <Link href="/loans/personal" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  Personal Loans
                </Link>
                <Link href="/blog" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
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
              <span className="text-primary-orange">Car Loan Calculator Guide</span>
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

            <Badge className="mb-6 bg-secondary-orange text-white border-0">
              Car Loans
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-opensans-bold mb-6 text-dark-gray leading-tight">
              Car Loan Calculator: How to Budget for Your Next Vehicle Purchase
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-medium-gray mb-8 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>6 min read</span>
              </div>
              <Button variant="outline" size="sm" className="border-light-orange text-primary-orange hover:bg-light-orange">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="relative mb-12 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Car loan calculator guide"
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
              Purchasing a vehicle is often the second-largest financial commitment after buying a home. Whether you're buying your first car or upgrading to something new, understanding how car loan calculators work and what affects your repayments is crucial for making informed financing decisions in 2025.
            </div>

            <div className="bg-light-orange/20 border-l-4 border-secondary-orange p-6 rounded-lg mb-12">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-secondary-orange mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-opensans-bold text-dark-gray mb-2">Quick Tip</h4>
                  <p className="text-medium-gray m-0">
                    A difference of just 1% in your car loan interest rate can save you thousands of dollars over the life of your loan. Always compare multiple lenders before making a decision.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">How Car Loan Calculators Work</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Car loan calculators use a mathematical formula to determine your monthly repayments based on four key variables: loan amount, interest rate, loan term, and any balloon payment. Understanding how these elements interact helps you make better financing decisions.
              </p>

              <div className="bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 p-6 rounded-lg mb-8">
                <h3 className="font-opensans-bold text-dark-gray mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-secondary-orange" />
                  The Car Loan Formula
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Variables:</h4>
                    <ul className="space-y-1 text-sm text-medium-gray">
                      <li>• <strong>P:</strong> Principal (loan amount)</li>
                      <li>• <strong>r:</strong> Monthly interest rate</li>
                      <li>• <strong>n:</strong> Number of payments</li>
                      <li>• <strong>M:</strong> Monthly payment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-opensans-medium text-dark-gray mb-2">Formula:</h4>
                    <div className="bg-white p-4 rounded border text-center">
                      <code className="text-secondary-orange font-mono">
                        M = P × [r(1+r)^n] / [(1+r)^n-1]
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-secondary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Step-by-Step Calculation</h3>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-medium-gray">
                      <li>1. Determine your loan amount (purchase price minus deposit)</li>
                      <li>2. Convert annual interest rate to monthly (divide by 12)</li>
                      <li>3. Calculate total number of monthly payments</li>
                      <li>4. Apply the formula to find monthly payment</li>
                      <li>5. Multiply by loan term to find total interest paid</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-primary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">What Calculators Show You</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-medium-gray">
                      <li>• Monthly payment amount</li>
                      <li>• Total interest payable</li>
                      <li>• Total cost of the loan</li>
                      <li>• Payment breakdown schedule</li>
                      <li>• Comparison of different scenarios</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Real Car Loan Examples</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Let's look at some realistic car loan scenarios to understand how different variables affect your monthly repayments and total loan costs:
              </p>

              <div className="space-y-6">
                {loanScenarios.map((scenario, index) => (
                  <Card key={index} className="border-light-orange">
                    <CardHeader>
                      <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                        <Car className="w-5 h-5 mr-2 text-primary-orange" />
                        {scenario.vehicle}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-medium-gray">Purchase Price</p>
                          <p className="font-opensans-bold text-dark-gray">{scenario.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-medium-gray">Deposit</p>
                          <p className="font-opensans-bold text-dark-gray">{scenario.deposit}</p>
                        </div>
                        <div>
                          <p className="text-sm text-medium-gray">Loan Amount</p>
                          <p className="font-opensans-bold text-primary-orange">{scenario.loanAmount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-medium-gray">Interest Rate</p>
                          <p className="font-opensans-bold text-dark-gray">{scenario.rate}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center bg-secondary-orange/10 p-4 rounded-lg">
                        <div>
                          <p className="text-sm text-medium-gray">Loan Term: {scenario.term}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-medium-gray">Monthly Payment</p>
                          <p className="text-2xl font-opensans-bold text-secondary-orange">{scenario.monthlyPayment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Key Factors Affecting Your Car Loan Repayments</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Understanding what influences your car loan repayments helps you make strategic decisions to minimize costs and find the most suitable financing option:
              </p>

              <div className="space-y-6">
                {factors.map((item, index) => (
                  <Card key={index} className="border-light-orange">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-opensans-bold text-lg text-dark-gray">{item.factor}</h3>
                        <TrendingUp className="w-5 h-5 text-primary-orange flex-shrink-0 ml-4" />
                      </div>
                      <p className="text-medium-gray mb-3">{item.impact}</p>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-medium-gray"><strong>Pro Tip:</strong> {item.tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Car Loan Calculator Strategies</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Use these smart strategies when working with car loan calculators to find the most cost-effective financing solution:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-primary-orange" />
                      Before You Calculate
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-medium-gray">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Research current market rates from multiple lenders</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Determine your comfortable monthly budget</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Factor in insurance, registration, and running costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Check your credit score for rate eligibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-secondary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray flex items-center">
                      <Calculator className="w-5 h-5 mr-2 text-secondary-orange" />
                      Optimization Techniques
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-medium-gray">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Compare different loan terms (3, 5, 7 years)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Test various deposit amounts to see impact</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Calculate total interest paid, not just monthly payment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Consider balloon payments for lower monthly costs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Common Car Loan Calculator Mistakes</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Avoid these common pitfalls when using car loan calculators to ensure you're making informed decisions:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-opensans-bold text-red-700 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Mistakes to Avoid
                  </h3>
                  <ul className="space-y-3 text-medium-gray">
                    <li>• Only focusing on monthly payment amount</li>
                    <li>• Not including additional costs (insurance, rego, etc.)</li>
                    <li>• Using advertised rates without checking eligibility</li>
                    <li>• Ignoring fees and charges in calculations</li>
                    <li>• Not comparing total loan cost across different terms</li>
                    <li>• Forgetting to factor in vehicle depreciation</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-opensans-bold text-green-700 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Best Practices
                  </h3>
                  <ul className="space-y-3 text-medium-gray">
                    <li>• Always calculate total cost of borrowing</li>
                    <li>• Include all fees and charges in your calculations</li>
                    <li>• Get personalized quotes for accurate rates</li>
                    <li>• Build a buffer into your monthly budget</li>
                    <li>• Consider the vehicle's resale value</li>
                    <li>• Plan for early repayment possibilities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Types of Car Loans and Their Calculations</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Different car loan types require different calculation approaches. Understanding your options helps you choose the most suitable financing structure:
              </p>

              <div className="space-y-6">
                <Card className="border-primary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Traditional Car Loan</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">How it works:</h4>
                        <p className="text-sm text-medium-gray mb-3">Fixed monthly payments with principal and interest. You own the vehicle from day one.</p>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Best for:</h4>
                        <p className="text-sm text-medium-gray">Buyers wanting immediate ownership and predictable payments.</p>
                      </div>
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Calculation focus:</h4>
                        <ul className="text-sm text-medium-gray space-y-1">
                          <li>• Straightforward P&I calculation</li>
                          <li>• Consider early repayment options</li>
                          <li>• Factor in loan establishment fees</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Balloon Payment Loan</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-opensans-medium text-secondary-orange mb-2">How it works:</h4>
                        <p className="text-sm text-medium-gray mb-3">Lower monthly payments with a large final payment. Reduces cash flow impact.</p>
                        <h4 className="font-opensans-medium text-secondary-orange mb-2">Best for:</h4>
                        <p className="text-sm text-medium-gray">Business users or those wanting lower monthly commitments.</p>
                      </div>
                      <div>
                        <h4 className="font-opensans-medium text-secondary-orange mb-2">Calculation considerations:</h4>
                        <ul className="text-sm text-medium-gray space-y-1">
                          <li>• Calculate reduced monthly payment</li>
                          <li>• Plan for balloon payment strategy</li>
                          <li>• Consider total interest implications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-light-orange">
                  <CardHeader>
                    <h3 className="font-opensans-bold text-lg text-dark-gray">Chattel Mortgage</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">How it works:</h4>
                        <p className="text-sm text-medium-gray mb-3">Business loan where you own the vehicle but lender has security interest. Tax benefits available.</p>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Best for:</h4>
                        <p className="text-sm text-medium-gray">Business owners wanting tax benefits and ownership.</p>
                      </div>
                      <div>
                        <h4 className="font-opensans-medium text-primary-orange mb-2">Calculation includes:</h4>
                        <ul className="text-sm text-medium-gray space-y-1">
                          <li>• GST considerations in loan amount</li>
                          <li>• Tax deduction benefits</li>
                          <li>• Balloon payment options</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="mt-8 p-6 bg-secondary-orange text-white rounded-lg">
              <h4 className="font-opensans-bold mb-4">Ready to Find Your Perfect Car Loan?</h4>
              <p className="mb-4">
                Use our smart comparison tool to get personalized car loan quotes from 50+ Australian lenders. See your real rates and repayments in just 2 minutes.
              </p>
              <Button className="bg-white text-secondary-orange hover:bg-white/90">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Car Loans Now
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Link>
              </Button>
            </div>

            <section className="mb-12 mt-12">
              <h2 className="text-2xl font-opensans-bold text-dark-gray mb-6">Conclusion</h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                Car loan calculators are powerful tools that help you make informed vehicle financing decisions, but they're only as good as the information you input and how you interpret the results. Understanding the mathematics behind the calculations, the factors that affect your repayments, and the different loan structures available puts you in a stronger position to secure the best possible deal.
              </p>

              <p className="text-medium-gray leading-relaxed mb-6">
                Remember that the lowest monthly payment isn't always the best option – consider the total cost of borrowing, your long-term financial goals, and how the loan fits into your overall budget. Take time to compare multiple lenders, understand all fees and charges, and consider seeking professional advice for complex financing decisions.
              </p>

              <p className="text-medium-gray leading-relaxed">
                With the right approach to using car loan calculators and a clear understanding of your financing options, you can drive away in your dream vehicle with confidence that you've made a smart financial decision.
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
                <p><strong>Australian Securities and Investments Commission (ASIC)</strong> - Car loan and financial calculator methodologies</p>
                <p className="text-xs text-gray-500">https://www.asic.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Reserve Bank of Australia (RBA)</strong> - Personal and vehicle financing statistics</p>
                <p className="text-xs text-gray-500">https://www.rba.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Australian Bureau of Statistics (ABS)</strong> - Motor vehicle sales and financing data</p>
                <p className="text-xs text-gray-500">https://www.abs.gov.au</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Major Australian Banks and Credit Unions</strong> - Current car loan rates and terms</p>
                <p className="text-xs text-gray-500">Rate data from leading financial institutions as of January 2025</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Motor Finance Association</strong> - Industry standards and best practices</p>
                <p className="text-xs text-gray-500">Vehicle financing industry guidelines</p>
              </div>
              
              <div className="border-l-4 border-light-orange pl-4">
                <p><strong>Financial comparison platforms</strong> - Car loan calculator methodologies and rate comparisons</p>
                <p className="text-xs text-gray-500">Industry standard calculation methods</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-light-orange/20 rounded-lg">
              <p className="text-xs text-medium-gray">
                <strong>Disclaimer:</strong> Car loan rates and terms are indicative and subject to change based on individual circumstances and lender criteria. The calculation examples provided are for illustrative purposes only. Always obtain personalized quotes from lenders and verify all terms and conditions before proceeding with any financing arrangement.
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
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Personal loan debt consolidation"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary-orange text-white border-0">Personal Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/personal-loan-debt-consolidation">
                      Personal Loans for Debt Consolidation Guide
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Complete strategy guide for using personal loans to consolidate debt.</p>
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
                  <p className="text-medium-gray text-sm">10 proven strategies to boost your credit score quickly.</p>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-light-orange">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Home loan rates"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-secondary-orange text-white border-0">Home Loans</Badge>
                  <h3 className="font-opensans-bold text-lg leading-tight group-hover:text-primary-orange transition-colors">
                    <Link href="/blog/home-loan-rates-2025-guide">
                      Home Loan Rates Australia 2025 Guide
                    </Link>
                  </h3>
                  <p className="text-medium-gray text-sm">Complete comparison guide for home loan rates and predictions.</p>
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
