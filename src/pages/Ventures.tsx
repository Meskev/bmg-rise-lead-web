import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Ventures = () => {
  const ventures = [{
    title: 'East Africa Tourism Initiative',
    sector: 'Tourism',
    description: 'A comprehensive tourism development project focusing on sustainable eco-tourism across East Africa, promoting local communities and conservation.',
    status: 'Active',
    impact: 'Supporting 15+ local communities'
  }, {
    title: 'Tanzania Logistics Network',
    sector: 'Logistics',
    description: 'Strategic logistics infrastructure development connecting major ports to inland distribution centers, enhancing regional trade efficiency.',
    status: 'Expanding',
    impact: '40% reduction in transport costs'
  }, {
    title: 'Dar es Salaam Commercial Complex',
    sector: 'Real Estate',
    description: 'Modern commercial and residential development project in Tanzania\'s economic capital, featuring sustainable design and smart building technologies.',
    status: 'Development',
    impact: '500+ units planned'
  }, {
    title: 'Mobile Finance Solutions',
    sector: 'Fintech',
    description: 'Digital financial services platform enabling financial inclusion for underserved communities across rural Tanzania and neighboring regions.',
    status: 'Pilot Phase',
    impact: '10,000+ users onboarded'
  }, {
    title: 'Construction Materials Supply Chain',
    sector: 'Construction',
    description: 'Integrated supply chain solution for construction materials, ensuring quality and timely delivery for major infrastructure projects.',
    status: 'Operational',
    impact: 'Serving 25+ major projects'
  }, {
    title: 'Regional Investment Fund',
    sector: 'Investment',
    description: 'Specialized investment fund focusing on high-growth potential SMEs across East Africa, providing capital and strategic guidance.',
    status: 'Active',
    impact: '$5M+ invested in 12 companies'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Expanding':
        return 'bg-blue-100 text-blue-800';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pilot Phase':
        return 'bg-purple-100 text-purple-800';
      case 'Operational':
        return 'bg-bmg-orange bg-opacity-20 text-bmg-orange';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-bmg-navy text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Our Ventures
          </h1>
          <p className="font-open-sans text-xl text-gray-200">
            Strategic investments and partnerships driving transformation across Africa
          </p>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl text-bmg-navy mb-6">
              Portfolio Highlights
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans multiple sectors, reflecting our commitment to comprehensive 
              regional development and sustainable growth across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ventures.map((venture, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-2">
                        {venture.title}
                      </h3>
                      <span className="font-open-sans text-sm text-bmg-crimson font-medium">
                        {venture.sector}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(venture.status)}`}>
                      {venture.status}
                    </span>
                  </div>
                  
                  <p className="font-open-sans text-gray-600 leading-relaxed mb-4">
                    {venture.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-bmg-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-open-sans text-sm text-gray-600">{venture.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-bmg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl text-bmg-navy mb-6">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-bmg-crimson mb-2">10+</div>
              <p className="font-open-sans text-gray-600">Active Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-bmg-crimson mb-2">7</div>
              <p className="font-open-sans text-gray-600">Key Sectors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-bmg-crimson mb-2">100M+ TSh</div>
              <p className="font-open-sans text-gray-600">Total Investment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-bmg-crimson mb-2">15,000+</div>
              <p className="font-open-sans text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-bmg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Interested in Partnership?
          </h2>
          <p className="font-open-sans text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us in driving transformation across Africa. Let's explore how we can create value together.
          </p>
          <Button asChild size="lg" className="bg-bmg-orange hover:bg-bmg-crimson text-white font-montserrat font-semibold px-8 py-3">
            <Link to="/contact">Explore Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Ventures;