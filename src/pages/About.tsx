
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-bmg-navy text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            About BMG Group
          </h1>
          <p className="font-open-sans text-xl text-gray-200">
            Empowering African businesses through strategic consultancy and investment management
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl text-bmg-navy mb-6">
              Who We Are
            </h2>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              BMG Group International Limited is a dynamic consultancy and investment firm that provides 
              strategic oversight across multiple sectors including tourism, logistics, real estate, 
              mobile finance, and construction. Based in Tanzania, we serve as a catalyst for growth 
              and transformation across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-bmg-navy mb-4">
                Our Story
              </h3>
              <p className="font-open-sans text-gray-700 leading-relaxed mb-6">
                Founded with a vision to unlock Africa's potential, BMG Group has grown from a local 
                consultancy to a regional powerhouse. Our deep understanding of African markets, 
                combined with international best practices, positions us uniquely to drive sustainable growth.
              </p>
              <p className="font-open-sans text-gray-700 leading-relaxed">
                We believe in the transformative power of strategic thinking and smart investments. 
                Our approach is rooted in partnership, innovation, and a commitment to excellence 
                that sets us apart in the African business landscape.
              </p>
            </div>
            
            <div className="bg-bmg-light-gray p-8 rounded-lg">
              <h4 className="font-montserrat font-semibold text-xl text-bmg-navy mb-4">
                Key Highlights
              </h4>
              <ul className="font-open-sans text-gray-700 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bmg-orange rounded-full mr-3"></span>
                  Tanzania-based with regional reach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bmg-orange rounded-full mr-3"></span>
                  Multi-sector expertise and experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bmg-orange rounded-full mr-3"></span>
                  Strategic oversight and investment focus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-bmg-orange rounded-full mr-3"></span>
                  Commitment to African development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bmg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-bmg-navy mb-4">
                  Our Mission
                </h3>
                <p className="font-open-sans text-gray-700 leading-relaxed">
                  To empower African businesses and entrepreneurs by providing world-class consultancy 
                  services and strategic investment management that drives sustainable growth, creates 
                  value, and contributes to the continent's economic transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-bmg-navy mb-4">
                  Our Vision
                </h3>
                <p className="font-open-sans text-gray-700 leading-relaxed">
                  To be Africa's leading consultancy and investment firm, recognized for our innovative 
                  solutions, strategic insights, and unwavering commitment to helping businesses and 
                  communities rise, lead, and transform across the continent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl text-bmg-navy mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bmg-crimson rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3">Excellence</h3>
              <p className="font-open-sans text-gray-600">
                We strive for excellence in everything we do, delivering exceptional results that exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bmg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3">Partnership</h3>
              <p className="font-open-sans text-gray-600">
                We build lasting partnerships based on trust, collaboration, and mutual success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-bmg-navy mb-3">Innovation</h3>
              <p className="font-open-sans text-gray-600">
                We embrace innovation and creative solutions to drive transformation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
