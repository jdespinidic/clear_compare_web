import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Eye, CheckCircle2, Heart, Target } from "lucide-react"
import { MobileNavigation } from "@/components/MobileNavigation"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - ClearCompare | Transparent Loan Comparison</title>
        <meta name="description" content="At ClearCompare, we believe comparison should be simple, transparent, and built around you. No hidden agendas, no inflated promises - just transparency, clarity, and comparisons that put you first." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white font-opensans">
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
                <Link href="/about" className="text-primary-orange font-opensans-medium">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-opensans-medium text-xs sm:text-sm">
                <Heart className="w-4 h-4 mr-1" />
                About ClearCompare
              </Badge>
              
              <h1 className="text-fluid-4xl sm:text-fluid-5xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray leading-tight">
                Built for <span className="text-primary-orange">transparency</span>
              </h1>
              
              <p className="text-fluid-lg sm:text-fluid-xl text-medium-gray mb-8 sm:mb-10 leading-relaxed font-opensans">
                We believe comparison should be simple, transparent, and built around you—not around flashy promotions or too-good-to-be-true teaser rates.
              </p>
            </div>

            <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-light-orange/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-secondary-orange/15 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-r from-white to-light-orange/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div>
                <h2 className="text-fluid-2xl sm:text-fluid-3xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray">
                  The Problem We're Solving
                </h2>
                <p className="text-fluid-base sm:text-fluid-lg text-medium-gray mb-6 sm:mb-8 leading-relaxed font-opensans">
                  For too long, consumers have had to navigate a maze of advertised rates, marketing gimmicks, and headline offers that don't reflect what's actually available to them.
                </p>
                <p className="text-fluid-base sm:text-fluid-lg text-medium-gray mb-6 sm:mb-8 leading-relaxed font-opensans">
                  These distractions can make it hard to see the real picture—and even harder to make confident financial decisions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1 flex-shrink-0">
                      <Shield className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans text-fluid-sm">
                      <span className="font-opensans-bold text-dark-gray">Misleading rates:</span> Teaser rates that don't reflect real availability
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1 flex-shrink-0">
                      <Eye className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans text-fluid-sm">
                      <span className="font-opensans-bold text-dark-gray">Marketing noise:</span> Flashy promotions that obscure real value
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-light-orange flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange" />
                    </div>
                    <p className="text-medium-gray font-opensans text-fluid-sm">
                      <span className="font-opensans-bold text-dark-gray">Complex process:</span> Difficult comparison shopping across lenders
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-light-orange/20 to-secondary-orange/20 rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 left-6 w-16 sm:w-20 h-16 sm:h-20 bg-secondary-orange/60 rounded-2xl rotate-12"></div>
                  <div className="absolute bottom-8 right-8 w-12 sm:w-16 h-12 sm:h-16 bg-primary-orange/60 rounded-xl -rotate-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Eye className="w-20 sm:w-24 h-20 sm:h-24 text-primary-orange/40" />
                  </div>
                  <div className="absolute top-20 right-20 w-10 sm:w-12 h-10 sm:h-12 bg-light-orange/60 rounded-full"></div>
                  <div className="absolute bottom-20 left-20 w-6 sm:w-8 h-6 sm:h-8 bg-secondary-orange/60 rounded-lg rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-fluid-2xl sm:text-fluid-3xl font-opensans-bold mb-4 sm:mb-6 text-dark-gray">
                That's why we built ClearCompare
              </h2>
              <p className="text-fluid-lg sm:text-fluid-xl text-medium-gray max-w-3xl mx-auto leading-relaxed font-opensans">
                Our platform is designed to cut through the noise and show you real, personalised comparisons that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-primary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-fluid-lg font-opensans-bold mb-4 text-dark-gray">Personalised Results</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                    Instead of showing generic advertised rates, we focus on what's truly available to you based on your profile.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-secondary-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-fluid-lg font-opensans-bold mb-4 text-dark-gray">Clear Picture</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                    The result? A clearer, more honest view of your options—so you can make smarter choices with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-light-orange/10 transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl sm:rounded-3xl mobile-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-light-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 sm:w-8 h-6 sm:h-8 text-primary-orange" />
                  </div>
                  <h3 className="text-fluid-lg font-opensans-bold mb-4 text-dark-gray">No Hidden Agenda</h3>
                  <p className="text-medium-gray leading-relaxed font-opensans text-fluid-sm">
                    No hidden agendas. No inflated promises. Just transparency, clarity, and comparisons that put you first.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 gradient-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl sm:text-fluid-4xl font-opensans-bold text-white mb-4 sm:mb-6">
              Ready to experience the difference?
            </h2>
            <p className="text-fluid-lg text-white/90 leading-relaxed font-opensans">
              Join thousands of Australians who choose transparency over marketing. Powered by RateMatch
              <Image 
                src="/symbol.png" 
                alt="RateMatch Symbol" 
                width={20} 
                height={20}
                className="inline ml-2"
              />
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
