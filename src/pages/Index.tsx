
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
      image: '/lovable-uploads/103f625f-19b9-46e6-8fb8-41e143138c93.png',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      title: 'Investment Management',
      description: 'Professional portfolio management and investment advisory services.',
      image: '/lovable-uploads/f86af332-dedf-4d9e-9391-45087b9e46a5.png',
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },
    {
      title: 'Tourism Development',
      description: 'Comprehensive tourism sector development and management solutions.',
      image: '/lovable-uploads/aaee8104-1371-4431-a1a3-a629f7ebeda7.png',
      gradient: 'from-orange-400 via-red-500 to-pink-500'
    },
    {
      title: 'Logistics Solutions',
      description: 'End-to-end logistics and supply chain management expertise.',
      image: '/lovable-uploads/dd4ec671-5bf1-4990-8bda-f928ad5e7629.png',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600'
    },
    {
      title: 'Real Estate',
      description: 'Real estate investment, development, and management services.',
      image: '/lovable-uploads/e20a98f8-a7a6-49d0-b56b-54da1db32907.png',
      gradient: 'from-emerald-400 via-teal-500 to-blue-600'
    },
    {
      title: 'Financial Services',
      description: 'Mobile finance and digital payment solutions for emerging markets.',
      image: '/lovable-uploads/c2c642e7-c0da-43bf-90fe-3076f7803380.png',
      gradient: 'from-yellow-400 via-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-20 bg-bmg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-bmg-navy mb-4">
              Our Expertise
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              We provide strategic oversight and investment management across multiple sectors, 
              driving transformation and growth throughout Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-0 relative">
                  {/* Image Section with Gradient Overlay */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-75 z-10`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 z-20"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 text-center relative z-30">
                    <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3 group-hover:text-bmg-crimson transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Decorative gradient line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`}></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-bmg-crimson hover:bg-bmg-orange text-white font-montserrat font-semibold px-8 py-3"
            >
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
            <Button 
              asChild
              size="lg"
              className="bg-bmg-orange hover:bg-bmg-crimson text-white font-montserrat font-semibold px-8 py-3"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-bmg-navy bg-white hover:bg-white hover:text-bmg-navy font-montserrat font-semibold px-8 py-3"
            >
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
