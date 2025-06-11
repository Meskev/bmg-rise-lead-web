import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [{
    title: 'Business Consultancy & Strategy',
    description: 'Strategic guidance to optimize operations, improve efficiency, and drive sustainable growth across African markets.',
    features: ['Strategic Planning', 'Operational Excellence', 'Market Analysis', 'Business Transformation'],
    icon: '🎯'
  }, {
    title: 'Investment Management',
    description: 'Professional portfolio management and investment advisory services tailored for the African market.',
    features: ['Portfolio Management', 'Risk Assessment', 'Investment Advisory', 'Due Diligence'],
    icon: '📈'
  }, {
    title: 'Tourism & Hospitality',
    description: 'We support businesses in establishing and scaling their tour operations across Tanzania and beyond. In hospitality, we professionally manage serviced apartments and rental properties, providing seamless guest experiences and operational efficiency.',
    features: ['Tourism Strategy', 'Tour Operations', 'Hospitality Management', 'Property Management'],
    icon: '🌍'
  }, {
    title: 'Logistics Solutions',
    description: 'End-to-end logistics and supply chain management expertise for efficient operations.',
    features: ['Supply Chain Optimization', 'Distribution Networks', 'Warehousing Solutions', 'Transport Management'],
    icon: '🚛'
  }, {
    title: 'Real Estate Development',
    description: 'Real estate investment, development, and management services across residential and commercial sectors.',
    features: ['Property Development', 'Real Estate Investment', 'Asset Management', 'Market Analysis'],
    icon: '🏢'
  }, {
    title: 'Financial Services',
    description: 'We specialize in managing businesses in the mobile money sector, mobile banking agency networks, and Bureau de Change operations. We are also expanding our expertise to offer consultancy services for microfinance institutions and startups.',
    features: ['Mobile Finance', 'Banking Networks', 'Bureau de Change', 'Microfinance Consultancy'],
    icon: '💳'
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-bmg-navy text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Our Services
          </h1>
          <p className="font-open-sans text-xl text-gray-200">
            Comprehensive solutions across multiple sectors to drive growth and transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    
                    <div className="flex-1">
                      <h3 className="font-montserrat text-2xl text-bmg-navy mb-3 font-bold">
                        {service.title}
                      </h3>
                      <p className="font-open-sans text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-montserrat text-bmg-navy font-semibold">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => <li key={idx} className="font-open-sans text-sm text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-bmg-orange rounded-full mr-2"></span>
                              {feature}
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bmg-light-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl text-bmg-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-open-sans text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business rise, lead, and transform in the African market.
          </p>
          <Button asChild size="lg" className="bg-bmg-crimson hover:bg-bmg-orange text-white font-montserrat font-semibold px-8 py-3">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Services;
