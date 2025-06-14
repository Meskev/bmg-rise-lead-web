import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [{
    title: 'Business Consultancy',
    description: 'Strategic guidance to optimize operations and drive growth across African markets.',
    image: '/lovable-uploads/103f625f-19b9-46e6-8fb8-41e143138c93.png'
  }, {
    title: 'Investment Management',
    description: 'Professional portfolio management and investment advisory services.',
    image: '/lovable-uploads/f86af332-dedf-4d9e-9391-45087b9e46a5.png'
  }, {
    title: 'Tours & Safaris',
    description: 'We curate unforgettable travel experiences through expertly guided tours and bespoke safari adventures across Tanzania\'s most iconic destination.',
    image: '/lovable-uploads/aaee8104-1371-4431-a1a3-a629f7ebeda7.png'
  }, {
    title: 'Logistics Solutions',
    description: 'End-to-end logistics and supply chain management expertise.',
    image: '/lovable-uploads/dd4ec671-5bf1-4990-8bda-f928ad5e7629.png'
  }, {
    title: 'Real Estate',
    description: 'Real estate investment, development, and management services.',
    image: '/lovable-uploads/e20a98f8-a7a6-49d0-b56b-54da1db32907.png'
  }, {
    title: 'Financial Services',
    description: 'We specialize in managing businesses in the mobile money sector, mobile banking agency networks, and Bureau de Change operations. We are also expanding our expertise to offer consultancy services for microfinance institutions and startups.',
    image: '/lovable-uploads/c2c642e7-c0da-43bf-90fe-3076f7803380.png'
  }];

  const affiliateLogos = [
    { name: '55th Avenue Investment Limited', logo: '/lovable-uploads/92ca3342-f120-49ba-963a-69a88dfad187.png' },
    { name: 'BMG Brothers Investment Ltd', logo: '/lovable-uploads/04541b29-48c0-40a5-801c-f8ce29e8fd5f.png' },
    { name: 'Aushtaek Tours', logo: '/lovable-uploads/667f3255-dce6-4182-b863-292a6ef2d1fe.png' },
    { name: 'Tangaroa Freight Logistics Limited', logo: '/lovable-uploads/a0e3d3a8-efc3-4ff4-a5a4-19700dafc474.png' },
    { name: 'Hinno Logistics Company Limited', logo: '/lovable-uploads/dcb5644e-3a57-4591-9118-1c76ba5b481d.png' },
    { name: 'Whistling Woods', logo: '/lovable-uploads/4f1bb185-9145-44ba-b1f3-5ef82e308afc.png' },
  ];

  const testimonials = [
    {
      quote: "BMG Group's strategic guidance transformed our operations and opened new market opportunities across East Africa.",
      author: "Sarah Johnson",
      position: "CEO, TechVentures Africa",
      company: "Leading Technology Company"
    },
    {
      quote: "Their expertise in investment management and market analysis has been instrumental in our expansion strategy.",
      author: "David Mwangi",
      position: "Managing Director",
      company: "Regional Investment Firm"
    },
    {
      quote: "The professionalism and deep understanding of African markets sets BMG Group apart from other consultancy firms.",
      author: "Maria Santos",
      position: "Operations Director",
      company: "International Development Agency"
    }
  ];

  return <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-br from-bmg-light-gray via-white to-bmg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-bmg-navy mb-4">
              Our Expertise
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              We provide strategic oversight and investment management across multiple sectors, driving transformation and growth in Tanzania Businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group relative bg-white/70 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-bmg-orange/30 via-bmg-crimson/30 to-bmg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="relative p-0 text-center z-10">
                  <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-bmg-light-gray/50 to-white/80 backdrop-blur-sm">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3 group-hover:text-bmg-crimson transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-bmg-crimson hover:bg-bmg-orange text-white font-montserrat font-semibold px-8 py-3">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section with faster animation */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-bmg-navy mb-4">
              Trusted by These Exceptional Businesses
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Our affiliate businesses under BMG Group showcase our diverse expertise and commitment to excellence across multiple sectors.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-[scroll_15s_linear_infinite] space-x-12">
              {/* First set of logos */}
              {affiliateLogos.map((affiliate, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                  <img 
                    src={affiliate.logo} 
                    alt={affiliate.name}
                    className={`w-auto transition-transform duration-300 hover:scale-105 object-contain filter brightness-100 contrast-110 ${
                      affiliate.name === 'Whistling Woods' ? 'max-h-24 max-w-44' : 'max-h-20 max-w-40'
                    }`}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {affiliateLogos.map((affiliate, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                  <img 
                    src={affiliate.logo} 
                    alt={affiliate.name}
                    className={`w-auto transition-transform duration-300 hover:scale-105 object-contain filter brightness-100 contrast-110 ${
                      affiliate.name === 'Whistling Woods' ? 'max-h-24 max-w-44' : 'max-h-20 max-w-40'
                    }`}
                  />
                </div>
              ))}
              {/* Third set for smooth continuation */}
              {affiliateLogos.map((affiliate, index) => (
                <div key={`triple-${index}`} className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                  <img 
                    src={affiliate.logo} 
                    alt={affiliate.name}
                    className={`w-auto transition-transform duration-300 hover:scale-105 object-contain filter brightness-100 contrast-110 ${
                      affiliate.name === 'Whistling Woods' ? 'max-h-24 max-w-44' : 'max-h-20 max-w-40'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-bmg-light-gray via-white to-bmg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-bmg-navy mb-4">
              Here's How Industry Leaders Talk About Us
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what key partners and business leaders say about their experience working with BMG Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl text-bmg-orange mb-4">"</div>
                    <p className="font-open-sans text-gray-700 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="font-montserrat font-semibold text-bmg-navy">
                      {testimonial.author}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="font-open-sans text-sm text-bmg-crimson">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bmg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Start Transforming Your Business With BMG Group International Limited.</h2>
          <p className="font-open-sans text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how BMG Group can help you rise, lead, and transform in the African market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-bmg-orange hover:bg-bmg-crimson text-white font-montserrat font-semibold px-8 py-3">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-bmg-navy bg-white hover:bg-white hover:text-bmg-navy font-montserrat font-semibold px-8 py-3">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Index;
