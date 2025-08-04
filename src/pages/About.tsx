import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, Target, Award, Building, Zap, Shield } from 'lucide-react';

const About = () => {
  const journeyImages = [
    "/Main_page.jpeg",
    "/Chemical-Plant-Steel-Structure.jpg",
    "/pre-engineered-multi-storey-buildings-2-scaled.webp",
    "/project_photo_1.jpg",
    "/Main_page2.jpg"
  ];

  const [currentJourneyImage, setCurrentJourneyImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJourneyImage(prev => (prev + 1) % journeyImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [journeyImages.length]);

  const values = [
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Structural Excellence",
      description: "Delivering superior structural and fabrication solutions with innovative design"
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Client Partnership",
      description: "Building lasting relationships through trust, transparency, and results"
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Service Excellence",
      description: "Uncompromising standards in engineering, fabrication, and maintenance delivery"
    }
  ];

  const team = [
    {
      name: "Om Prakash Sharma",
      role: "Managing Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sai Kumar Patil",
      role: "Senior Structural Engineer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Suresh Kene",
      role: "Fabrication Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    { year: "2015", event: "Company Founded", description: "OM SAI ENGINEERING established in Kalyan, Thane" },
    { year: "2018", event: "Service Expansion", description: "Expanded services to include comprehensive piping solutions" },
    { year: "2021", event: "Major Projects", description: "Completed numerous successful structural and fabrication projects" },
    { year: "2024", event: "Regional Leader", description: "Recognized as leading engineering service provider in Maharashtra" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About OM SAI ENGINEERING
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading provider of structural, fabrication, and piping plant equipment 
              maintenance services, committed to delivering quality engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to provide comprehensive engineering solutions, 
                OM SAI ENGINEERING has emerged as a trusted provider of structural, 
                fabrication, and piping services. Our journey began with a commitment to deliver 
                quality solutions that combine expertise, reliability, and safety.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we stand proud as a leading engineering service provider in Maharashtra, having 
                delivered numerous successful projects across the region. Our expertise 
                spans structural engineering, fabrication work, piping installations, 
                and comprehensive plant equipment maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Extensive industry expertise in structural engineering</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Numerous successful projects delivered across Maharashtra</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Strong presence in Kalyan, Thane region</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality-focused engineering solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={journeyImages[currentJourneyImage]}
                  alt="Our Journey"
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {journeyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentJourneyImage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentJourneyImage === index ? 'bg-yellow-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be Maharashtra's most trusted partner in structural and fabrication solutions, 
                delivering innovative, cost-effective, and reliable engineering services that 
                exceed client expectations while contributing to the region's industrial growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="h-10 w-10 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the engineering services industry through cutting-edge 
                structural and fabrication technology, becoming the benchmark for quality, innovation, and 
                reliability in engineering solutions across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments in our journey to becoming a leading engineering solutions provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.event}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Experience the Aragon difference in your next construction project
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;