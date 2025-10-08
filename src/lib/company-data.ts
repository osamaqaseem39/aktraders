// A.K. Traders Company Data
// This file contains all company-related information for easy management and updates

export const companyInfo = {
  name: "A.K. Traders®",
  fullName: "A.K. Traders (Regd.)",
  tagline: "Freight Forwarding & Customs Clearance",
  established: "1974",
  description: "Established in 1974 in Quetta, Pakistan, A.K. Traders (Regd.) has grown from a local customs clearance agent into one of Pakistan's most respected and experienced freight forwarding and logistics service providers. With over five decades of uninterrupted service, we provide comprehensive logistics solutions as a one-window partner, connecting Pakistan with Afghanistan, Iran, and Central Asian Republics.",
  
  // Contact Information
  contact: {
    phone: {
      primary: "+92-81-2824023",
      secondary: "+92-81-2824149",
      tertiary: "+92-81-2824164",
      fax: "+92-81-2845343"
    },
    email: {
      primary: "info@aktraders.pk",
      secondary: "support@aktraders.pk"
    },
    whatsapp: "+92-81-2824023"
  },

  // Office Locations
  offices: [
    {
      id: "quetta",
      name: "Head Office – Quetta",
      type: "Head Office",
      address: {
        street: "41 – 2nd Floor, Ahmed Complex",
        area: "M.A. Jinnah Road",
        city: "Quetta",
        country: "Pakistan"
      },
      coordinates: {
        lat: 30.1798,
        lng: 66.9750
      },
      phone: "+92-81-2824023 | +92-81-2824149 | +92-81-2824164",
      fax: "+92-81-2845343",
      email: "info@aktraders.pk",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      services: ["Customs Clearance", "Freight Forwarding", "Afghan Transit Trade", "CIS Transportation"],
      facilities: ["Border Access", "Customs House", "Warehousing", "Project Logistics"]
    },
    {
      id: "karachi",
      name: "Karachi Operations",
      type: "Operations Center",
      address: {
        street: "Port Operations",
        area: "Karachi Port & Port Qasim",
        city: "Karachi",
        country: "Pakistan"
      },
      coordinates: {
        lat: 24.8607,
        lng: 67.0011
      },
      phone: "+92-81-2824023",
      fax: "",
      email: "info@aktraders.pk",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      services: ["Sea Freight", "Port Operations", "Container Handling", "Warehousing"],
      facilities: ["Port Access", "Container Freight Station", "Bonded Warehousing"]
    },
    {
      id: "chaman",
      name: "Chaman Border Office",
      type: "Border Operations",
      address: {
        street: "Chaman Border",
        area: "Pakistan-Afghanistan Border",
        city: "Chaman",
        country: "Pakistan"
      },
      coordinates: {
        lat: 30.9176,
        lng: 66.4512
      },
      phone: "+92-81-2824023",
      fax: "",
      email: "info@aktraders.pk",
      hours: "Monday - Saturday: 8:00 AM - 5:00 PM",
      services: ["Border Clearance", "Afghan Transit", "Documentation", "Cargo Verification"],
      facilities: ["Border Crossing", "Customs Liaison", "Transit Documentation"]
    },
    {
      id: "peshawar",
      name: "Peshawar Operations",
      type: "Regional Office",
      address: {
        street: "Regional Operations",
        area: "Torkham Border Access",
        city: "Peshawar",
        country: "Pakistan"
      },
      coordinates: {
        lat: 34.0151,
        lng: 71.5249
      },
      phone: "+92-81-2824023",
      fax: "",
      email: "info@aktraders.pk",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      services: ["Torkham Operations", "Afghan Transit", "Regional Logistics"],
      facilities: ["Border Access", "Transit Facilities"]
    },
    {
      id: "kabul",
      name: "Kabul Office",
      type: "International Office",
      address: {
        street: "Afghanistan Operations",
        area: "Kabul",
        city: "Kabul",
        country: "Afghanistan"
      },
      coordinates: {
        lat: 34.5553,
        lng: 69.2075
      },
      phone: "+92-81-2824023",
      fax: "",
      email: "info@aktraders.pk",
      hours: "Sunday - Thursday: 9:00 AM - 5:00 PM",
      services: ["On-ground Support", "Proof of Delivery", "Client Liaison", "Documentation"],
      facilities: ["Local Presence", "Delivery Confirmation", "Client Support"]
    }
  ],

  // Company Statistics
  stats: [
    { number: "50+", label: "Years Experience", icon: "Award" },
    { number: "FIATA", label: "Member Since 1982", icon: "Globe" },
    { number: "5", label: "Office Locations", icon: "MapPin" },
    { number: "24/7", label: "Support Available", icon: "Clock" }
  ],

  // Core Services
  services: [
    {
      id: "freight-forwarding",
      name: "Freight Forwarding & Global Transportation",
      shortName: "Freight Forwarding",
      description: "Door-to-door solutions with multimodal transport combinations (Sea-Road, Sea-Rail, Rail-Road) and expert customs documentation.",
      icon: "Ship",
      iconImage: "/window.svg",
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
      features: ["Door-to-Door Solutions", "Multimodal Transport", "Customs Documentation", "Cargo Tracking"],
      coverage: ["Karachi Port", "Port Qasim", "Global Ports", "CIS Countries via Iran"]
    },
    {
      id: "afghan-transit-trade",
      name: "Afghan Transit Trade (ATT)",
      shortName: "Afghan Transit",
      description: "Pioneer in Afghan Transit Trade with one-stop solutions via Chaman, Torkham, and Pakistan-Iran-Afghanistan corridors.",
      icon: "Globe",
      iconImage: "/globe.svg",
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
      features: ["Multiple Border Routes", "Warehousing Support", "Government Liaison", "Proof of Delivery"],
      coverage: ["Chaman Border", "Torkham Border", "Taftan-Islam Qala", "Nimruz Border"]
    },
    {
      id: "overland-transportation",
      name: "Overland Transportation",
      shortName: "Overland Transport",
      description: "Domestic and regional overland transport with bonded and un-bonded cargo handling across Pakistan and neighboring countries.",
      icon: "Truck",
      iconImage: "/vercel.svg",
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-500",
      features: ["Bonded Transport", "Cross-border Trade", "Reliable Fleet", "Monitoring Systems"],
      coverage: ["National Highways", "Border Crossings", "Ports to Inland", "Regional Routes"]
    },
    {
      id: "project-logistics",
      name: "Project Logistics",
      shortName: "Project Cargo",
      description: "Specialized handling of heavy-lift, oversized cargo, and project shipments with end-to-end management and government coordination.",
      icon: "Package",
      iconImage: "/next.svg",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500",
      features: ["Heavy Lift Cargo", "Route Surveys", "Government NOCs", "Project Management"],
      coverage: ["Energy Projects", "Infrastructure", "Oil & Gas", "Industrial Equipment"]
    },
    {
      id: "warehousing-cfs",
      name: "Warehousing & Container Freight Station",
      shortName: "Warehousing",
      description: "Secure storage, cargo verification, segregation, and container stuffing with advanced inventory management systems.",
      icon: "Warehouse",
      iconImage: "/file.svg",
      color: "from-red-500 to-red-600",
      iconColor: "text-red-500",
      features: ["Cargo Verification", "Secure Storage", "Container Stuffing", "Inventory Management"],
      coverage: ["Strategic Locations", "Transit Hubs", "Afghanistan Links", "Port Facilities"]
    },
    {
      id: "customs-clearance",
      name: "Customs Clearance",
      shortName: "Customs Clearance",
      description: "Expert customs clearance with 31+ years experience, one-window service, and strong credibility with customs authorities.",
      icon: "Shield",
      iconImage: "/file.svg",
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-500",
      features: ["One-Window Clearance", "Expert Documentation", "Problem-Solving", "Authority Relations"],
      coverage: ["All Ports", "Airports", "Dry Ports", "Border Crossings"]
    },
    {
      id: "duty-drawback",
      name: "Duty Drawback Services",
      shortName: "Duty Drawback",
      description: "Specialized Duty Drawback Division (DDBD) providing advisory, documentation, and 24/7 online claim tracking for exporters.",
      icon: "Calculator",
      iconImage: "/file.svg",
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-500",
      features: ["Expert Advisory", "Accurate Documentation", "Online Tracking", "Efficient Processing"],
      coverage: ["All Export Categories", "Textile Industry", "Manufacturing", "General Exports"]
    },
    {
      id: "cis-transportation",
      name: "CIS Transportation",
      shortName: "CIS Transport",
      description: "Pioneer in multimodal freight forwarding to CIS countries since 1993, with expertise in long-distance coordination via Iran.",
      icon: "MapPin",
      iconImage: "/globe.svg",
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-500",
      features: ["Multimodal Solutions", "Long-Distance Management", "CIS Expertise", "Via Iran Routes"],
      coverage: ["Turkmenistan", "Uzbekistan", "Tajikistan", "Kazakhstan"]
    }
  ],

  // Industries Served
  industries: [
    {
      id: "government",
      name: "Government & Public Sector",
      description: "Specialized support for government entities, ministries, customs departments, and state-owned enterprises.",
      icon: "Building",
      color: "bg-blue-500",
      services: ["Government Logistics", "Official Consignments", "Equipment Transportation", "Project Materials"],
      challenges: ["Compliance requirements", "Official procedures", "Documentation standards", "Security protocols"],
      solutions: ["Government liaison expertise", "Regulatory compliance", "Secure handling", "Official documentation"]
    },
    {
      id: "aid-organizations",
      name: "International Aid & Relief Organizations", 
      description: "Specialized support for humanitarian agencies delivering essential supplies to Afghanistan and remote regions.",
      icon: "Users",
      color: "bg-red-500",
      services: ["Humanitarian Logistics", "Emergency Relief", "Medical Supplies", "Food Distribution"],
      challenges: ["Time-sensitive operations", "Remote access", "Security concerns", "Complex clearance"],
      solutions: ["Priority handling", "Secure routing", "Emergency protocols", "Expedited clearance"]
    },
    {
      id: "oil-gas-energy",
      name: "Oil, Gas & Energy",
      description: "Project logistics for heavy equipment, drilling machinery, and energy infrastructure with specialized handling.",
      icon: "Factory",
      color: "bg-orange-500",
      services: ["Heavy Equipment Transport", "Project Cargo", "Energy Infrastructure", "Drilling Equipment"],
      challenges: ["Oversized cargo", "Project timelines", "Safety requirements", "Technical specifications"],
      solutions: ["Specialized equipment", "Project management", "Safety protocols", "Technical expertise"]
    },
    {
      id: "manufacturing-industrial",
      name: "Manufacturing & Industrial Exporters",
      description: "Comprehensive logistics for Pakistan's textiles, cement, marble, chemicals, and consumer goods industries.",
      icon: "Package",
      color: "bg-green-500",
      services: ["Export Support", "Duty Drawback", "Supply Chain", "Industrial Logistics"],
      challenges: ["Export compliance", "Duty recovery", "Supply chain optimization", "Quality preservation"],
      solutions: ["Export expertise", "Duty drawback services", "Efficient logistics", "Quality control"]
    },
    {
      id: "private-importers",
      name: "Private Importers & Traders",
      description: "One-window solutions for import of raw materials, machinery, electronics, and consumer products.",
      icon: "Globe",
      color: "bg-purple-500",
      services: ["Import Solutions", "Customs Clearance", "Warehousing", "Distribution"],
      challenges: ["Import procedures", "Documentation", "Customs clearance", "Storage needs"],
      solutions: ["One-window service", "Expert clearance", "Secure warehousing", "Distribution network"]
    },
    {
      id: "multinational-companies",
      name: "Multinational Corporations",
      description: "Trusted logistics partner for international companies requiring secure, efficient, and scalable solutions.",
      icon: "TrendingUp",
      color: "bg-indigo-500",
      services: ["Corporate Logistics", "Supply Chain Management", "International Operations", "Scalable Solutions"],
      challenges: ["Scale requirements", "International standards", "Reliability needs", "Cost optimization"],
      solutions: ["Scalable operations", "International expertise", "Proven reliability", "Cost-effective solutions"]
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      id: "experience",
      title: "50 Years of Proven Experience",
      description: "Since 1974, we have successfully navigated evolving trade environments, making us one of the most experienced logistics providers in Pakistan.",
      icon: "Award"
    },
    {
      id: "regional-expertise",
      title: "Regional Expertise",
      description: "Unmatched knowledge of Afghan transit trade and CIS logistics, with a track record dating back to 1993.",
      icon: "Globe"
    },
    {
      id: "one-window",
      title: "One-Window Solutions",
      description: "Integration of freight forwarding, customs clearance, warehousing, project logistics, and duty drawback consultancy under a single platform.",
      icon: "Target"
    },
    {
      id: "credibility",
      title: "Credibility & Compliance",
      description: "FIATA member since 1982, with strong reputation among customs and border authorities ensuring smooth clearance processes.",
      icon: "Shield"
    },
    {
      id: "network",
      title: "Strong Network & Presence",
      description: "Offices in Quetta, Karachi, Chaman, Peshawar, and Kabul, with nationwide coverage through associates.",
      icon: "Users"
    },
    {
      id: "reliability",
      title: "Trust & Reliability",
      description: "Proven ability to operate in high-risk environments (Afghanistan, CIS transit routes) without compromising service quality.",
      icon: "Clock"
    }
  ],

  // Company Values
  values: [
    {
      id: "integrity",
      title: "Integrity",
      description: "We operate with transparency, honesty, and accountability. Every shipment, document, and client engagement is handled with the highest ethical standards.",
      icon: "CheckCircle"
    },
    {
      id: "reliability",
      title: "Reliability",
      description: "Clients trust us because we deliver on commitments, even in high-risk or challenging environments such as Afghan transit and CIS trade.",
      icon: "Clock"
    },
    {
      id: "customer-centricity",
      title: "Customer-Centricity",
      description: "Every service is designed with the client's needs at its core. We customize solutions to suit diverse industries — from humanitarian aid to heavy industry.",
      icon: "Users"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We embrace new technologies, multimodal strategies, and smarter solutions to continuously improve service efficiency and adapt to changing market dynamics.",
      icon: "TrendingUp"
    },
    {
      id: "excellence",
      title: "Commitment to Excellence",
      description: "We don't just move cargo — we build trust. Our people, processes, and systems are aligned to ensure excellence at every stage of the supply chain.",
      icon: "Target"
    },
    {
      id: "regional-expertise",
      title: "Regional Expertise",
      description: "With decades of experience in cross-border trade, especially in Afghanistan and CIS countries, we bring unmatched local know-how combined with a global outlook.",
      icon: "Globe"
    }
  ],

  // Mission, Vision, Goals
  mission: {
    title: "Our Mission",
    description: "To deliver end-to-end, cost-effective, and reliable logistics solutions across multiple industries and regions. To provide one-window integrated services, combining freight forwarding, customs clearance, warehousing, project logistics, and duty drawback consultancy. To continuously enhance service quality by adopting modern technologies, developing human capital, and maintaining strong compliance with local and international standards."
  },
  vision: {
    title: "Our Vision",
    description: "To be recognized as the leading freight forwarding and logistics partner in Pakistan and the region, renowned for reliability, innovation, and integrity, while acting as a vital connector between Pakistan, Afghanistan, Iran, Central Asia, and international markets. Our vision is to position A.K. Traders as a strategic enabler of regional trade and economic growth."
  },
  goals: {
    title: "Our Goals",
    description: "To foster long-term partnerships with clients through personalized service, operational excellence, and complete transparency. To contribute actively to regional economic integration by facilitating smooth and secure trade corridors. To strengthen Pakistan's role as a logistics hub for South Asia, Central Asia, and the Middle East."
  },

  // Company Timeline
  timeline: [
    { year: "1974", title: "Company Founded", description: "A.K. Traders established in Quetta, Pakistan, focused on customs clearance and cargo forwarding" },
    { year: "1982", title: "FIATA Membership", description: "Became member of FIATA, achieving international recognition as a freight forwarding service provider" },
    { year: "1993", title: "CIS Pioneer", description: "Became one of the first Pakistani companies to pioneer multimodal transit services to CIS countries via Iran" },
    { year: "2000s", title: "Service Diversification", description: "Expanded into project logistics, Afghan transit trade, warehousing, and duty drawback consultancy" },
    { year: "2003", title: "Industry Recognition", description: "Joined Federation of International Transport Companies of Pakistan" },
    { year: "2010s", title: "Kabul Operations", description: "Established full-fledged office in Kabul, Afghanistan for on-ground support" },
    { year: "Present", title: "Regional Leader", description: "Recognized as leading logistics partner with 50+ years of continuous operations" }
  ],

  // Team Members
  team: [
    {
      id: "ahmed-khan",
      name: "Ahmed Khan",
      position: "Managing Director",
      experience: "30+ Years",
      description: "Leading the company with decades of logistics expertise.",
      image: "/api/placeholder/300/300"
    },
    {
      id: "sarah-ahmed",
      name: "Sarah Ahmed",
      position: "Operations Director",
      experience: "20+ Years",
      description: "Overseeing all operational aspects and service delivery.",
      image: "/api/placeholder/300/300"
    },
    {
      id: "muhammad-ali",
      name: "Muhammad Ali",
      position: "Customs Manager",
      experience: "15+ Years",
      description: "Expert in customs clearance and regulatory compliance.",
      image: "/api/placeholder/300/300"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      name: "Ahmed Hassan",
      company: "Hassan Textiles Ltd.",
      position: "Managing Director",
      industry: "Textile Manufacturing",
      rating: 5,
      text: "A.K. Traders has been our logistics partner for over 10 years. Their expertise in customs clearance and freight forwarding has helped us expand our exports to multiple countries. The team is professional, reliable, and always delivers on time.",
      image: "/api/placeholder/80/80",
      location: "Lahore, Pakistan"
    },
    {
      id: 2,
      name: "Sarah Khan",
      company: "Khan Construction Group",
      position: "Operations Manager",
      industry: "Construction",
      rating: 5,
      text: "We needed to import heavy construction equipment from Germany. A.K. Traders handled everything from customs clearance to final delivery at our site. Their project cargo expertise saved us significant time and costs.",
      image: "/api/placeholder/80/80",
      location: "Karachi, Pakistan"
    },
    {
      id: 3,
      name: "Muhammad Ali",
      company: "Ali Trading Co.",
      position: "Owner",
      industry: "General Trading",
      rating: 5,
      text: "The transit trade services to Afghanistan have been exceptional. A.K. Traders understands the complexities of regional trade and has made our cross-border operations smooth and efficient.",
      image: "/api/placeholder/80/80",
      location: "Quetta, Pakistan"
    },
    {
      id: 4,
      name: "Dr. Fatima Ahmed",
      company: "Health Aid International",
      position: "Country Director",
      industry: "NGO",
      rating: 5,
      text: "When we needed to transport medical supplies to remote areas, A.K. Traders provided reliable logistics support. Their understanding of humanitarian logistics and quick response times were crucial for our mission.",
      image: "/api/placeholder/80/80",
      location: "Islamabad, Pakistan"
    },
    {
      id: 5,
      name: "Robert Johnson",
      company: "Global Manufacturing Inc.",
      position: "Supply Chain Director",
      industry: "International Manufacturing",
      rating: 5,
      text: "As an international company setting up operations in Pakistan, we needed a reliable logistics partner. A.K. Traders provided excellent customs clearance services and helped us navigate local regulations efficiently.",
      image: "/api/placeholder/80/80",
      location: "Dubai, UAE"
    },
    {
      id: 6,
      name: "Aisha Malik",
      company: "Malik Electronics",
      position: "Import Manager",
      industry: "Electronics",
      rating: 5,
      text: "Their air freight services are outstanding. We regularly import electronic components and A.K. Traders ensures fast, secure delivery every time. The tracking system keeps us informed throughout the process.",
      image: "/api/placeholder/80/80",
      location: "Lahore, Pakistan"
    },
    {
      id: 7,
      name: "Hassan Shah",
      company: "Shah Agricultural Co.",
      position: "Export Manager",
      industry: "Agriculture",
      rating: 5,
      text: "Exporting agricultural products requires special handling and documentation. A.K. Traders expertise in perishable goods logistics has been invaluable for our business growth.",
      image: "/api/placeholder/80/80",
      location: "Multan, Pakistan"
    },
    {
      id: 8,
      name: "Lisa Chen",
      company: "Chen Trading Ltd.",
      position: "Business Development Manager",
      industry: "International Trade",
      rating: 5,
      text: "We work with multiple logistics providers, but A.K. Traders stands out for their professionalism and reliability. Their network coverage and competitive rates make them our preferred partner.",
      image: "/api/placeholder/80/80",
      location: "Hong Kong"
    }
  ],

  // Network Coverage
  networkLocations: [
    {
      country: "Pakistan",
      type: "Primary Market",
      offices: [
        {
          city: "Quetta",
          type: "Head Office",
          address: "41 – 2nd Floor, Ahmed Complex, M.A. Jinnah Road",
          services: ["Customs Clearance", "Freight Forwarding", "Afghan Transit Trade", "CIS Transportation"],
          facilities: ["Border Access", "Customs House", "Warehousing", "Project Logistics"]
        },
        {
          city: "Karachi",
          type: "Operations Center",
          address: "Port Operations, Karachi Port & Port Qasim",
          services: ["Sea Freight", "Port Operations", "Container Handling", "Warehousing"],
          facilities: ["Port Access", "Container Freight Station", "Bonded Warehousing"]
        },
        {
          city: "Chaman",
          type: "Border Operations",
          address: "Chaman Border, Pakistan-Afghanistan Border",
          services: ["Border Clearance", "Afghan Transit", "Documentation", "Cargo Verification"],
          facilities: ["Border Crossing", "Customs Liaison", "Transit Documentation"]
        },
        {
          city: "Peshawar",
          type: "Regional Office",
          address: "Regional Operations, Torkham Border Access",
          services: ["Torkham Operations", "Afghan Transit", "Regional Logistics"],
          facilities: ["Border Access", "Transit Facilities"]
        }
      ],
      coverage: ["Karachi Port", "Port Qasim", "Torkham Border", "Chaman Border", "Taftan Border", "National Highways"]
    },
    {
      country: "Afghanistan",
      type: "Transit Trade Specialist",
      offices: [
        {
          city: "Kabul",
          type: "International Office",
          address: "Afghanistan Operations, Kabul",
          services: ["On-ground Support", "Proof of Delivery", "Client Liaison", "Documentation"],
          facilities: ["Local Presence", "Delivery Confirmation", "Client Support"]
        }
      ],
      coverage: ["Kabul", "Kandahar", "Herat", "Mazar-e-Sharif", "Jalalabad"],
      routes: ["Chaman Border", "Torkham Border", "Taftan-Islam Qala", "Nimruz Border"]
    },
    {
      country: "Iran",
      type: "Strategic Transit Partner",
      offices: [],
      coverage: ["Tehran", "Bandar Abbas", "Tabriz", "Mashhad", "Isfahan", "Herat Access", "Kandahar Access"],
      routes: ["Taftan Border", "Islam Qala Transit", "Nimruz Transit", "CIS Connections"]
    },
    {
      country: "CIS Countries",
      type: "Regional Pioneer",
      offices: [],
      coverage: ["Turkmenistan", "Uzbekistan", "Tajikistan", "Kazakhstan", "Kyrgyzstan"],
      routes: ["Multimodal via Iran", "Afghanistan Transit", "Regional Partnerships", "Long-distance Coordination"]
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Step-by-Step Guide to Customs Clearance in Pakistan",
      excerpt: "Learn the complete process of customs clearance in Pakistan, from documentation to final release, with expert tips and best practices.",
      author: "A.K. Traders Team",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Customs Clearance",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "How to Export Goods from Pakistan to Afghanistan & Iran",
      excerpt: "Comprehensive guide to exporting goods through Pakistan to neighboring countries, including transit trade procedures and documentation.",
      author: "Logistics Experts",
      date: "2024-12-10",
      readTime: "12 min read",
      category: "Export Guide",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Top Freight Forwarding Challenges and Solutions",
      excerpt: "Discover common challenges in freight forwarding and how A.K. Traders provides innovative solutions for smooth logistics operations.",
      author: "Industry Specialists",
      date: "2024-12-05",
      readTime: "10 min read",
      category: "Freight Forwarding",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Understanding Transit Trade Routes in South Asia",
      excerpt: "Explore the strategic transit trade routes connecting Pakistan with Afghanistan, Iran, and Central Asian countries.",
      author: "Regional Experts",
      date: "2024-11-30",
      readTime: "15 min read",
      category: "Transit Trade",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Project Cargo Logistics: Best Practices for Heavy Equipment",
      excerpt: "Essential guidelines for transporting heavy machinery and project cargo with safety, efficiency, and compliance.",
      author: "Project Cargo Team",
      date: "2024-11-25",
      readTime: "14 min read",
      category: "Project Cargo",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Warehousing Solutions for Import-Export Businesses",
      excerpt: "Comprehensive overview of warehousing services including storage, packing, and distribution solutions for trade businesses.",
      author: "Warehouse Specialists",
      date: "2024-11-20",
      readTime: "9 min read",
      category: "Warehousing",
      image: "/api/placeholder/400/250"
    }
  ],

  // Memberships & Achievements
  memberships: [
    {
      id: "fiata",
      name: "FIATA",
      fullName: "International Federation of Freight Forwarders Associations",
      year: "1982",
      description: "Member since 1982, demonstrating our commitment to global best practices and international recognition in freight forwarding.",
      logo: "/api/placeholder/100/50"
    },
    {
      id: "fitcp",
      name: "Federation of International Transport Companies of Pakistan",
      fullName: "Federation of International Transport Companies of Pakistan",
      year: "2003",
      description: "Member since 2003, reinforcing our standing as a leader in the national logistics sector.",
      logo: "/api/placeholder/100/50"
    },
    {
      id: "qcci",
      name: "Quetta Chamber of Commerce & Industry",
      fullName: "Quetta Chamber of Commerce & Industry",
      year: "1974",
      description: "Member since 1974, reflecting our long-standing credibility and active participation in regional business community.",
      logo: "/api/placeholder/100/50"
    }
  ],

  achievements: [
    {
      id: "pioneer-cis",
      title: "CIS Transportation Pioneer",
      year: "1993",
      description: "Became one of the first Pakistani companies to pioneer multimodal freight forwarding to CIS countries via Iran."
    },
    {
      id: "afghan-specialist",
      title: "Afghan Transit Trade Specialist",
      year: "1980s-Present",
      description: "Recognized as a leading specialist in Afghan Transit Trade with proven expertise in complex cross-border operations."
    },
    {
      id: "continuous-operations",
      title: "50+ Years of Continuous Operations",
      year: "1974-Present",
      description: "Over five decades of uninterrupted service, building strong reputation for reliability, compliance, and innovation."
    },
    {
      id: "government-trust",
      title: "Trusted Government Partner",
      year: "Ongoing",
      description: "Trusted by government entities, defense contractors, and international organizations for secure logistics solutions."
    }
  ],

  // Social Media Links
  socialMedia: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#"
  },

  // Legal Information
  legal: {
    privacyPolicy: "/privacy",
    termsOfService: "/terms",
    sitemap: "/sitemap"
  },

  // SEO Information
  seo: {
    title: "A.K. Traders® | Freight Forwarding & Customs Clearance in Pakistan",
    description: "Since 1974, A.K. Traders® provides customs clearance, freight forwarding, transit trade, and logistics services across Pakistan.",
    keywords: "freight forwarding, customs clearance, Pakistan, transit trade, logistics, import export, Quetta, Lahore",
    author: "A.K. Traders",
    creator: "A.K. Traders",
    publisher: "A.K. Traders",
    robots: "index, follow",
    canonical: "https://aktraders.pk"
  }
};

// Export individual sections for easy imports
export const { name, fullName, tagline, established, description } = companyInfo;
export const { contact, offices } = companyInfo;
export const { stats, services, industries, whyChooseUs, values } = companyInfo;
export const { mission, vision, goals, timeline, team } = companyInfo;
export const { testimonials, networkLocations, blogPosts } = companyInfo;
export const { memberships, achievements } = companyInfo;
export const { socialMedia, legal, seo } = companyInfo;

export default companyInfo;