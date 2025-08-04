import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern e-commerce solution with advanced features",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Secure banking application for iOS and Android",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete brand identity and visual system",
      technologies: ["Figma", "Adobe CC", "Prototyping"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Analytics dashboard for business intelligence",
      technologies: ["Vue.js", "D3.js", "Express"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Digital Campaign",
      category: "marketing",
      image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-channel marketing campaign strategy",
      technologies: ["Google Ads", "Facebook Ads", "Analytics"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive fitness and health tracking",
      technologies: ["Flutter", "Firebase", "Health APIs"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing our best work and the innovative solutions we've delivered 
              for clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
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
            Let's work together to bring your vision to life
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;