
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Car, User } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function LoansComparePage() {
  return (
    <>
      <Head>
        <title>Compare All Loans - ClearCompare | Home, Car & Personal Loans</title>
        <meta name="description" content="Compare all loan types in one place. Get real offers for home loans, car loans, and personal loans in just 2 minutes with ClearCompare." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white font-opensans overflow-x-hidden">
        {/* Header */}
        <header className="border-b border-light-orange bg-white/95 backdrop-blur-sm sticky top-0 z-50 safe-area-inset-top">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/noBgColor (3).png" 
                  alt="ClearCompare Logo" 
                  width={360} 
                  height={120}
                  className="object-contain w-48 h-16 sm:w-60 sm:h-20 md:w-72 md:h-24"
                  priority
                />
              </Link>
              
              {/* Mobile Navigation */}
              <div className="md:hidden">
                <MobileNavigation />
              </div>
              
              {/* Desktop Navigation */}
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
                <Link href="/about" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  About
                </Link>
              </nav>

              <Button className="hidden md:flex gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-0 font-opensans-medium px-6 py-3 text-base rounded-xl focus-ring">
                <Link href="/loans/compare" className="flex items-center">
                  Compare Loans Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-br from-white via-light-orange/5 to-secondary-orange/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray leading-tight">
              Compare All Loan Types
            </h1>
            <p className="text-fluid-lg md:text-fluid-xl text-medium-gray mb-8 max-w-3xl mx-auto leading-relaxed font-opensans">
              Choose the loan type that suits your needs and get real, personalised offers in just 2 minutes.
            </p>
          </div>

          {/* Abstract Background Graphics */}
          <div className="absolute top-10 left-5 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-light-orange/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-5 right-5 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-secondary-orange/15 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Loan Products Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
              
              {/* Home Loan Card */}
              <Card className="group relative overflow-hidden border-2 border-light-orange shadow-xl hover:shadow-2xl hover:shadow-primary-orange/20 transition-all duration-500 bg-white rounded-3xl hover:-translate-y-2">
                <CardContent className="p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-orange/30">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-fluid-xl sm:text-fluid-2xl font-opensans-bold mb-4 text-dark-gray">
                    Home Loan
                  </h2>
                  
                  <p className="text-medium-gray mb-6 leading-relaxed font-opensans text-fluid-base min-h-[80px]">
                    Whether you're buying your first home or refinancing, get competitive rates from Australia's trusted lenders.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Competitive interest rates</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">First home buyer support</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Refinancing options available</p>
                    </div>
                  </div>

                  <Link href="/loans/home/apply" className="block">
                    <Button className="w-full gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/30 transition-all duration-300 hover:-translate-y-1 border-0 font-opensans-bold text-fluid-base py-6 rounded-xl group-hover:scale-105 focus-ring">
                      Compare Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-orange/10 to-transparent rounded-bl-full -z-10"></div>
              </Card>

              {/* Car Loan Card */}
              <Card className="group relative overflow-hidden border-2 border-light-orange shadow-xl hover:shadow-2xl hover:shadow-primary-orange/20 transition-all duration-500 bg-white rounded-3xl hover:-translate-y-2">
                <CardContent className="p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-orange/30">
                    <Car className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-fluid-xl sm:text-fluid-2xl font-opensans-bold mb-4 text-dark-gray">
                    Car Loan
                  </h2>
                  
                  <p className="text-medium-gray mb-6 leading-relaxed font-opensans text-fluid-base min-h-[80px]">
                    Get behind the wheel faster with competitive car loan rates for new and used vehicles across Australia.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">New and used car financing</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Flexible repayment terms</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Quick approval process</p>
                    </div>
                  </div>

                  <Link href="/loans/car/apply" className="block">
                    <Button className="w-full gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/30 transition-all duration-300 hover:-translate-y-1 border-0 font-opensans-bold text-fluid-base py-6 rounded-xl group-hover:scale-105 focus-ring">
                      Compare Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-orange/10 to-transparent rounded-bl-full -z-10"></div>
              </Card>

              {/* Personal Loan Card */}
              <Card className="group relative overflow-hidden border-2 border-light-orange shadow-xl hover:shadow-2xl hover:shadow-primary-orange/20 transition-all duration-500 bg-white rounded-3xl hover:-translate-y-2 md:col-span-2 xl:col-span-1">
                <CardContent className="p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-orange/30">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-fluid-xl sm:text-fluid-2xl font-opensans-bold mb-4 text-dark-gray">
                    Personal Loan
                  </h2>
                  
                  <p className="text-medium-gray mb-6 leading-relaxed font-opensans text-fluid-base min-h-[80px]">
                    Flexible personal loans for life's moments - from home improvements to debt consolidation and more.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Unsecured loan options</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Debt consolidation support</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-orange mt-2 flex-shrink-0"></div>
                      <p className="text-medium-gray text-fluid-sm font-opensans">Fast funding available</p>
                    </div>
                  </div>

                  <Link href="/loans/personal/apply" className="block">
                    <Button className="w-full gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/30 transition-all duration-300 hover:-translate-y-1 border-0 font-opensans-bold text-fluid-base py-6 rounded-xl group-hover:scale-105 focus-ring">
                      Compare Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-orange/10 to-transparent rounded-bl-full -z-10"></div>
              </Card>

            </div>
          </div>
        </section>

        {/* Why Choose ClearCompare Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-fluid-2xl md:text-fluid-3xl font-opensans-bold mb-4 text-dark-gray">
                Why choose ClearCompare?
              </h2>
              <p className="text-fluid-base sm:text-fluid-lg text-medium-gray max-w-2xl mx-auto font-opensans">
                We make comparing loans simple, fast, and transparent
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-2 text-dark-gray">2-Minute Process</h3>
                <p className="text-medium-gray text-fluid-sm font-opensans">Get matched with lenders in just 2 minutes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-2 text-dark-gray">Secure & Private</h3>
                <p className="text-medium-gray text-fluid-sm font-opensans">Bank-level security for your information</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💯</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-2 text-dark-gray">No Hidden Fees</h3>
                <p className="text-medium-gray text-fluid-sm font-opensans">100% transparent pricing, always</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-2 text-dark-gray">Real Offers</h3>
                <p className="text-medium-gray text-fluid-sm font-opensans">Get actual offers, not estimates</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
