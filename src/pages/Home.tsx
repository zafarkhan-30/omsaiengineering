import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Building, Clock, Shield, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Quality",
      description: "SUnmatched precision and durability in every pre-engineered building we fabricate and erect."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Reliability",
      description: "On-time project delivery with consistent performance across design, fabrication,and installation phases."
    },
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Experience",
      description: "Proven track record in delivering industrial, commercial, and warehouse PEB projects across Maharashtra."
    }
  ];

  const projects = [
    {
      title: "Industrial Plant Structure",
      location: "Kalyan, Maharashtra",
      area: "25,000 sq ft",
      images: ["/static/Chemical-Plant-Steel-Structure.jpg", 
        "/static/pre-engineered-multi-storey-buildings-2-scaled.webp",
         "/static/Featured Projects4.jpg"]
    },
    {
      title: "Metro Station",
      location: "Mankhur, Mumbai",
      area: "Structrue Work Plant",
      images: ["/static/Featured Projects5.jpg", "/static/Featured Projects_2.jpg"]
    },
    {
      title: "Mezzanine Structrue Building",
      location: "Dholera, Ahmedabad",
      area: "TATA Semiconductor Office",
      images: ["/static/Featured Projects6.jpg"]
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const testimonials = [
    {
      name: "Suresh Patil",
      role: "Plant Manager, Local Industry",
      content: "OM SAI ENGINEERING delivered our structural project with exceptional quality and on time.",
      rating: 5
    },
    {
      name: "Amit Desai",
      role: "Maintenance Head, Manufacturing Unit",
      content: "Very professional and efficient team. The structural shed for my roadside shop was done exactly as per our requirements. Clean finishing and good communication throughout the work. Will definitely work with them again.",
      rating: 5
    },
    {
      name: "Amit Roy, Asansol",
      role: "Project Director, Industrial Complex",
      content: "Highly recommend for structural shed fabrication. The welding quality, finishing, and alignment of the steel structure was excellent. They followed safety practices too, which was a big plus.",
      rating: 5
    }
  ];

  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/static/Main_page.jpeg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            FAST-TRACK STEEL STRUCTURES
            <span className="block text-yellow-400">
              ENGINEERED FOR PERFORMANCE,
            </span>
            <span className="block text-yellow-400">
              QUALITY & PRECISION.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            End-to-end PEB construction contractor delivering customized, durable, and costefficient
            building solutions across Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              REQUEST QUOTE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OM SAI ENGINEERING
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for complete PEB solutions—from design and fabrication to onsite
              erection with uncompromised quality and safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/159298/construction-site-build-construction-work-159298.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            COMPREHENSIVE SOLUTIONS FOR
            <span className="block text-yellow-400">
              STRUCTURAL ENGINEERING,
            </span>
            <span className="block text-yellow-400">
              FABRICATION & PIPING
            </span>
            <span className="block text-yellow-400">
              MAINTENANCE.
            </span>
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in delivering comprehensive engineering solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, project.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => nextImage(index, project.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full ${
                              (currentImageIndex[index] || 0) === imgIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-yellow-600 font-semibold">{project.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by leading companies across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your PEB requirements and receive a customized quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            REQUEST QUOTE TODAY
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;