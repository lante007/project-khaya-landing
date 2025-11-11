import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  Users, 
  Package,
  Shield,
  CreditCard,
  Award,
  Star,
  Hammer,
  Wrench,
  Home as HomeIcon,
  TrendingUp
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Set page metadata
  useEffect(() => {
    document.title = "Project Khaya - Your Trusted Home Services Marketplace";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connect with skilled tradespeople and suppliers for building projects and home maintenance. Post jobs, receive bids, and hire with confidence in KZN.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Connect with skilled tradespeople and suppliers for building projects and home maintenance. Post jobs, receive bids, and hire with confidence in KZN.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Home services and construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <p className="text-sm font-medium">🏡 Building Community, One Khaya at a Time</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              From Big Builds to <span className="text-primary">Small Fixes</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
              Post your job, get competitive bids from verified tradespeople and suppliers, and hire with confidence. Whether you're building, renovating, or fixing that leaky tap.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8 text-sm md:text-base flex-wrap">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-semibold">4.8/5</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="font-semibold">1,500+ Jobs Completed in KZN</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Post a Job (Free)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Find Jobs & Earn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-200 py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-800">500+ Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-800">Secure Milestone Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-800">100% Support Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Marketplace for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you need help, offer services, or supply materials – Project Khaya connects you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Homeowners */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Homeowners</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Post any job – from building a new home to fixing a broken door. Get multiple bids and choose the best.
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Post jobs for free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Compare competitive bids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hire verified professionals</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Post a Job</Button>
              </CardContent>
            </Card>

            {/* Skilled Workers */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Skilled Workers</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Find jobs that match your skills. Bid on projects, showcase your work, and grow your business.
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Browse and bid on jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Build your portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Get paid securely</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Sign Up to Bid</Button>
              </CardContent>
            </Card>

            {/* Suppliers */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Material Suppliers</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  List your products, bid on supply contracts, and reach customers actively looking for materials.
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>List products & bid on jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Reach active buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fast, secure payments</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Join as Supplier</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process that works for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Post or Find a Job</h3>
                <p className="text-gray-600 leading-relaxed">
                  Homeowners post jobs. Workers and suppliers browse opportunities and submit bids.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Compare & Choose</h3>
                <p className="text-gray-600 leading-relaxed">
                  Review bids, check ratings and portfolios, then select the best fit for your needs.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Work & Get Paid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete the job with milestone tracking. Payments are secure and released upon completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">All Types of Jobs Welcome</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From major construction projects to everyday home maintenance – we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Building & Construction */}
            <Card className="border-2 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/construction-materials.jpg" 
                  alt="Building and construction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-3">Building & Construction</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>New home construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Home extensions & renovations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Roofing & structural work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Building materials supply</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance & Repairs */}
            <Card className="border-2 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/maintenance-work.jpg" 
                  alt="Home maintenance and repairs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-3">Maintenance & Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Plumbing & electrical repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Painting & tiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Carpentry & woodwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>General handyman services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Project Khaya?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've eliminated the frustrations of finding reliable help and fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-700">The Old Way</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Contractors who disappear or ghost you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No way to compare prices or quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hidden costs and surprise charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No protection or accountability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* The Khaya Way */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/10 shadow-xl">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">The Khaya Way</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Verified professionals with ratings & reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Competitive bidding = best prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Transparent, fixed quotes upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Secure payments & dispute resolution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Stories, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from homeowners, workers, and suppliers who've found success on Project Khaya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 - Homeowner */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "I needed my bathroom fixed urgently. Posted the job, got 4 bids within hours, and hired someone who finished in 2 days. Amazing!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    T
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Thandi K.</p>
                    <p className="text-sm text-gray-600">Homeowner, Pietermaritzburg</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-primary font-semibold">
                    Job: Bathroom Plumbing Repair
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Worker */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "I've landed 12 jobs in 2 months through Project Khaya. The bidding system is fair and payments are always on time."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sipho M.</p>
                    <p className="text-sm text-gray-600">Electrician, Durban</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-primary font-semibold">
                    12 jobs completed | R45,000 earned
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Supplier */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Project Khaya connects me directly with customers who need materials. My sales have tripled since joining."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    B
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Ben's Hardware</p>
                    <p className="text-sm text-gray-600">Supplier, Mooi River</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-primary font-semibold">
                    Sales tripled in 3 months
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(/home-repairs.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Join thousands of homeowners, workers, and suppliers building better communities together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-7 bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 font-bold"
            >
              Post a Job (Free)
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-7 border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold"
            >
              Sign Up to Earn
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            ✓ Free to join • ✓ No hidden fees • ✓ Get started in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Project Khaya</h3>
              <p className="text-sm leading-relaxed">
                Building community, one job at a time. Your trusted marketplace connecting homeowners, workers, and suppliers across KZN.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Homeowners</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Browse Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Find Jobs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sign Up</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Project Khaya. All rights reserved. | Ubuntu ngumuntu ngabantu - A person is a person through other people</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
