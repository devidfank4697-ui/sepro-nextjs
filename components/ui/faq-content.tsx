import UniversalFAQ from './universal-faq'

// Home Page FAQ Content
export function HomeFAQ() {
  const faqItems = [
    {
      question: "How quickly can I deploy a team?",
      answer: "Most teams are deployed within 48 hours. This includes talent matching, interviews, tools setup, and project kickoff. For complex requirements, setup may take up to 72 hours."
    },
    {
      question: "What makes Oscorm different from other platforms?",
      answer: "Oscorm combines pre-vetted talent with AI-powered oversight, dedicated project management, and multi-layer quality assurance. We provide complete transparency through real-time dashboards and performance analytics."
    },
    {
      question: "How are experts vetted and matched?",
      answer: "Experts undergo a 5-stage vetting process including technical assessments, portfolio reviews, communication evaluations, and background checks. Our AI matching algorithm considers project requirements, skills, experience, and cultural fit."
    },
    {
      question: "What's included in the AI oversight?",
      answer: "Our AI oversight includes real-time performance tracking, automated quality checks, productivity analytics, predictive project timelines, and intelligent task prioritization. You get detailed reports and insights through our dashboard."
    },
    {
      question: "Can I scale or change my team as needed?",
      answer: "Yes, you can scale your team up or down with 30 days' notice. We handle all transitions smoothly, ensuring project continuity. Additional resources can typically be onboarded within 48 hours."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about our services"
    />
  )
}

// Why Oscorm FAQ Content
export function WhyOscormFAQ() {
  const faqItems = [
    {
      question: "Why should I choose Oscorm over other agencies?",
      answer: "Oscorm offers a unique combination of technical expertise, competitive pricing, and personalized service. With 5+ years of experience and 500+ successful projects, we deliver results that exceed expectations."
    },
    {
      question: "What makes Oscorm different from competitors?",
      answer: "We stand out through transparent communication, agile development process, and commitment to quality. Unlike others, we provide dedicated project managers and regular progress updates."
    },
    {
      question: "How experienced is the Oscorm team?",
      answer: "Our team consists of 50+ skilled professionals with average experience of 5+ years. Team members are certified in various technologies and continuously update their skills."
    },
    {
      question: "What industries has Oscorm worked with?",
      answer: "We have diverse experience across healthcare, finance, e-commerce, education, logistics, real estate, and manufacturing. This cross-industry expertise allows us to bring best practices."
    },
    {
      question: "Does Oscorm provide ongoing support?",
      answer: "Yes, we believe in long-term partnerships. We offer comprehensive post-launch support including maintenance, updates, security patches, and 24/7 technical support."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="FREQUENTLY ASKED QUESTIONS"
      subtitle="Find answers to common questions about why choose oscorm"
    />
  )
}

// How It Works FAQ Content
export function HowItWorksFAQ() {
  const faqItems = [
    {
      question: "How does the Oscorm project process work?",
      answer: "Our process follows 5 key stages: 1) Discovery & Planning, 2) Design, 3) Development, 4) Testing, 5) Deployment & Support. Each stage involves client collaboration."
    },
    {
      question: "How do you communicate with clients during projects?",
      answer: "We maintain transparent communication through weekly progress calls, daily updates via Slack/WhatsApp, email reports, and a client portal for tracking progress."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary: Simple websites (2-4 weeks), Web applications (2-4 months), Mobile apps (3-6 months), Enterprise solutions (6-12 months)."
    },
    {
      question: "How do you handle changes during development?",
      answer: "We follow an agile methodology that accommodates changes. Changes are documented, prioritized, and integrated into development sprints with minimal disruption."
    },
    {
      question: "What tools and methodologies do you use?",
      answer: "We use industry-standard tools like Jira, GitHub, Slack, and follow methodologies like Agile, Scrum, and DevOps practices to ensure efficient project delivery."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="How It Works"
      subtitle="Find answers to common questions about how our process works"
    />
  )
}

// Portfolio FAQ Content
export function PortfolioFAQ() {
  const faqItems = [
    {
      question: "What types of projects are in your portfolio?",
      answer: "Our portfolio includes web applications, mobile apps, enterprise software, AI solutions, e-commerce platforms, and digital transformation projects across various industries."
    },
    {
      question: "Can I see case studies with detailed results?",
      answer: "Yes, each portfolio item includes comprehensive case studies with project objectives, challenges, solutions, technologies used, and measurable outcomes."
    },
    {
      question: "Do you have experience in my industry?",
      answer: "We have worked across 15+ industries including healthcare, finance, retail, education, logistics, manufacturing, and technology startups."
    },
    {
      question: "Can you provide client references?",
      answer: "Absolutely. We can connect you with previous clients who can speak about their experience working with us and the results achieved."
    },
    {
      question: "How do you measure project success?",
      answer: "We track key metrics including user adoption, performance improvements, ROI, client satisfaction scores, and achievement of specific business objectives."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Portfolio Questions"
      subtitle="Find answers to common questions about our portfolio, projects, and services"
    />
  )
}

// Contact Us FAQ Content
export function ContactUsFAQ() {
  const faqItems = [
    {
      question: "How can I get in touch with your team?",
      answer: "You can reach us through our contact form, email us at hello@oscorm.com, call us at +1 (555) 123-4567, or use the live chat on our website."
    },
    {
      question: "What's the best way to discuss my project requirements?",
      answer: "Schedule a free consultation call where we can discuss your project in detail. This helps us understand your needs and provide accurate recommendations."
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 2-4 hours during business hours. For urgent matters, we offer priority response options."
    },
    {
      question: "Do you offer in-person meetings?",
      answer: "Yes, we offer both virtual and in-person meetings depending on your location and project requirements. We also conduct site visits when necessary."
    },
    {
      question: "What information should I prepare for the first consultation?",
      answer: "Prepare your project goals, timeline, budget range, technical requirements, and any specific challenges you're facing. The more details, the better we can assist you."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Contact FAQ"
      subtitle="Find answers to common questions about our services and how we can help you"
    />
  )
}

// Case Studies FAQ Content
export function CaseStudiesFAQ() {
  const faqItems = [
    {
      question: "What industries do your case studies cover?",
      answer: "Our case studies span healthcare, finance, e-commerce, education, logistics, manufacturing, and technology sectors, showcasing our diverse expertise."
    },
    {
      question: "How do you measure success in case studies?",
      answer: "We track metrics like ROI, user engagement, cost savings, efficiency improvements, and specific KPIs relevant to each client's business objectives."
    },
    {
      question: "Can you customize solutions similar to your case studies?",
      answer: "Absolutely. While we adapt proven strategies from past successes, we always customize solutions to meet your unique business requirements and challenges."
    },
    {
      question: "Do you have case studies for businesses of my size?",
      answer: "We work with startups, SMEs, and enterprise clients. Our case studies include projects ranging from $10K to $500K+ budgets."
    },
    {
      question: "How recent are your case studies?",
      answer: "Our case studies include projects from the past 3 years, with many from the last 12 months, showcasing our current capabilities and technologies."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Case Studies FAQ"
      subtitle="Find answers to common questions about our case studies and project success stories"
    />
  )
}

// Careers FAQ Content
export function CareersFAQ() {
  const faqItems = [
    {
      question: "What positions are currently available at Oscorm?",
      answer: "We regularly hire for roles in software development, design, project management, marketing, and sales. Check our careers page for current openings."
    },
    {
      question: "What's the company culture like at Oscorm?",
      answer: "We foster a culture of innovation, collaboration, and continuous learning. We value work-life balance, professional growth, and diversity in our team."
    },
    {
      question: "What benefits do you offer employees?",
      answer: "We offer competitive salaries, health insurance, flexible work arrangements, professional development budgets, and equity opportunities for key roles."
    },
    {
      question: "How does the interview process work?",
      answer: "Our process includes an initial screening, technical assessment, cultural fit interview, and a final discussion with the team lead. Total process takes 1-2 weeks."
    },
    {
      question: "Do you offer remote work opportunities?",
      answer: "Yes, we offer fully remote and hybrid work options depending on the role. We have team members working from various locations globally."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Careers FAQ"
      subtitle="Find answers to common questions about careers at oscorm"
    />
  )
}

// About Us FAQ Content
export function AboutUsFAQ() {
  const faqItems = [
    {
      question: "When was Oscorm founded?",
      answer: "Oscorm was founded in 2009 with a vision to revolutionize how businesses access and manage remote talent through technology."
    },
    {
      question: "What is Oscorm's mission?",
      answer: "Our mission is to bridge the talent gap by providing businesses with access to pre-vetted experts while offering transparent, AI-powered management solutions."
    },
    {
      question: "How many clients have you served?",
      answer: "We've successfully served over 500 clients across 25+ countries, delivering more than 1000 projects with a 95% client satisfaction rate."
    },
    {
      question: "What are your core values?",
      answer: "Our core values include transparency, quality, innovation, client success, and continuous improvement. These guide everything we do."
    },
    {
      question: "How do you ensure quality across all projects?",
      answer: "We maintain quality through rigorous vetting, AI-powered monitoring, dedicated project managers, multi-layer QA processes, and regular client feedback loops."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="About Us FAQ"
      subtitle="Learn more about Oscorm and our commitment to excellence"
    />
  )
}

// Pricing FAQ Content
export function PricingFAQ() {
  const faqItems = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our plans. You only pay for the monthly subscription."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for enterprise accounts."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day money-back guarantee on all plans. No questions asked."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. No long-term commitments or cancellation fees."
    }
  ]

  return (
    <UniversalFAQ 
      items={faqItems}
      title="Pricing FAQ"
      subtitle="Common questions about our pricing plans"
    />
  )
}
