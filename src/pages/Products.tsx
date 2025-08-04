import React, { useState } from 'react';
import { Building, Factory, Warehouse, ShoppingBag, Truck, Home } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Building className="h-5 w-5" /> },
    { id: 'structural', name: 'Structural', icon: <Factory className="h-5 w-5" /> },
    { id: 'fabrication', name: 'Fabrication', icon: <Warehouse className="h-5 w-5" /> },
    { id: 'piping', name: 'Piping', icon: <ShoppingBag className="h-5 w-5" /> },
    { id: 'maintenance', name: 'Maintenance', icon: <Truck className="h-5 w-5" /> }
  ];

  const products = [
    {
      id: 1,
      title: "Structural Engineering Services",
      category: "structural",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive structural engineering solutions for industrial and commercial projects",
      features: ["Structural design", "Load calculations", "Foundation design", "Steel structure analysis"],
      applications: ["Industrial plants", "Commercial buildings", "Warehouses", "Manufacturing units"]
    },
    {
      id: 2,
      title: "Fabrication Services",
      category: "fabrication",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional fabrication services for steel structures and components",
      features: ["Steel fabrication", "Welding services", "Custom components", "Quality finishing"],
      applications: ["Structural components", "Industrial equipment", "Custom metalwork", "Plant installations"]
    },
    {
      id: 3,
      title: "Piping Solutions",
      category: "piping",
      image: "https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete piping solutions for industrial and commercial applications",
      features: ["Piping design", "Installation services", "System integration", "Pressure testing"],
      applications: ["Process plants", "Utility systems", "Industrial piping", "Commercial installations"]
    },
    {
      id: 4,
      title: "Plant Equipment Maintenance",
      category: "maintenance",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive maintenance services for industrial plant equipment",
      features: ["Preventive maintenance", "Equipment repair", "System upgrades", "Emergency services"],
      applications: ["Manufacturing plants", "Process equipment", "Industrial machinery", "Utility systems"]
    },
    {
      id: 5,
      title: "Aarakshan Services",
      category: "structural",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized Aarakshan services for industrial applications",
      features: ["Custom solutions", "Technical expertise", "Quality assurance", "Timely delivery"],
      applications: ["Industrial projects", "Commercial applications", "Specialized requirements", "Custom installations"]
    },
    {
      id: 6,
      title: "Custom Engineering Solutions",
      category: "fabrication",
      image: "https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tailored engineering solutions for unique project requirements",
      features: ["Custom design", "Engineering analysis", "Project management", "Quality control"],
      applications: ["Specialized projects", "Unique requirements", "Complex installations", "Custom applications"]
    }
  ];

  const specifications = [
    { title: "Service Area", value: "Maharashtra Region" },
    { title: "Project Size", value: "Small to Large Scale" },
    { title: "Response Time", value: "24-48 Hours" },
    { title: "Quality Standards", value: "IS Codes Compliant" },
    { title: "Experience", value: "Extensive Portfolio" },
    { title: "Support", value: "Ongoing Maintenance" }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of structural, fabrication, and piping solutions designed 
              for diverse industrial and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our engineering services are designed to meet diverse industrial requirements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-yellow-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-yellow-600 font-medium">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose OM SAI ENGINEERING for your next project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Engineering</h3>
              <p className="text-gray-600">Professional engineering expertise in structural, fabrication, and piping solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of local requirements and regulations in Maharashtra region</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Services</h3>
              <p className="text-gray-600">Complete range of services from design to maintenance under one roof</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">Rigorous quality control processes ensure consistent quality and precision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">Commitment to project timelines and efficient service delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Comprehensive maintenance and support services for long-term reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Our engineering team can design structural, fabrication, and piping solutions tailored to your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;