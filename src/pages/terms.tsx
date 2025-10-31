import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, FileText, AlertCircle, Shield, Users, Gavel, BookOpen, Clock } from "lucide-react"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Clear Compare | Legal Terms of Use</title>
        <meta name="description" content="Clear Compare Terms & Conditions. Legal terms for using our loan comparison platform. Operated by Rate Match AI Pty Ltd. Read our full terms of service." />
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
                <Scale className="w-4 h-4 mr-1" />
                Terms & Conditions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-avenir-heavy mb-6 text-dark-gray leading-tight">
                <span className="text-primary-orange">Terms</span> of Service
              </h1>
              
              <p className="text-xl md:text-2xl text-medium-gray mb-6 leading-relaxed font-avenir-light">
                Legal terms for using Clear Compare's loan comparison platform.
              </p>

              <div className="bg-light-orange/20 rounded-2xl p-6 mb-10">
                <p className="text-lg text-dark-gray font-avenir">
                  <strong>Effective Date:</strong> 1 October 2025
                </p>
                <p className="text-medium-gray mt-2 font-avenir">
                  Clear Compare is owned and operated by <strong className="text-dark-gray">Rate Match AI Pty Ltd</strong> (ABN 15 687 175 980)
                </p>
              </div>
            </div>

            {/* Abstract Background Graphics */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-light-orange/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-orange/15 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="mb-12 border-0 shadow-lg rounded-3xl bg-gradient-to-r from-white to-light-orange/5">
              <CardContent className="p-8">
                <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                  These Terms and Conditions govern your use of Clear Compare. By accessing or using our platform, 
                  you agree to be bound by these terms. Please read them carefully.
                </p>
              </CardContent>
            </Card>

            {/* Section 1: About Our Service */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  1. About Our Service
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                      Clear Compare is a loan comparison platform that helps you find and compare loan products from various lenders.
                    </p>

                    <div className="p-6 bg-light-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">What We Do</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <p className="text-medium-gray font-avenir leading-relaxed">
                            Provide comparison information about loan products
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <p className="text-medium-gray font-avenir leading-relaxed">
                            Connect you with suitable lenders based on your requirements
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <p className="text-medium-gray font-avenir leading-relaxed">
                            Facilitate the loan comparison process
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-secondary-orange/10 rounded-2xl border-l-4 border-secondary-orange">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">What We Don't Do</h3>
                      <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                        <AlertCircle className="w-5 h-5 inline mr-2 text-secondary-orange" />
                        We are <strong>not a credit provider</strong> and do not make lending decisions. All loan approvals and terms are determined by the respective lenders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 2: User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  2. User Responsibilities
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    When using Clear Compare, you agree to:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Provide accurate and complete information in all forms and comparisons
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Use the platform only for lawful purposes
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Not misuse, damage, or attempt to gain unauthorized access to our systems
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Comply with all applicable laws and regulations
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Update your information if it changes during the loan process
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 3: Accuracy of Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  3. Accuracy of Information
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                      While we strive to provide accurate and up-to-date information, we cannot guarantee that all information on our platform is current, complete, or error-free.
                    </p>

                    <div className="p-6 bg-primary-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Your Responsibility</h3>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        You should always verify loan terms, rates, and conditions directly with the lender before making any financial commitments.
                      </p>
                    </div>

                    <div className="p-6 bg-light-orange/20 rounded-2xl border-l-4 border-light-orange">
                      <p className="text-dark-gray font-avenir">
                        <Clock className="w-5 h-5 inline mr-2 text-primary-orange" />
                        Interest rates and loan terms can change frequently and may vary based on individual circumstances and lender criteria.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 4: Limitations of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  4. Limitations of Liability
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                      To the maximum extent permitted by law, Clear Compare and Rate Match AI Pty Ltd will not be liable for:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                        <p className="text-medium-gray font-avenir leading-relaxed">
                          Any decisions made by lenders regarding loan inquiries
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                        <p className="text-medium-gray font-avenir leading-relaxed">
                          Changes to interest rates or loan terms after comparison
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                        <p className="text-medium-gray font-avenir leading-relaxed">
                          Any loss or damage arising from your use of our platform
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                        <p className="text-medium-gray font-avenir leading-relaxed">
                          Technical issues, system downtime, or data loss
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-secondary-orange/10 rounded-2xl">
                      <p className="text-dark-gray font-avenir">
                        <AlertCircle className="w-5 h-5 inline mr-2 text-secondary-orange" />
                        This limitation does not exclude liability that cannot be excluded under Australian Consumer Law.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 5: Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  5. Intellectual Property
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    All content, trademarks, logos, and intellectual property on Clear Compare belong to Rate Match AI Pty Ltd or our licensors. 
                    You may not reproduce, distribute, or modify any content without our written permission.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 6: Privacy and Data */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-light-orange flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  6. Privacy and Data
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    Your privacy is important to us. Please review our{" "}
                    <Link href="/privacy" className="text-primary-orange hover:underline font-avenir-medium">
                      Privacy Policy
                    </Link>{" "}
                    to understand how we collect, use, and protect your personal information.
                  </p>

                  <div className="p-6 bg-light-orange/10 rounded-2xl">
                    <p className="text-dark-gray font-avenir">
                      By using Clear Compare, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 7: Termination */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  7. Termination
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    We may terminate or suspend your access to Clear Compare at any time, without notice, if you breach these terms or engage in prohibited activities. 
                    You may stop using our services at any time.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 8: Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  8. Changes to Terms
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    We may update these Terms and Conditions from time to time. We will notify you of any material changes by posting the updated terms on our website. 
                    Your continued use of Clear Compare after changes are posted constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="border-0 shadow-lg rounded-3xl bg-gradient-to-r from-light-orange/20 to-secondary-orange/20">
              <CardContent className="p-8 text-center">
                <Scale className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <h3 className="text-2xl font-avenir-heavy text-dark-gray mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                  If you have questions about these Terms and Conditions, please{" "}
                  <Link href="/contact" className="text-primary-orange hover:underline font-avenir-medium">
                    contact us
                  </Link>{" "}
                  or email us at{" "}
                  <Link href="mailto:legal@ratematch.ai" className="text-primary-orange hover:underline font-avenir-medium">
                    legal@ratematch.ai
                  </Link>
                </p>
                
                <div className="mt-6 space-y-3">
                  <p className="text-medium-gray font-avenir">
                    Also see our:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/privacy" className="text-primary-orange hover:underline font-avenir-medium">
                      Privacy Policy
                    </Link>
                    <span className="text-light-orange">•</span>
                    <Link href="/disclaimer" className="text-primary-orange hover:underline font-avenir-medium">
                      Disclaimer
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
              Ready to find your perfect loan?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-avenir">
              Compare loan offers from trusted lenders in minutes.
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
