import React from 'react';
import { Code, Palette, Search, Smartphone, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance user experience and engagement",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Security Training", "Compliance"]
    },
    {
      icon: <Headphones className="h-12 w-12 text-blue-600" />,
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your systems running smoothly",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"]
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
              Comprehensive solutions designed to meet your business needs and 
              drive growth through innovation and expertise.
            </p>
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Developing a comprehensive plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Implementing solutions with precision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Launching and optimizing results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;