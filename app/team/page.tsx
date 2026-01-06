'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'developers' | 'seo-specialists' | 'digital-marketing' | 'it-professionals' | 'sales-executives';
  experience: number;
  field: string;
  skills: string[];
  imageUrl: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

interface TeamProps {
  className?: string;
}

export default function Team({ className = "" }: TeamProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    // Developers
    {
      id: '1',
      name: 'Sepro Lama',
      role: 'Senior Full Stack Developer',
      category: 'developers',
      experience: 3,
      field: 'Web & Mobile Development',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'React Native', 'AWS'],
      imageUrl: '/images/team/rahul-sharma.svg',
      bio: 'Experienced senior developer with 3+ years of expertise in building scalable web and mobile applications. Led multiple projects from conception to deployment.',
      linkedin: 'https://linkedin.com/in/sepro-lama',
      email: 'sepro.lama@oscorm.com'
    },
    {
      id: '2',
      name: 'Rahul Sharma',
      role: 'Full Stack Developer',
      category: 'developers',
      experience: 2,
      field: 'Web & Mobile Development',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'React Native', 'AWS'],
      imageUrl: '/images/team/priya-patel.svg',
      bio: 'Talented full stack developer with 2 years of experience in building scalable web and mobile applications. Passionate about clean code and modern development practices.',
      linkedin: 'https://linkedin.com/in/rahul-sharma',
      email: 'rahul.sharma@oscorm.com'
    },
    {
      id: '3',
      name: 'Dusyant Kumar',
      role: 'Senior PHP & WordPress Developer',
      category: 'developers',
      experience: 6,
      field: 'PHP & WordPress Development',
      skills: ['PHP', 'WordPress', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'CSS', 'HTML'],
      imageUrl: '/images/team/amit-kumar.svg',
      bio: 'Experienced senior PHP and WordPress developer with 6 years of expertise in building custom websites, themes, and plugins. Specialized in creating scalable and secure web solutions.',
      linkedin: 'https://linkedin.com/in/dusyant-kumar',
      email: 'dusyant.kumar@oscorm.com'
    },

    // SEO Specialists
    {
      id: '4',
      name: 'Poonam',
      role: 'WordPress Developer',
      category: 'developers',
      experience: 2,
      field: 'WordPress Development',
      skills: ['WordPress', 'PHP', 'Elementor', 'WooCommerce', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
      imageUrl: '/images/team/neha-gupta.svg',
      bio: 'Skilled WordPress developer with 2 years of experience in building custom websites, themes, and plugins. Passionate about creating user-friendly and responsive WordPress solutions.',
      linkedin: 'https://linkedin.com/in/poonam',
      email: 'poonam@oscorm.com'
    },
    {
      id: '5',
      name: 'Sandeep',
      role: 'SEO Professional',
      category: 'seo-specialists',
      experience: 3,
      field: 'Search Engine Optimization',
      skills: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Technical SEO', 'Content Strategy', 'Local SEO'],
      imageUrl: '/images/team/rohit-singh.svg',
      bio: 'Dedicated SEO professional with 3 years of experience in improving search rankings and driving organic traffic. Skilled in both technical and content SEO strategies.',
      linkedin: 'https://linkedin.com/in/sandeep',
      email: 'sandeep@oscorm.com'
    },

    // Digital Marketing Experts
    {
      id: '6',
      name: 'Rahul',
      role: 'Digital Marketing Professional',
      category: 'digital-marketing',
      experience: 4,
      field: 'Digital Marketing',
      skills: ['Google Ads', 'Facebook Ads', 'Content Marketing', 'Email Campaigns', 'Marketing Automation', 'Analytics'],
      imageUrl: '/images/team/kavita-verma.svg',
      bio: 'Creative digital marketing professional with 4 years of experience in developing and executing successful marketing campaigns across various digital platforms.',
      linkedin: 'https://linkedin.com/in/rahul',
      email: 'rahul@oscorm.com'
    },
    {
      id: '7',
      name: 'Priya',
      role: 'Social Media & Marketing Professional',
      category: 'digital-marketing',
      experience: 1,
      field: 'Social Media Marketing',
      skills: ['Instagram Marketing', 'LinkedIn Strategy', 'Content Creation', 'Community Management', 'Facebook Ads', 'Twitter Marketing'],
      imageUrl: '/images/team/arjun-mehta.svg',
      bio: 'Enthusiastic social media and marketing professional with 1 year of experience in creating engaging content and managing social media campaigns.',
      linkedin: 'https://linkedin.com/in/priya',
      email: 'priya@oscorm.com'
    },

    // IT Professionals
    {
      id: '8',
      name: 'Hitesh',
      role: 'Business Development Associate',
      category: 'sales-executives',
      experience: 1,
      field: 'Business Development',
      skills: ['Lead Generation', 'Client Management', 'Market Research', 'Presentation Skills', 'CRM Management', 'Sales Strategy'],
      imageUrl: '/images/team/vikram-malhotra.svg',
      bio: 'Motivated Business Development Associate with 1 year of experience in identifying new opportunities and building client relationships.',
      linkedin: 'https://linkedin.com/in/hitesh',
      email: 'hitesh@oscorm.com'
    },
    {
      id: '9',
      name: 'Sneha Reddy',
      role: 'DevOps Engineer',
      category: 'it-professionals',
      experience: 6,
      field: 'DevOps & Automation',
      skills: ['CI/CD Pipelines', 'Jenkins', 'Docker', 'Kubernetes', 'Monitoring Tools', 'Infrastructure as Code'],
      imageUrl: '/images/team/sneha-reddy.svg',
      bio: 'DevOps specialist focused on automating deployment processes, improving system reliability, and implementing best practices for continuous delivery.',
      linkedin: 'https://linkedin.com/in/sneha-reddy',
      email: 'sneha.reddy@oscorm.com'
    },

    // Sales Executives
    {
      id: '10',
      name: 'Rajat Khurana',
      role: 'Sales Director',
      category: 'sales-executives',
      experience: 10,
      field: 'Business Development & Sales',
      skills: ['Enterprise Sales', 'Client Relations', 'Negotiation', 'Sales Strategy', 'Account Management'],
      imageUrl: '/images/team/rajat-khurana.svg',
      bio: 'Dynamic sales leader with proven track record of building lasting client relationships and driving revenue growth through strategic partnerships.',
      linkedin: 'https://linkedin.com/in/rajat-khurana',
      email: 'rajat.khurana@oscorm.com'
    },
    {
      id: '11',
      name: 'Anjali Desai',
      role: 'Business Development Manager',
      category: 'sales-executives',
      experience: 7,
      field: 'Client Acquisition & Partnerships',
      skills: ['Lead Generation', 'Client Management', 'Market Research', 'Presentation Skills', 'CRM Management'],
      imageUrl: '/images/team/anjali-desai.svg',
      bio: 'Strategic business development expert focused on identifying new opportunities, nurturing leads, and expanding our client base through targeted outreach.',
      linkedin: 'https://linkedin.com/in/anjali-desai',
      email: 'anjali.desai@oscorm.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Members', count: teamMembers.length },
    { id: 'developers', name: 'Developers', count: teamMembers.filter(m => m.category === 'developers').length },
    { id: 'seo-specialists', name: 'SEO Specialists', count: teamMembers.filter(m => m.category === 'seo-specialists').length },
    { id: 'digital-marketing', name: 'Digital Marketing', count: teamMembers.filter(m => m.category === 'digital-marketing').length },
    { id: 'it-professionals', name: 'IT Professionals', count: teamMembers.filter(m => m.category === 'it-professionals').length },
    { id: 'sales-executives', name: 'Sales Executives', count: teamMembers.filter(m => m.category === 'sales-executives').length }
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(teamMembers.filter(member => member.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1020] via-[#0F4082] to-[#2f57c4] pt-24 pb-12 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#00D4AA] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2f57c4] rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              Meet Our Amazing Team
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#2f57c4] relative">
              Expert Team
              <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4AA" />
                    <stop offset="100%" stopColor="#2f57c4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Talented professionals dedicated to delivering exceptional digital solutions and driving your business success through innovation and expertise
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/90 mb-8">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00D4AA] to-[#2f57c4] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">{teamMembers.length}+ </div>
                <div className="text-sm opacity-80">Professionals</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">5+</div>
                <div className="text-sm opacity-80">Departments</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00D4AA] to-[#2f57c4] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('team-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-[#00D4AA] to-[#2f57c4] text-white font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Team
            </button>
            <a
              href="/contact-us"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0F4082] transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 px-4 pt-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Browse by Department</p>
            <p className="text-sm md:text-base text-gray-700 mt-1">Filter to quickly find specialists by function and expertise.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section id="team-grid" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {categories.find((c) => c.id === selectedCategory)?.name ?? 'All Members'}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary team dedicated to delivering reliable execution, measurable growth, and long-term value—across engineering, marketing, SEO, infrastructure, and partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container - Fixed Height */}
                <div className="relative w-full h-64 bg-gray-100 rounded-t-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.category === 'developers' ? 'bg-blue-500 text-white' :
                      member.category === 'seo-specialists' ? 'bg-green-500 text-white' :
                      member.category === 'digital-marketing' ? 'bg-purple-500 text-white' :
                      member.category === 'it-professionals' ? 'bg-orange-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {member.category === 'developers' ? 'DEV' :
                       member.category === 'seo-specialists' ? 'SEO' :
                       member.category === 'digital-marketing' ? 'MKTG' :
                       member.category === 'it-professionals' ? 'IT' : 'SALES'}
                    </span>
                  </div>
                </div>

                {/* Member Info - Flexible Content Area */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#2f57c4] transition-colors text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#2f57c4] mb-4 text-center">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#2f57c4] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{member.experience} years experience</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#2f57c4] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                      <span className="text-center">{member.field}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
                    {member.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Bio - Flexible Height */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1 text-center">
                    {member.bio}
                  </p>

                  {/* Contact Icons - Always at Bottom */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100 mt-auto justify-center">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="group p-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                        title="Email"
                      >
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{teamMembers.length}+</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Amazing Team?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals who are passionate about technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="px-8 py-4 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View Open Positions
            </a>
            <a
              href="/contact-us"
              className="px-8 py-4 border-2 border-[#2f57c4] text-[#2f57c4] font-semibold rounded-lg hover:bg-[#2f57c4] hover:text-white transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
