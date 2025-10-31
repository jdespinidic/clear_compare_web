import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MousePointer2, Search, CheckCircle2, Clock, Shield, Zap } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works - Compare Clear | Simple 3-step loan comparison</title>
        <meta name="description" content="Get real loan offers in 2 minutes with Compare Clear. Tell us your needs, get matched with lenders, receive personalised offers. Simple, fast, transparent." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Compare Loans with ClearCompare",
              "description": "Simple 3-step process to compare loan offers from multiple lenders",
              "totalTime": "PT2M",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Tell Us Your Needs",
                  "text": "Fill out one simple form with your basic details"
                },
                {
                  "@type": "HowToStep",
                  "name": "Get Matched",
                  "text": "Our technology matches you with the right lenders"
                },
                {
                  "@type": "HowToStep",
                  "name": "Get Offers",
                  "text": "Receive personalised offers with real rates"
                }
              ]
            })
          }}
        />
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
                <Link href="/how-it-works" className="text-primary-orange font-opensans-medium">
                  How It Works
                </Link>
                <Link href="/about" className="text-medium-gray hover:text-primary-orange transition-colors font-opensans-medium">
                  About
                </Link>
              </nav>

              <Button className="hidden md:flex gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-0 font-opensans-medium px-6 py-3 text-base rounded-xl focus-ring">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-opensans-medium text-xs sm:text-sm">
                <Zap className="w-4 h-4 mr-1" />
                How It Works
              </Badge>
              
              <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray leading-tight">
                Get real offers in <span className="text-primary-orange">2 minutes</span>
              </h1>
              
              <p className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl text-medium-gray mb-6 sm:mb-10 leading-relaxed font-opensans">
                Our simple 3-step process gets you personalised loan comparisons fast. No marketing fluff, just real rates from real lenders.
              </p>

              <Button size="lg" className="gradient-orange hover:opacity-90 text-white text-lg sm:text-xl md:text-2xl px-8 sm:px-16 md:px-24 py-4 sm:py-8 md:py-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-primary-orange/25 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-opensans-medium btn-mobile-friendly focus-ring">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Start Comparing
                  <ArrowRight className="ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </Link>
              </Button>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-light-orange/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-secondary-orange/15 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          </div>
        </section>

        {/* 3 Steps Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray">
                Three simple steps to better rates
              </h2>
              <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl text-medium-gray max-w-3xl mx-auto leading-relaxed font-opensans">
                No paperwork, no phone calls, no waiting around. Just fast, personalised loan comparisons.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
              {/* Connection Lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-16 sm:top-24 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary-orange to-secondary-orange"></div>
              <div className="hidden md:block absolute top-16 sm:top-24 right-0 w-1/3 h-0.5 bg-gradient-to-r from-secondary-orange to-light-orange"></div>

              {/* Step 1 */}
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl relative mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-primary-orange rounded-full flex items-center justify-center text-white font-opensans-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-primary-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-2 sm:mt-4 group-hover:scale-110 transition-transform duration-300">
                    <MousePointer2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Tell Us Your Needs</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans mb-4 sm:mb-6 text-fluid-sm sm:text-fluid-base">
                    Fill out one simple form with your basic details. Takes less than 2 minutes to complete.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-medium-gray">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-orange flex-shrink-0" />
                      <span className="font-opensans">No credit check impact</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-orange flex-shrink-0" />
                      <span className="font-opensans">Secure & encrypted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl relative mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary-orange rounded-full flex items-center justify-center text-white font-opensans-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-secondary-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-2 sm:mt-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Get Matched</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans mb-4 sm:mb-6 text-fluid-sm sm:text-fluid-base">
                    Our technology matches you with the right lenders based on your profile and loan requirements.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-medium-gray">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-orange flex-shrink-0" />
                      <span className="font-opensans">Smart algorithm matching</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-orange flex-shrink-0" />
                      <span className="font-opensans">Best-fit lenders only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-light-orange/20 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl relative mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-light-orange rounded-full flex items-center justify-center text-primary-orange font-opensans-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-light-orange flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-2 sm:mt-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary-orange" />
                  </div>
                  <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-opensans-bold mb-3 sm:mb-4 text-dark-gray">Get Offers</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans mb-4 sm:mb-6 text-fluid-sm sm:text-fluid-base">
                    Receive personalised offers with real rates you qualify for. Compare and choose the best option.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-medium-gray">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-orange flex-shrink-0" />
                      <span className="font-opensans">Real pre-qualified rates</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-orange flex-shrink-0" />
                      <span className="font-opensans">Side-by-side comparison</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray">
                Why thousands choose ClearCompare
              </h2>
              <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl text-medium-gray max-w-3xl mx-auto leading-relaxed font-opensans">
                Powered by Rate Match
                <Image 
                  src="/symbol.png" 
                  alt="Rate Match Symbol" 
                  width={20} 
                  height={20}
                  className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                technology for the most accurate loan matching in Australia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary-orange flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <h4 className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg font-opensans-bold mb-2 text-dark-gray">2 Minutes</h4>
                  <p className="text-medium-gray text-xs sm:text-sm leading-relaxed font-opensans">
                    Fast comparison process with instant preliminary matching
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-secondary-orange flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <h4 className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg font-opensans-bold mb-2 text-dark-gray">100% Secure</h4>
                  <p className="text-medium-gray text-xs sm:text-sm leading-relaxed font-opensans">
                    Bank-level encryption protects your personal information
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-light-orange flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-primary-orange" />
                  </div>
                  <h4 className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg font-opensans-bold mb-2 text-dark-gray">No Impact</h4>
                  <p className="text-medium-gray text-xs sm:text-sm leading-relaxed font-opensans">
                    Soft credit check won't affect your credit score
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary-orange flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <h4 className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg font-opensans-bold mb-2 text-dark-gray">Always Free</h4>
                  <p className="text-medium-gray text-xs sm:text-sm leading-relaxed font-opensans">
                    No hidden fees or charges - completely free to use
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 gradient-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl font-opensans-bold text-white mb-4 sm:mb-6">
              Ready to find your perfect loan?
            </h2>
            <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-opensans">
              Join thousands of Australians getting better loan deals with ClearCompare
            </p>
            <Button size="lg" className="bg-white text-primary-orange hover:bg-neutral-50 text-lg sm:text-xl md:text-2xl px-8 sm:px-16 md:px-24 py-4 sm:py-8 md:py-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-opensans-medium btn-mobile-friendly focus-ring">
              <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                Compare Loans Now
                <ArrowRight className="ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
