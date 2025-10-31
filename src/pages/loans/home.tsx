import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Shield, Clock, CheckCircle2, Heart, Key, DollarSign } from "lucide-react"

export default function HomeLoanPage() {
  return (
    <>
      <Head>
        <title>Home Loans - Compare rates & get pre-qualified | ClearCompare</title>
        <meta name="description" content="Find the perfect home loan with competitive rates. Whether you're a first home buyer or refinancing, get matched with trusted lenders in 2 minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Home Loans",
              "category": "Home Loan",
              "provider": {
                "@type": "Organization",
                "name": "ClearCompare"
              },
              "description": "Compare home loan rates and get pre-qualified with trusted Australian lenders"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white font-avenir">
        {/* Header */}
        <header className="border-b border-light-orange bg-white/95 backdrop-blur-sm sticky top-0 z-50 hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                {/* Expanded Logo without text */}
                <Image 
                  src="/noBgColor (3).png" 
                  alt="ClearCompare Logo" 
                  width={360} 
                  height={120}
                  className="object-contain w-48 h-16 sm:w-60 sm:h-20 md:w-72 md:h-24"
                  priority
                />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/loans/home" className="text-primary-orange font-avenir-medium">
                  Home Loans
                </Link>
                <Link href="/loans/car" className="text-medium-gray hover:text-primary-orange transition-colors font-avenir-medium">
                  Car Loans
                </Link>
                <Link href="/loans/personal" className="text-medium-gray hover:text-primary-orange transition-colors font-avenir-medium">
                  Personal Loans
                </Link>
                <Link href="/blog" className="text-medium-gray hover:text-primary-orange transition-colors font-avenir-medium">
                  Blog
                </Link>
                <Link href="/about" className="text-medium-gray hover:text-primary-orange transition-colors font-avenir-medium">
                  About
                </Link>
              </nav>

              <Button className="gradient-orange hover:opacity-90 text-white shadow-2xl hover:shadow-primary-orange/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 border-0 font-avenir-medium px-24 py-12 text-3xl rounded-3xl">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner/apply/home-loan" className="flex items-center">
                  Compare Now
                  <ArrowRight className="ml-3 w-8 h-8" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-avenir-medium">
                  <Home className="w-4 h-4 mr-1" />
                  Home Loans
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-avenir-heavy mb-6 text-dark-gray leading-tight">
                  Your dream home <span className="text-primary-orange">awaits</span>
                </h1>
                
                <p className="text-xl text-medium-gray mb-8 leading-relaxed font-avenir-light">
                  Whether you're buying your first home or refinancing, find competitive rates from Australia's most trusted lenders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/loans/home/apply">
                    <Button size="lg" className="gradient-orange hover:opacity-90 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-primary-orange/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-avenir-medium">
                      Compare Now
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-4 flex items-center justify-start">
                  <p className="text-sm text-medium-gray font-avenir flex items-center">
                    Powered by{" "}
                    <span className="text-primary-orange font-avenir-medium ml-1">Rate Match</span>
                    <Image 
                      src="/symbol.png" 
                      alt="Rate Match Symbol" 
                      width={16} 
                      height={16}
                      className="ml-2"
                    />
                  </p>
                </div>
              </div>

              {/* Hero Image with Couple and House */}
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80"
                    alt="Couple outside house"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/60 to-secondary-orange/60 mix-blend-multiply"></div>
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white/20 rounded-2xl rotate-12 backdrop-blur-sm"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-xl -rotate-6 backdrop-blur-sm"></div>
                  <div className="absolute top-20 right-20 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/20 rounded-lg rotate-45 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-light-orange/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-orange/15 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* What is a Home Loan Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-avenir-heavy mb-6 text-dark-gray">
                  What is a Home Loan?
                </h2>
                <p className="text-lg text-medium-gray mb-8 leading-relaxed font-avenir">
                  A home loan is a secured loan that helps you purchase or refinance a property. The property serves as collateral, typically allowing for lower interest rates compared to unsecured loans.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-avenir">
                      <span className="font-avenir-heavy text-dark-gray">Lower rates:</span> Secured against your property for competitive interest rates
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-avenir">
                      <span className="font-avenir-heavy text-dark-gray">Flexible terms:</span> Choose repayment periods from 5 to 30 years
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-avenir">
                      <span className="font-avenir-heavy text-dark-gray">Tax benefits:</span> Potential deductions for investment properties
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-avenir-heavy text-dark-gray mb-2">First Home</h4>
                    <p className="text-sm text-medium-gray font-avenir">Special rates and grants for first-time buyers</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <Key className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-avenir-heavy text-dark-gray mb-2">Refinancing</h4>
                    <p className="text-sm text-medium-gray font-avenir">Better rates on your existing home loan</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-avenir-heavy text-dark-gray mb-2">Investment</h4>
                    <p className="text-sm text-medium-gray font-avenir">Build your property portfolio with investor loans</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl hover:shadow-primary-orange/5 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mx-auto mb-4">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-avenir-heavy text-dark-gray mb-2">Construction</h4>
                    <p className="text-sm text-medium-gray font-avenir">Finance your dream home build from the ground up</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How ClearCompare Helps */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-avenir-heavy mb-6 text-dark-gray">
                How ClearCompare helps you secure the best home loan
              </h2>
              <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed font-avenir">
                We make home loan comparison simple, fast, and transparent. Get matched with the right lender for your unique situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-avenir-heavy mb-4 text-dark-gray">Smart Matching</h3>
                  <p className="text-medium-gray leading-relaxed font-avenir">
                    Our algorithm matches you with lenders most likely to offer you competitive rates, saving you time and protecting your credit score.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-avenir-heavy mb-4 text-dark-gray">Fast Process</h3>
                  <p className="text-medium-gray leading-relaxed font-avenir">
                    Get pre-qualified in just 2 minutes. No lengthy paperwork upfront - just quick questions to find your best options.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-light-orange/10 transition-all duration-500 bg-white rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-light-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-primary-orange" />
                  </div>
                  <h3 className="text-xl font-avenir-heavy mb-4 text-dark-gray">Real Offers</h3>
                  <p className="text-medium-gray leading-relaxed font-avenir">
                    Receive genuine pre-qualified offers from multiple lenders, not just marketing estimates. Compare real rates and terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 gradient-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-avenir-heavy text-white mb-6">
              Ready to find your perfect home loan?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-avenir">
              Join thousands of Australians who have found better rates with ClearCompare powered by RateMatch
              <Image 
                src="/symbol.png" 
                alt="RateMatch Symbol" 
                width={20} 
                height={20}
                className="inline ml-2"
              />
            </p>
            <Link href="/loans/home/apply">
              <Button size="lg" className="bg-white text-primary-orange hover:bg-neutral-50 text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-avenir-medium">
                Compare Loans Now
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
