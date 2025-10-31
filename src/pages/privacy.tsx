import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Lock, Eye, Mail, FileText, Users, AlertCircle, Cookie, Globe } from "lucide-react"

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Clear Compare | Your data security and privacy</title>
        <meta name="description" content="Clear Compare Privacy Policy. Learn how we collect, use, and protect your personal information. Operated by Rate Match AI Pty Ltd, we respect your privacy and are committed to protecting your data." />
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
                <Shield className="w-4 h-4 mr-1" />
                Privacy Policy
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-avenir-heavy mb-6 text-dark-gray leading-tight">
                Your <span className="text-primary-orange">privacy</span> matters
              </h1>
              
              <p className="text-xl md:text-2xl text-medium-gray mb-6 leading-relaxed font-avenir-light">
                We respect your privacy and are committed to protecting your personal information.
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
                  This Privacy Policy explains how we collect, use, disclose and protect your information when you use Clear Compare. 
                  We are committed to handling your personal information with care and transparency.
                </p>
              </CardContent>
            </Card>

            {/* Section 1: Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  1. Information We Collect
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    When you use Clear Compare, we may collect:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Personal details (such as name, contact information, and date of birth)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Loan request details you submit
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Information from credit checks (where you consent, only soft credit checks that do not affect your credit score)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Technical data (such as cookies, device information, and usage activity)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Any information you provide to us when contacting support or completing forms
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-light-orange/20 rounded-2xl">
                    <p className="text-dark-gray font-avenir">
                      <AlertCircle className="w-5 h-5 inline mr-2 text-primary-orange" />
                      We generally do not collect sensitive information unless you provide it directly and consent to its use.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  2. How We Use Your Information
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    We use your personal information to:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Provide you with comparison results and connect you with lenders that may suit your needs
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Improve our platform and user experience
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Communicate with you about your requests and our services
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Meet legal and regulatory requirements
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        (With your consent) send you marketing or promotional material
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 3: Sharing Your Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  3. Sharing Your Information
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    We may share your information with:
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Lenders and financial institutions you choose to engage with
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Service providers that help us operate our platform (e.g. hosting, IT, analytics)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Regulators or law enforcement if required by law
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-secondary-orange/20 rounded-2xl">
                    <p className="text-dark-gray font-avenir">
                      <Shield className="w-5 h-5 inline mr-2 text-secondary-orange" />
                      Some of these parties may be located overseas. Where this happens, we take reasonable steps to ensure your data is protected.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 4: Cookies and Analytics */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-light-orange flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-primary-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  4. Cookies and Analytics
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                      Clear Compare uses cookies and similar technologies to improve functionality, analyse usage, and enhance your experience.
                    </p>

                    <div className="p-6 bg-light-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">What are Cookies?</h3>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Cookies are small text files stored on your device when you visit websites. They help us remember your preferences and improve your browsing experience.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray">Types of Cookies We Use:</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <div>
                            <p className="font-avenir-heavy text-dark-gray">Essential Cookies</p>
                            <p className="text-medium-gray font-avenir leading-relaxed">
                              Required for the website to function properly and cannot be disabled.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <div>
                            <p className="font-avenir-heavy text-dark-gray">Analytics Cookies</p>
                            <p className="text-medium-gray font-avenir leading-relaxed">
                              Help us understand how visitors interact with our website to improve performance.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <div>
                            <p className="font-avenir-heavy text-dark-gray">Functional Cookies</p>
                            <p className="text-medium-gray font-avenir leading-relaxed">
                              Remember your preferences and settings to personalise your experience.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                          <div>
                            <p className="font-avenir-heavy text-dark-gray">Marketing Cookies</p>
                            <p className="text-medium-gray font-avenir leading-relaxed">
                              Track your activity across websites to show you relevant advertisements (with your consent).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-secondary-orange/10 rounded-2xl border-l-4 border-secondary-orange">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Managing Cookies</h3>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        You can manage cookies through your browser settings. Note that disabling essential cookies may affect website functionality. 
                        Most browsers allow you to refuse cookies or delete existing ones.
                      </p>
                    </div>

                    <div className="p-6 bg-primary-orange/10 rounded-2xl">
                      <h3 className="text-xl font-avenir-heavy text-dark-gray mb-3">Third-Party Services</h3>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        We may use services like Google Analytics to understand website usage. These services have their own privacy policies 
                        governing how they collect and use data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 5: Direct Marketing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  5. Direct Marketing
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    We will only send you marketing communications if you have provided consent. You can opt out at any time by following the unsubscribe link in our emails or contacting us.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 6: Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-orange flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  6. Your Rights
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    You may:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Request access to the personal information we hold about you
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Ask us to correct or update your information
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-orange mt-3"></div>
                      <p className="text-medium-gray font-avenir leading-relaxed">
                        Make a complaint if you believe your privacy has been breached
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    We will respond to requests and complaints within a reasonable time.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 7: Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary-orange flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  7. Data Security
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray leading-relaxed font-avenir">
                    We take reasonable steps to protect your information from misuse, loss, or unauthorised access. However, no internet transmission can be guaranteed as completely secure.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 8: Contact Us */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-light-orange flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-primary-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl font-avenir-heavy text-dark-gray">
                  8. Contact Us
                </h2>
              </div>
              
              <Card className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed font-avenir">
                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <p className="font-avenir-heavy text-dark-gray">Email:</p>
                        <Link href="mailto:privacy@ratematch.ai" className="text-primary-orange hover:underline font-avenir">
                          privacy@ratematch.ai
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <p className="font-avenir-heavy text-dark-gray">Website:</p>
                        <Link href="https://www.clearcompare.com.au" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline font-avenir">
                          www.clearcompare.com.au
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-light-orange/20 rounded-2xl">
                    <p className="text-dark-gray font-avenir">
                      <AlertCircle className="w-5 h-5 inline mr-2 text-primary-orange" />
                      You may also contact the Office of the Australian Information Commissioner (OAIC) at{" "}
                      <Link href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">
                        www.oaic.gov.au
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 gradient-orange">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-avenir-heavy text-white mb-6">
              Ready to compare loans safely?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-avenir">
              Your privacy is protected. Compare loan offers with confidence today.
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
