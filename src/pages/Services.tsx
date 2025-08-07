import React from 'react';
import { Building, Factory, Wrench, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="h-12 w-12 text-yellow-500" />,
      title: "Industrial Shed Fabrication",
      description: "Complete fabrication of industrial sheds with precision engineering and quality materials",
      features: ["Custom Design", "Quality Steel", "Weather Resistant", "Quick Installation"]
    },
    {
      icon: <Factory className="h-12 w-12 text-yellow-500" />,
      title: "Warehouse Structure Development",
      description: "Comprehensive warehouse structure solutions for storage and logistics facilities",
      features: ["Large Span Design", "Load Optimization", "Ventilation Systems", "Safety Standards"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Factory Shed Construction",
      description: "Professional factory shed construction services for manufacturing facilities",
      features: ["Structural Analysis", "Foundation Work", "Electrical Integration", "Quality Assurance"]
    },
    {
      icon: <Settings className="h-12 w-12 text-yellow-500" />,
      title: "PEB Mezzanine Floor Fabrication",
      description: "Pre-engineered building mezzanine floors to maximize your facility space",
      features: ["Space Optimization", "Load Bearing Design", "Easy Access", "Cost Effective"]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Site Welding & Assembly Work",
      description: "Professional on-site welding and assembly services for structural components",
      features: ["Certified Welders", "Quality Control", "Safety Protocols", "Timely Completion"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive structural, fabrication, and piping solutions designed to meet 
              your industrial construction needs with precision and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in structural engineering and fabrication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img src="/static/Chemical-Plant-Steel-Structure.jpg" alt="Industrial Shed Fabrication" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Industrial Shed Fabrication</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img src="/static/pre-engineered-multi-storey-buildings-2-scaled.webp" alt="Warehouse Structure" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Warehouse Structure Development</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img src="/static/Steel-Frame-Structures-Full-Installation-and-Support-01-1030x660-1.webp" alt="Factory Shed Construction" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Factory Shed Construction</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Developing a comprehensive plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Implementing solutions with precision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Launching and optimizing results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering services can help you achieve your construction goals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;