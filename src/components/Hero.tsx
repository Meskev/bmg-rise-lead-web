
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with clearer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bmg-navy via-bmg-navy/95 to-bmg-crimson/90"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Rise, Lead, and Transform with
            <span className="block text-bmg-orange mt-2">BMG Group International</span>
          </h1>
          
          <p className="font-open-sans text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Strategic oversight and investment management across multiple sectors, 
            driving transformation and growth in African markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button asChild size="lg" className="bg-bmg-orange hover:bg-bmg-crimson text-white font-montserrat font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bmg-navy font-montserrat font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
};

export default Hero;
