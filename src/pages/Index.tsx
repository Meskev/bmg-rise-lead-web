import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'Business Consultancy',
      description: 'Strategic guidance to optimize operations and drive growth across African markets.',
      image: '/lovable-uploads/103f625f-19b9-46e6-8fb8-41e143138c93.png'
    },
    {
      title: 'Investment Management',
      description: 'Professional portfolio management and investment advisory services.',
      image: '/lovable-uploads/f86af332-dedf-4d9e-9391-45087b9e46a5.png'
    },
    {
      title: 'Tourism Development',
      description: 'Comprehensive tourism sector development and management solutions.',
      image: '/lovable-uploads/aaee8104-1371-4431-a1a3-a629f7ebeda7.png'
    },
    {
      title: 'Logistics Solutions',
      description: 'End-to-end logistics and supply chain management expertise.',
      image: '/lovable-uploads/dd4ec671-5bf1-4990-8bda-f928ad5e7629.png'
    },
    {
      title: 'Real Estate',
      description: 'Real estate investment, development, and management services.',
      image: '/lovable-uploads/e20a98f8-a7a6-49d0-b56b-54da1db32907.png'
    },
    {
      title: 'Financial Services',
      description: 'Mobile finance and digital payment solutions for emerging markets.',
      image: '/lovable-uploads/c2c642e7-c0da-43bf-90fe-3076f7803380.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/70 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl overflow-hidden">
                {/* Glass effect overlay - covers entire card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Gradient border effect - covers entire card */}
                <div className="absolute inset-0 bg-gradient-to-r from-bmg-orange/30 via-bmg-crimson/30 to-bmg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <CardContent className="relative p-0 text-center z-10">
                  <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-bmg-light-gray/50 to-white/80 backdrop-blur-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3 group-hover:text-bmg-crimson transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-bmg-crimson hover:bg-bmg-orange text-white font-montserrat font-semibold px-8 py-3">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bmg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
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
    </div>
  );
};

export default Index;
