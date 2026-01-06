'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectModal from '@/components/ui/project-modal';
import { PortfolioFAQ } from "@/components/ui/faq-content";
import { HelpCircle } from 'lucide-react';

interface PortfolioProps {
  className?: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  featured?: boolean;
  client?: string;
  year?: string;
  duration?: string;
}

export default function Portfolio({ className = "" }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [filterAnimation, setFilterAnimation] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      imageUrl: '/images/portfolio/ecommerce-platform.svg',
      projectUrl: 'https://example-ecommerce.com',
      featured: true,
      client: 'TechMart Inc.',
      year: '2024',
      duration: '3 months'
    },
    {
      id: '2',
      title: 'Task Management App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for team collaboration and task management. Built with React Native, featuring real-time sync, push notifications, and offline support.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      imageUrl: '/images/portfolio/task-management-app.svg',
      projectUrl: 'https://example-taskapp.com',
      featured: true,
      client: 'Productive Co.',
      year: '2024',
      duration: '4 months'
    },
    {
      id: '3',
      title: 'AI Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Advanced analytics dashboard with AI-powered insights and predictive analytics. Features real-time data visualization, custom reports, and automated alerts.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      imageUrl: '/images/portfolio/analytics-dashboard.svg',
      projectUrl: 'https://example-analytics.com',
      featured: false,
      client: 'DataCorp Ltd.',
      year: '2023',
      duration: '6 months'
    },
    {
      id: '4',
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'Comprehensive healthcare management solution for hospitals and clinics. Includes patient records, appointment scheduling, billing, and telemedicine features.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'AWS'],
      imageUrl: '/images/portfolio/healthcare-system.svg',
      projectUrl: 'https://example-healthcare.com',
      featured: false,
      client: 'MediCare Plus',
      year: '2023',
      duration: '8 months'
    },
    {
      id: '5',
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'Full-featured social media platform with real-time messaging, content sharing, and community features. Built for scalability and performance.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Socket.io'],
      imageUrl: '/images/portfolio/social-media-platform.svg',
      projectUrl: 'https://example-social.com',
      featured: true,
      client: 'ConnectHub',
      year: '2024',
      duration: '5 months'
    },
    {
      id: '6',
      title: 'IoT Smart Home System',
      category: 'IoT Development',
      description: 'Smart home automation system with mobile app control. Features device management, automation rules, energy monitoring, and voice control.',
      technologies: ['React', 'Node.js', 'MQTT', 'Arduino', 'React Native'],
      imageUrl: '/images/portfolio/iot-smart-home.svg',
      projectUrl: 'https://example-iot.com',
      featured: false,
      client: 'SmartLiving Inc.',
      year: '2023',
      duration: '7 months'
    },
    {
      id: '7',
      title: 'Banking Application',
      category: 'Web Development',
      description: 'Secure banking application with real-time transactions, fraud detection, and investment management. Built with security-first architecture.',
      technologies: ['Vue.js', 'Java', 'Spring Security', 'PostgreSQL', 'Docker'],
      imageUrl: '/images/portfolio/banking-app.svg',
      projectUrl: 'https://example-banking.com',
      featured: true,
      client: 'SecureBank Ltd.',
      year: '2024',
      duration: '6 months'
    },
    {
      id: '8',
      title: 'Learning Management System',
      category: 'Enterprise Software',
      description: 'Comprehensive LMS with video streaming, assignments, quizzes, and progress tracking. Supports thousands of concurrent users.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS S3', 'WebRTC'],
      imageUrl: '/images/portfolio/lms-system.svg',
      projectUrl: 'https://example-lms.com',
      featured: false,
      client: 'EduTech Solutions',
      year: '2023',
      duration: '9 months'
    },
    {
      id: '9',
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'On-demand food delivery app with real-time tracking, restaurant management, and payment integration. Available on iOS and Android.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
      imageUrl: '/images/portfolio/food-delivery.svg',
      projectUrl: 'https://example-food.com',
      featured: true,
      client: 'QuickEats Corp.',
      year: '2024',
      duration: '4 months'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Analytics', 'Enterprise Software', 'IoT Development'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    setFilterAnimation(true);
    const timer = setTimeout(() => setFilterAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Enhanced Hero Banner */}
      <section className="relative w-full h-[500px] bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center text-center mb-[80px] md:mb-[60px] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-teal-500/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/15 rounded-full animate-pulse"></div>
        </div>
        
        <div className="text-white max-w-4xl px-5 relative z-10">
          <h1 className="text-[3.5rem] md:text-[2.8rem] font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-lg opacity-90 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            Explore our latest projects and success stories. From web applications to mobile solutions, we deliver innovative technology solutions.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-delay-2">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">30+</div>
              <div className="text-sm opacity-80">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-sm opacity-80">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-5 md:px-4">
        
        {/* Enhanced Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex flex-wrap justify-center gap-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <span className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredItems.length}</span> projects
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
            )}
          </span>
        </div>

        {/* Enhanced Portfolio Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
          filterAnimation ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 ${
                item.featured ? 'ring-1 ring-blue-100 ring-offset-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    Featured
                  </span>
                </div>
              )}

              {/* Enhanced Project Image - Reduced Height */}
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Overlay with More Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-xs font-semibold text-gray-600 mb-1">{item.client}</div>
                    <div className="text-sm font-bold text-gray-900 mb-2">{item.title}</div>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-2 flex-grow">
                  {item.description}
                </p>

                {/* Client Info */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500">Client</div>
                  <div className="text-sm font-semibold text-gray-900">{item.client}</div>
                </div>

                {/* Technologies - Enhanced */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded cursor-default">
                      +{item.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Enhanced View Project Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-sm w-full"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l-3 3m0 0l-3-3m3 3l3-3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <section className="mb-20 mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <div className="text-2xl">📊</div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium text-center">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <div className="text-2xl">😊</div>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600 font-medium text-center">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <div className="text-2xl">⭐</div>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium text-center">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <div className="text-2xl">🚀</div>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium text-center">Support Available</div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="text-center bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Let's work together to bring your ideas to life. We're always excited to take on new challenges and create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a 
                href="mailto:info@oscorm.com" 
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      
      {/* Enhanced FAQ Section */}
      <PortfolioFAQ />
      
      <Footer />
    </div>
  );
}
