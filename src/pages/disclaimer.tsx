import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, AlertTriangle, Info, Shield } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer - Clear Compare | Important Information</title>
        <meta name="description" content="Clear Compare disclaimer. Important information about our services. Rate Match AI is not a credit provider or assistance provider. All comparisons subject to lender assessment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white font-avenir">
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
                  className="object-contain w-48 h-16 sm:w-60 sm:h-20 md:w-72 md:h-24"
                  priority
                />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/loans/home" className="text-medium-gray hover:text-primary-orange transition-colors font-avenir-medium">
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

              <Button className="gradient-orange hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0 font-avenir-medium">
                <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                  Compare Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-light-orange text-primary-orange hover:bg-secondary-orange border-light-orange font-avenir-medium">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Important Information
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-avenir-heavy mb-6 text-dark-gray leading-tight">
                <span className="text-primary-orange">Disclaimer</span> & Legal Information
              </h1>
              
              <p className="text-xl md:text-2xl text-medium-gray mb-6 leading-relaxed font-avenir-light">
                Important information about Clear Compare services and limitations.
              </p>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-light-orange/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-orange/15 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  Company Information
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl bg-gradient-to-r from-white to-light-orange/5">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    Clear Compare is owned and operated by <strong className="text-dark-gray">RateMatch AI Pty Ltd</strong> (ABN 15 687 175 980).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Service Limitations */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  Service Limitations
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-secondary-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Not a Credit Provider</h3>
                      <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                        Rate Match AI is <strong>not a credit provider or credit assistance provider</strong>. We do not provide credit assistance, financial advice, or make recommendations about credit products.
                      </p>
                    </div>

                    <div className="p-6 bg-light-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Information Only</h3>
                      <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                        Information displayed on this site is <strong>factual only</strong> and provided by lenders. We present comparison information to help you make informed decisions.
                      </p>
                    </div>

                    <div className="p-6 bg-primary-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Lender Assessment Required</h3>
                      <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                        All loan comparisons are <strong>subject to the lender's assessment and lending criteria</strong>. Final approval and terms are determined solely by the lender.
                      </p>
                    </div>

                    <div className="p-6 bg-secondary-orange/10 rounded-2xl border-l-4 border-secondary-orange">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Rate and Product Changes</h3>
                      <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                        <AlertTriangle className="w-5 h-5 inline mr-2 text-secondary-orange" />
                        Rates and product details <strong>may change without notice</strong>. Always verify current rates and terms directly with the lender before making decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="border-0 shadow-lg rounded-3xl bg-gradient-to-r from-light-orange/20 to-secondary-orange/20 mb-12">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <h3 className="text-2xl font-avenir-heavy text-dark-gray mb-4">
                  Important Notice
                </h3>
                <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                  Clear Compare provides comparison information only. We are not responsible for lending decisions, loan terms, or outcomes. 
                  Always read the lender's terms and conditions and seek independent financial advice if needed.
                </p>
                
                <div className="mt-6 space-y-3">
                  <p className="text-medium-gray font-avenir">
                    For more information, please review our:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/terms" className="text-primary-orange hover:underline font-avenir-medium">
                      Terms & Conditions
                    </Link>
                    <span className="text-light-orange">•</span>
                    <Link href="/privacy" className="text-primary-orange hover:underline font-avenir-medium">
                      Privacy Policy
                    </Link>
                    <span className="text-light-orange">•</span>
                    <Link href="/contact" className="text-primary-orange hover:underline font-avenir-medium">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 gradient-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-avenir-heavy text-white mb-6">
              Ready to compare with confidence?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-avenir">
              Compare loan offers from trusted lenders with full transparency.
            </p>
            <Button size="lg" className="bg-white text-primary-orange hover:bg-neutral-50 text-lg px-16 py-8 rounded-3xl shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 font-avenir-medium">
              <Link href="https://sg-0f274595-d499-48c5-94a5-800918f0.vercel.app/whitelabel/test-partner" className="flex items-center">
                Compare Loans Now
                <ArrowRight className="ml-4 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
