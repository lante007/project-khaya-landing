import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  XCircle, 
  ClipboardList, 
  Search, 
  Handshake,
  Shield,
  CreditCard,
  Award,
  Star
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Set page metadata
  useEffect(() => {
    document.title = "Project Khaya - Build Your Dream Home, Stress-Free";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connect with KZN\'s most trusted builders and suppliers. Get transparent quotes in minutes and say goodbye to price surprises and delays.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Connect with KZN\'s most trusted builders and suppliers. Get transparent quotes in minutes and say goodbye to price surprises and delays.';
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
            alt="Happy family in their new home" 
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
              Build Your Dream Home, <span className="text-primary">Stress-Free</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
              Connect with KZN's most trusted builders and suppliers. Get transparent quotes in minutes and say goodbye to price surprises and delays.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-semibold">4.8/5</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="font-semibold">Join 1,500+ Happy Homeowners in KZN</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Quotes Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                I'm a Supplier/Tradesperson
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
              <span className="font-semibold text-gray-800">500+ Vetted Suppliers</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-800">Milestone Payments for Your Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold text-gray-800">100% Project Support Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Three easy steps to your dream project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClipboardList className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Tell Us About Your Project</h3>
                <p className="text-gray-600 leading-relaxed">
                  Briefly describe what you need. It takes less than 2 minutes.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Compare Free Quotes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive and compare transparent quotes from our network of vetted professionals.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Hire with Confidence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose the best fit and pay securely with our milestone payment system.
                </p>
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
              We've reimagined the construction experience to eliminate the stress and uncertainty.
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
                    <span className="text-gray-700">Unreliable contractors who ghost you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hidden costs and surprise price increases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Endless delays with no accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Lack of trust and transparency</span>
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
                    <span className="text-gray-800 font-medium">Vetted, reliable professionals you can trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Transparent, fixed quotes with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">On-time project tracking and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">Secure milestone payments protect your investment</span>
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
              See how Project Khaya has transformed the building experience for homeowners and suppliers across KZN.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "I was terrified of being ripped off. Project Khaya connected me with a builder who finished my extension under budget and ahead of schedule. I couldn't be happier!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    N
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Naledi M.</p>
                    <p className="text-sm text-gray-600">Estcourt</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Project:</span> Home Extension
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Saved: R12,000 vs. initial quotes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "Joining Project Khaya doubled my sales in 3 months. The platform handles the marketing and payments, so I can focus on providing quality materials."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    B
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Ben's Bricks</p>
                    <p className="text-sm text-gray-600">Mooi River</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Business Type:</span> Building Supplies
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Result: Sales doubled in 3 months
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
            backgroundImage: 'url(/construction-materials.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Build?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Get free, no-obligation quotes from KZN's best builders and suppliers today.
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-7 bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 font-bold"
          >
            Get My Free Quotes
          </Button>
          
          <p className="mt-6 text-sm opacity-90">
            ✓ It's 100% free and takes less than 2 minutes
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
                Building community, one home at a time. Your trusted construction marketplace for KZN.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
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
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Estcourt, KZN</li>
                <li>South Africa</li>
                <li className="text-primary">hello@projectkhaya.co.za</li>
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
