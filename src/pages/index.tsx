
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Users, CheckCircle2, Home, Car, User } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ClearCompare - Get real offers in 2 minutes | Compare loans instantly</title>
        <meta name="description" content="Compare loans and see your personalised options instantly — powered by RateMatch. Get real offers for home, car, and personal loans in just 2 minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

              <Link href="/loans/compare" className="hidden md:flex">
                <Button className="gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-0 font-opensans-medium px-6 py-3 text-base rounded-xl focus-ring">
                  Compare Loans Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-opensans-medium text-xs sm:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Powered by RateMatch
                <Image 
                  src="/symbol.png" 
                  alt="RateMatch Symbol" 
                  width={16} 
                  height={16}
                  className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
                />
              </Badge>
              
              <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray leading-tight">
                Get real offers in <span className="text-primary-orange">2 minutes</span>
              </h1>
              
              <p className="text-fluid-lg md:text-fluid-xl text-medium-gray mb-8 sm:mb-10 leading-relaxed font-opensans px-2">
                Compare loans and see your personalised options instantly — powered by RateMatch
                <Image 
                  src="/symbol.png" 
                  alt="RateMatch Symbol" 
                  width={20} 
                  height={20}
                  className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5"
                />.
              </p>
              
              <Link href="/loans/compare" className="inline-block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gradient-orange hover:opacity-90 text-white text-fluid-lg sm:text-fluid-xl px-8 sm:px-16 lg:px-24 py-4 sm:py-8 lg:py-12 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-primary-orange/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-opensans-medium btn-mobile-friendly focus-ring">
                  Compare Loans Now
                  <ArrowRight className="ml-2 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </Button>
              </Link>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-light-orange/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
            <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-secondary-orange/15 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Loan Type Navigation Tiles */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-fluid-2xl md:text-fluid-3xl font-opensans-bold text-center mb-8 sm:mb-12 text-dark-gray">
              Find your perfect loan
            </h2>
            
            <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Home Loan Tile */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 bg-white rounded-2xl sm:rounded-3xl hover-lift mobile-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary-orange flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Home Loan</h3>
                  <p className="text-medium-gray mb-4 sm:mb-6 leading-relaxed font-opensans text-fluid-sm">
                    Whether you're buying your first home or refinancing, get competitive rates from trusted lenders.
                  </p>
                  <Link href="/loans/home" className="block">
                    <Button variant="outline" className="w-full bg-transparent border-light-orange text-primary-orange hover:bg-light-orange hover:border-primary-orange rounded-xl group-hover:gradient-orange group-hover:text-white group-hover:border-primary-orange transition-all duration-300 font-opensans-medium btn-mobile-friendly focus-ring">
                      Explore Home Loans
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Car Loan Tile */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 bg-white rounded-2xl sm:rounded-3xl hover-lift mobile-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary-orange flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Car Loan</h3>
                  <p className="text-medium-gray mb-4 sm:mb-6 leading-relaxed font-opensans text-fluid-sm">
                    Get behind the wheel faster with competitive car loan rates for new and used vehicles.
                  </p>
                  <Link href="/loans/car" className="block">
                    <Button variant="outline" className="w-full bg-transparent border-light-orange text-primary-orange hover:bg-light-orange hover:border-primary-orange rounded-xl group-hover:gradient-orange group-hover:text-white group-hover:border-primary-orange transition-all duration-300 font-opensans-medium btn-mobile-friendly focus-ring">
                      Explore Car Loans
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Personal Loan Tile */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 bg-white rounded-2xl sm:rounded-3xl hover-lift mobile-card sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary-orange flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Personal Loan</h3>
                  <p className="text-medium-gray mb-4 sm:mb-6 leading-relaxed font-opensans text-fluid-sm">
                    Flexible personal loans for life's moments - from home improvements to debt consolidation.
                  </p>
                  <Link href="/loans/personal" className="block">
                    <Button variant="outline" className="w-full bg-transparent border-light-orange text-primary-orange hover:bg-light-orange hover:border-primary-orange rounded-xl group-hover:gradient-orange group-hover:text-white group-hover:border-primary-orange transition-all duration-300 font-opensans-medium btn-mobile-friendly focus-ring">
                      Explore Personal Loans
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-fluid-2xl md:text-fluid-3xl font-opensans-bold mb-4 text-dark-gray">
                How it works
              </h2>
              <p className="text-fluid-base sm:text-fluid-lg text-medium-gray max-w-2xl mx-auto font-opensans">
                Get matched with the right loan in three simple steps
              </p>
            </div>

            <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-orange/25">
                  <span className="text-lg sm:text-2xl font-opensans-bold text-white">1</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Tell Us Your Needs</h3>
                <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                  Tell us about yourself and what you're looking for. It takes just 2 minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary-orange/25">
                  <span className="text-lg sm:text-2xl font-opensans-bold text-white">2</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Get Matched</h3>
                <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                  Our smart matching connects you with lenders suited to your profile.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-light-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-light-orange/25">
                  <span className="text-lg sm:text-2xl font-opensans-bold text-primary-orange">3</span>
                </div>
                <h3 className="text-fluid-lg font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Get Offers</h3>
                <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                  Receive real, personalised offers and choose the one that's right for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-fluid-xl sm:text-fluid-2xl font-opensans-bold mb-6 text-dark-gray">
                Trusted by thousands of Australians
              </h2>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-12">
                <div className="flex items-center space-x-3 text-medium-gray">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  <span className="font-opensans-medium text-fluid-sm">Bank-level security</span>
                </div>
                <div className="flex items-center space-x-3 text-medium-gray">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  <span className="font-opensans-medium text-fluid-sm">No hidden fees</span>
                </div>
                <div className="flex items-center space-x-3 text-medium-gray">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange" />
                  <span className="font-opensans-medium text-fluid-sm">50,000+ happy customers</span>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 bg-white rounded-xl px-4 sm:px-6 py-3 shadow-lg border border-light-orange">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-orange rounded"></div>
                <span className="font-opensans-medium text-medium-gray text-fluid-sm">Powered by</span>
                <span className="font-opensans-bold text-primary-orange text-fluid-sm">RateMatch</span>
                <Image 
                  src="/symbol.png" 
                  alt="RateMatch Symbol" 
                  width={20} 
                  height={20}
                  className="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
  
