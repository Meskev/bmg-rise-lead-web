
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
      icon: '🎯'
    },
    {
      title: 'Investment Management',
      description: 'Professional portfolio management and investment advisory services.',
      icon: '📈'
    },
    {
      title: 'Tourism Development',
      description: 'Comprehensive tourism sector development and management solutions.',
      icon: '🌍'
    },
    {
      title: 'Logistics Solutions',
      description: 'End-to-end logistics and supply chain management expertise.',
      icon: '🚛'
    },
    {
      title: 'Real Estate',
      description: 'Real estate investment, development, and management services.',
      icon: '🏢'
    },
    {
      title: 'Financial Services',
      description: 'Mobile finance and digital payment solutions for emerging markets.',
      icon: '💳'
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
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
              className="border-2 border-white text-white hover:bg-white hover:text-bmg-navy font-montserrat font-semibold px-8 py-3"
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
