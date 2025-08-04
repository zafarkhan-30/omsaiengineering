import React, { useState, useEffect } from 'react';
import { Shield, Award, CheckCircle, Settings, Users, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const Quality = () => {
  const qualityImages = [
    "/pre-engineered-multi-storey-buildings-2-scaled.webp",
    "/Chemical-Plant-Steel-Structure.jpg",
    "/project_photo_1.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % qualityImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [qualityImages.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % qualityImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + qualityImages.length) % qualityImages.length);
  };

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: <Award className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      icon: <Shield className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "IS 800:2007",
      description: "Code of Practice for General Construction",
      icon: <FileText className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "AISC Standards",
      description: "American Institute of Steel Construction",
      icon: <Settings className="h-8 w-8 text-yellow-500" />
    }
  ];

  const qualityFeatures = [
    {
      title: "Design Excellence",
      description: "Advanced 3D modeling and structural analysis using latest CAD software",
      points: ["STAAD Pro analysis", "Tekla Structures modeling", "Wind and seismic design", "Load optimization"]
    },
    {
      title: "Material Quality",
      description: "Premium grade steel and components sourced from certified suppliers",
      points: ["IS 2062 grade steel", "Galvanized coatings", "Weather-resistant paints", "Quality test certificates"]
    },
    {
      title: "Manufacturing Process",
      description: "State-of-the-art fabrication facilities with precision equipment",
      points: ["CNC cutting machines", "Automated welding", "Shot blasting facility", "Dimensional accuracy checks"]
    },
    {
      title: "Installation Standards",
      description: "Experienced installation teams following international best practices",
      points: ["Certified welders", "Safety protocols", "Quality checkpoints", "Final inspections"]
    }
  ];

  const testingProcedures = [
    { test: "Material Testing", description: "Chemical composition and mechanical properties verification" },
    { test: "Welding Quality", description: "Non-destructive testing including radiography and ultrasonic" },
    { test: "Coating Thickness", description: "Galvanizing and paint thickness measurements" },
    { test: "Dimensional Check", description: "Precision measurement of all fabricated components" },
    { test: "Load Testing", description: "Structural load testing as per design specifications" },
    { test: "Weathering Test", description: "Accelerated weathering tests for durability assessment" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quality Assurance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Uncompromising commitment to quality in every aspect of our 
              pre-engineered building solutions and services.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Quality Promise
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At OM SAI ENGINEERING, quality is not just a commitment—it's our foundation. 
                We understand that our structures will house valuable assets, 
                equipment, and most importantly, people. This responsibility drives 
                our relentless pursuit of excellence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From initial design to final installation, every step in our process 
                is governed by stringent quality standards. Our team of certified 
                engineers, experienced fabricators, and skilled installation 
                professionals work together to deliver structures that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">100% quality inspection at every stage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">International standards compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Comprehensive warranty coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Continuous improvement processes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={qualityImages[currentSlide]}
                  alt="Quality control inspection"
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {qualityImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-yellow-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Showcase Slideshow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pre-Engineered Building Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our quality construction and engineering precision
            </p>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={qualityImages[currentSlide]}
              alt="Pre-engineered building quality"
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {qualityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-yellow-400' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by international certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Control Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality management across all project phases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Procedures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing & Inspection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous testing protocols ensure structural integrity and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingProcedures.map((test, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {test.test}
                </h3>
                <p className="text-gray-600 text-sm">
                  {test.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality metrics demonstrate consistent excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">99.8%</div>
              <div className="text-gray-600">Quality Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">Zero</div>
              <div className="text-gray-600">Safety Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Quality Excellence
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Partner with us for PEB solutions that meet the highest quality standards
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Request Quality Documentation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Quality;