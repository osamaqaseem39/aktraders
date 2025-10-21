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
      iconImage: "/images/frieght.png",
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
      features: ["Door-to-Door Solutions", "Multimodal Transport", "Customs Documentation", "Cargo Tracking"],
      coverage: ["Karachi Port", "Port Qasim", "Global Ports", "CIS Countries via Iran"],
      detailedContent: {
        overview: "A.K. Traders has been at the forefront of freight forwarding services in Pakistan since 1974, providing comprehensive door-to-door logistics solutions that connect businesses across the globe. Our expertise spans multiple transportation modes including sea freight, air freight, road transport, and rail services, creating seamless multimodal solutions tailored to our clients' specific needs. With our FIATA membership since 1982 and extensive network of partners worldwide, we ensure reliable, cost-effective, and efficient cargo movement from origin to destination. Our services cover everything from initial cargo assessment and documentation to final delivery, including customs clearance, warehousing, and specialized handling for various cargo types including general cargo, refrigerated goods, hazardous materials, and oversized shipments.",
        process: [
          "Initial consultation and cargo assessment to determine optimal transportation route and mode",
          "Comprehensive documentation preparation including commercial invoices, packing lists, and certificates of origin",
          "Cargo pickup and secure transportation to port or airport facilities",
          "Customs clearance and regulatory compliance at origin and destination points",
          "Coordination with shipping lines, airlines, or transport operators for main carriage",
          "Real-time tracking and monitoring throughout the transportation process",
          "Destination handling including customs clearance and local delivery coordination",
          "Final delivery to consignee with proof of delivery documentation"
        ],
        benefits: [
          "Comprehensive door-to-door service reducing client workload and complexity",
          "Multimodal expertise ensuring optimal route selection and cost efficiency",
          "Extensive global network providing competitive rates and reliable service",
          "Real-time cargo tracking and status updates throughout the journey",
          "Expert customs clearance reducing delays and compliance issues",
          "Specialized handling for various cargo types including hazardous and oversized goods",
          "Insurance coordination and risk management services",
          "Dedicated account management for personalized service and support"
        ],
        industries: [
          "Textile and Garment Manufacturing",
          "Electronics and Technology",
          "Pharmaceuticals and Healthcare",
          "Automotive and Heavy Machinery",
          "Food and Beverage",
          "Chemicals and Petrochemicals",
          "Construction and Building Materials",
          "Agricultural Products",
          "Consumer Goods and Retail",
          "Government and Defense"
        ],
        requirements: [
          "Commercial invoice with detailed product description and value",
          "Packing list specifying quantity, weight, and dimensions of each item",
          "Certificate of origin for preferential trade agreements",
          "Insurance certificate covering cargo during transit",
          "Import/export licenses where applicable",
          "Phytosanitary certificates for agricultural products",
          "Material safety data sheets for hazardous goods",
          "Special permits for oversized or restricted cargo"
        ],
        caseStudies: [
          "Successfully coordinated the shipment of textile machinery from Germany to Pakistan, involving sea freight from Hamburg to Karachi, followed by overland transport to Lahore manufacturing facility. The project required specialized handling for oversized equipment and coordination with multiple customs authorities.",
          "Managed the time-sensitive delivery of pharmaceutical products from Pakistan to Afghanistan, utilizing our Afghan transit trade expertise to ensure rapid clearance and delivery to Kabul within 48 hours of departure from Karachi.",
          "Coordinated a complex multimodal shipment of automotive parts from Japan to Uzbekistan, involving sea freight to Bandar Abbas, Iran, followed by overland transport through Afghanistan to final destination in Tashkent."
        ],
        faq: [
          {
            question: "What is the typical transit time for sea freight from Karachi to major global ports?",
            answer: "Transit times vary by destination: Europe (14-21 days), North America (18-25 days), Far East (7-14 days), and Middle East (5-10 days). We provide accurate transit time estimates based on specific routes and shipping lines."
          },
          {
            question: "Do you provide cargo insurance, and is it mandatory?",
            answer: "While cargo insurance is not mandatory, we strongly recommend it for all shipments. We can arrange comprehensive marine insurance coverage through our trusted partners, or you can provide your own insurance certificate."
          },
          {
            question: "Can you handle hazardous materials and what special requirements apply?",
            answer: "Yes, we are certified to handle hazardous materials. Special requirements include proper classification, packaging, labeling, and documentation according to IMDG (International Maritime Dangerous Goods) regulations. Additional permits and certifications may be required."
          },
          {
            question: "What tracking capabilities do you provide for shipments?",
            answer: "We provide real-time tracking through our online portal, including vessel/aircraft details, current location, estimated arrival times, and customs clearance status. Clients receive regular updates via email and SMS notifications."
          }
        ]
      }
    },
    {
      id: "afghan-transit-trade",
      name: "Afghan Transit Trade (ATT)",
      shortName: "Afghan Transit",
      description: "Pioneer in Afghan Transit Trade with one-stop solutions via Chaman, Torkham, and Pakistan-Iran-Afghanistan corridors.",
      icon: "Globe",
      iconImage: "/images/afghan.png",
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
      features: ["Multiple Border Routes", "Warehousing Support", "Government Liaison", "Proof of Delivery"],
      coverage: ["Chaman Border", "Torkham Border", "Taftan-Islam Qala", "Nimruz Border"],
      detailedContent: {
        overview: "A.K. Traders has been a pioneer in Afghan Transit Trade (ATT) since the 1980s, establishing itself as one of Pakistan's most experienced and reliable providers of transit trade services to Afghanistan. Our comprehensive ATT services facilitate the smooth movement of goods from Pakistan's ports to Afghanistan through multiple border crossings, including Chaman, Torkham, Taftan-Islam Qala, and Nimruz routes. We provide end-to-end solutions that include customs clearance, documentation, warehousing, transportation, and proof of delivery services. Our deep understanding of Afghan transit regulations, strong relationships with customs authorities on both sides of the border, and extensive network of partners in Afghanistan ensure reliable and efficient transit operations. We handle various cargo types including general merchandise, construction materials, food items, pharmaceuticals, and humanitarian aid, providing specialized solutions for different industries and requirements.",
        process: [
          "Initial cargo assessment and route selection based on destination and cargo type",
          "Preparation of Afghan Transit Trade documentation including ATTA forms and customs declarations",
          "Cargo pickup from origin and transportation to designated border crossing point",
          "Pakistan customs clearance and transit bond processing",
          "Border crossing coordination and cargo verification at transit point",
          "Transit transportation through designated routes to Afghanistan",
          "Afghan customs clearance and final documentation processing",
          "Delivery to final destination in Afghanistan with proof of delivery"
        ],
        benefits: [
          "Pioneer status with over 40 years of Afghan transit trade experience",
          "Multiple border route options ensuring flexibility and reliability",
          "Comprehensive documentation and customs clearance services",
          "Dedicated warehousing facilities at strategic transit points",
          "Strong government relations and regulatory compliance expertise",
          "Real-time tracking and monitoring throughout transit process",
          "Proof of delivery services ensuring cargo reaches intended destination",
          "Specialized handling for humanitarian aid and sensitive cargo"
        ],
        industries: [
          "Humanitarian Aid and Relief Organizations",
          "Construction and Infrastructure Development",
          "Food and Beverage Distribution",
          "Pharmaceuticals and Medical Supplies",
          "Consumer Goods and Retail",
          "Automotive and Spare Parts",
          "Textiles and Garments",
          "Electronics and Technology",
          "Agricultural Products",
          "Government and Defense"
        ],
        requirements: [
          "Valid Afghan Transit Trade Agreement (ATTA) documentation",
          "Commercial invoice with detailed product description and value",
          "Packing list specifying quantity, weight, and dimensions",
          "Certificate of origin for preferential treatment",
          "Transit bond and security guarantees",
          "Import permits and licenses where applicable",
          "Insurance certificate covering transit period",
          "Special permits for restricted or sensitive goods"
        ],
        caseStudies: [
          "Successfully managed the transit of humanitarian aid supplies for international relief organizations, ensuring rapid delivery to remote areas of Afghanistan during emergency situations. The project involved coordination with multiple government agencies and customs authorities.",
          "Coordinated the transit of construction materials for major infrastructure projects in Kabul, including cement, steel, and heavy machinery. The project required specialized handling and multiple border crossings over several months.",
          "Managed the transit of pharmaceutical products from Pakistan to Afghanistan, ensuring proper temperature control and regulatory compliance throughout the journey. The project involved coordination with health authorities in both countries."
        ],
        faq: [
          {
            question: "What are the different border routes available for Afghan transit trade?",
            answer: "We operate through four main border crossings: Chaman (most direct route to Kandahar), Torkham (route to Kabul and northern Afghanistan), Taftan-Islam Qala (via Iran to western Afghanistan), and Nimruz (southern route). Route selection depends on destination and cargo type."
          },
          {
            question: "How long does the transit process typically take?",
            answer: "Transit times vary by route: Chaman (2-3 days), Torkham (3-4 days), Taftan-Islam Qala (5-7 days), and Nimruz (4-6 days). These times include customs clearance and final delivery to destination in Afghanistan."
          },
          {
            question: "What types of cargo are restricted for Afghan transit trade?",
            answer: "Restricted items include weapons, ammunition, drugs, certain chemicals, and items requiring special permits. We provide detailed guidance on restricted items and help obtain necessary permits where possible."
          },
          {
            question: "Do you provide warehousing services during transit?",
            answer: "Yes, we have dedicated warehousing facilities at strategic transit points where cargo can be stored temporarily if needed. Our facilities are secure and equipped with proper handling equipment."
          }
        ]
      }
    },
    {
      id: "overland-transportation",
      name: "Overland Transportation",
      shortName: "Overland Transport",
      description: "Domestic and regional overland transport with bonded and un-bonded cargo handling across Pakistan and neighboring countries.",
      icon: "Truck",
      iconImage: "/images/overland.png",
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-500",
      features: ["Bonded Transport", "Cross-border Trade", "Reliable Fleet", "Monitoring Systems"],
      coverage: ["National Highways", "Border Crossings", "Ports to Inland", "Regional Routes"],
      detailedContent: {
        overview: "A.K. Traders provides comprehensive overland transportation services across Pakistan and neighboring countries, offering both bonded and un-bonded cargo solutions for domestic and regional trade. Our extensive fleet of modern vehicles, including trucks, trailers, and specialized equipment, ensures reliable and efficient cargo movement across national highways, border crossings, and regional routes. We specialize in port-to-inland transportation, cross-border trade facilitation, and long-distance haulage services. Our overland services are complemented by our expertise in customs clearance, documentation, and regulatory compliance, making us a one-stop solution for all overland transportation needs. We handle various cargo types including general merchandise, construction materials, agricultural products, and specialized cargo requiring temperature control or special handling.",
        process: [
          "Cargo assessment and route planning based on destination and cargo specifications",
          "Vehicle selection and scheduling based on cargo type and delivery requirements",
          "Documentation preparation including waybills, permits, and customs declarations",
          "Cargo loading and securing using appropriate equipment and safety measures",
          "Real-time tracking and monitoring throughout the journey",
          "Border crossing coordination and customs clearance where applicable",
          "Delivery to destination with proper documentation and proof of delivery",
          "Return journey coordination and cargo collection for round-trip services"
        ],
        benefits: [
          "Extensive fleet of modern vehicles equipped with GPS tracking systems",
          "Experienced drivers and logistics coordinators ensuring safe and timely delivery",
          "Bonded transport services for duty-free movement of goods",
          "Cross-border expertise with knowledge of regional regulations and procedures",
          "Flexible scheduling and route optimization for cost-effective transportation",
          "Real-time monitoring and status updates throughout the journey",
          "Specialized equipment for different cargo types and handling requirements",
          "Comprehensive insurance coverage and risk management services"
        ],
        industries: [
          "Manufacturing and Industrial",
          "Construction and Infrastructure",
          "Agriculture and Food Processing",
          "Retail and Consumer Goods",
          "Pharmaceuticals and Healthcare",
          "Textiles and Garments",
          "Automotive and Spare Parts",
          "Electronics and Technology",
          "Government and Public Sector",
          "International Aid Organizations"
        ],
        requirements: [
          "Valid commercial invoice and packing list",
          "Transport permits and waybills for cargo movement",
          "Customs documentation for cross-border shipments",
          "Insurance certificate covering cargo during transit",
          "Special permits for restricted or hazardous goods",
          "Temperature control certificates for perishable items",
          "Weight and dimension certificates for oversized cargo",
          "Driver and vehicle documentation for international routes"
        ],
        caseStudies: [
          "Successfully managed the transportation of construction materials from Karachi port to various construction sites across Pakistan, including cement, steel, and heavy machinery. The project involved coordination with multiple contractors and timely delivery to maintain construction schedules.",
          "Coordinated the bonded transport of textile machinery from Lahore to Afghanistan via Torkham border, ensuring proper customs clearance and safe delivery to the manufacturing facility in Kabul.",
          "Managed the temperature-controlled transportation of pharmaceutical products from Karachi to various cities across Pakistan, maintaining proper cold chain requirements throughout the journey."
        ],
        faq: [
          {
            question: "What types of vehicles are available in your fleet?",
            answer: "Our fleet includes various types of trucks, trailers, refrigerated vehicles, flatbeds, and specialized equipment for different cargo types. We can provide vehicles ranging from small delivery trucks to large trailers for heavy cargo."
          },
          {
            question: "Do you provide bonded transport services?",
            answer: "Yes, we provide bonded transport services for duty-free movement of goods, particularly useful for re-exports and transit trade. Our bonded transport services ensure compliance with customs regulations and proper documentation."
          },
          {
            question: "What is the typical delivery time for domestic overland transportation?",
            answer: "Delivery times vary by distance and route: Karachi to Lahore (24-36 hours), Karachi to Islamabad (18-24 hours), and Karachi to Quetta (12-18 hours). We provide accurate delivery time estimates based on specific routes and conditions."
          },
          {
            question: "Do you provide real-time tracking for overland shipments?",
            answer: "Yes, all our vehicles are equipped with GPS tracking systems, and we provide real-time location updates and status reports throughout the journey. Clients can track their shipments through our online portal or receive updates via SMS."
          }
        ]
      }
    },
    {
      id: "project-logistics",
      name: "Project Logistics",
      shortName: "Project Cargo",
      description: "Specialized handling of heavy-lift, oversized cargo, and project shipments with end-to-end management and government coordination.",
      icon: "Package",
      iconImage: "/images/logistic.png",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500",
      features: ["Heavy Lift Cargo", "Route Surveys", "Government NOCs", "Project Management"],
      coverage: ["Energy Projects", "Infrastructure", "Oil & Gas", "Industrial Equipment"],
      detailedContent: {
        overview: "A.K. Traders specializes in project logistics, providing comprehensive solutions for complex, heavy-lift, and oversized cargo shipments that require specialized handling and coordination. Our project logistics services are designed for major infrastructure projects, energy sector developments, industrial installations, and construction projects that involve the transportation of heavy machinery, equipment, and materials. We provide end-to-end project management services including route surveys, government liaison, permit acquisition, specialized transportation, and on-site coordination. Our expertise in handling project cargo spans various industries including oil and gas, power generation, mining, construction, and manufacturing. We work closely with project managers, engineers, and government authorities to ensure smooth execution of complex logistics requirements.",
        process: [
          "Initial project assessment and cargo analysis to determine transportation requirements",
          "Route surveys and feasibility studies for heavy-lift and oversized cargo",
          "Government liaison and permit acquisition including NOCs and special clearances",
          "Specialized equipment selection and transportation planning",
          "Cargo preparation including disassembly, packaging, and securing",
          "Coordinated transportation with escort vehicles and traffic management",
          "On-site delivery and installation coordination",
          "Project completion documentation and handover to client"
        ],
        benefits: [
          "Specialized expertise in heavy-lift and oversized cargo transportation",
          "Comprehensive project management from planning to completion",
          "Strong government relations and permit acquisition capabilities",
          "Route survey and feasibility study services",
          "Specialized equipment and transportation solutions",
          "On-site coordination and installation support",
          "Risk assessment and mitigation strategies",
          "Compliance with safety and regulatory requirements"
        ],
        industries: [
          "Oil and Gas Exploration and Production",
          "Power Generation and Energy Projects",
          "Mining and Mineral Processing",
          "Infrastructure and Construction",
          "Manufacturing and Industrial",
          "Marine and Offshore",
          "Aerospace and Defense",
          "Telecommunications",
          "Water and Wastewater Treatment",
          "Renewable Energy Projects"
        ],
        requirements: [
          "Detailed project specifications and cargo dimensions",
          "Route survey reports and feasibility studies",
          "Government permits and NOCs for oversized cargo",
          "Special transportation permits and escort arrangements",
          "Insurance coverage for high-value project cargo",
          "Safety certificates and compliance documentation",
          "Engineering drawings and technical specifications",
          "Environmental impact assessments where applicable"
        ],
        caseStudies: [
          "Successfully managed the transportation of a 150-ton gas turbine from Karachi port to a power plant in Punjab, involving specialized heavy-lift equipment, route modifications, and coordination with multiple government agencies.",
          "Coordinated the delivery of drilling equipment for an oil exploration project in Balochistan, including customs clearance, specialized transportation, and on-site installation support.",
          "Managed the transportation of wind turbine components for a renewable energy project, including blades, towers, and nacelles, requiring specialized handling and route planning."
        ],
        faq: [
          {
            question: "What types of project cargo can you handle?",
            answer: "We handle various types of project cargo including heavy machinery, industrial equipment, power generation equipment, oil and gas equipment, construction materials, and oversized components. Our capabilities include cargo weighing up to 200 tons and dimensions up to 50 meters in length."
          },
          {
            question: "Do you provide route surveys for project cargo?",
            answer: "Yes, we provide comprehensive route surveys including feasibility studies, infrastructure assessment, permit requirements analysis, and risk assessment. Our route surveys help identify potential challenges and develop appropriate solutions."
          },
          {
            question: "What government permits are required for project cargo?",
            answer: "Required permits vary by cargo type and route, but typically include NOCs from traffic police, highway authorities, and local governments. We handle all permit applications and coordinate with relevant authorities to ensure compliance."
          },
          {
            question: "Do you provide on-site coordination and installation support?",
            answer: "Yes, we provide on-site coordination services including delivery scheduling, installation support, and project management. Our team works closely with project managers and engineers to ensure smooth execution."
          }
        ]
      }
    },
    {
      id: "warehousing-cfs",
      name: "Warehousing & Container Freight Station",
      shortName: "Warehousing",
      description: "Secure storage, cargo verification, segregation, and container stuffing with advanced inventory management systems.",
      icon: "Warehouse",
      iconImage: "/images/warehouse.png",
      color: "from-red-500 to-red-600",
      iconColor: "text-red-500",
      features: ["Cargo Verification", "Secure Storage", "Container Stuffing", "Inventory Management"],
      coverage: ["Strategic Locations", "Transit Hubs", "Afghanistan Links", "Port Facilities"],
      detailedContent: {
        overview: "A.K. Traders operates state-of-the-art warehousing and Container Freight Station (CFS) facilities strategically located across Pakistan to provide comprehensive storage and cargo handling services. Our warehousing services include secure storage, cargo verification, segregation, container stuffing, and advanced inventory management systems. We offer both bonded and non-bonded warehousing solutions to meet diverse client needs, from short-term storage to long-term inventory management. Our facilities are equipped with modern security systems, climate control capabilities, and specialized handling equipment to ensure the safety and integrity of stored cargo. We provide value-added services including cargo consolidation, deconsolidation, repackaging, labeling, and quality inspection to support our clients' supply chain requirements.",
        process: [
          "Cargo receipt and initial inspection at warehouse facility",
          "Documentation verification and cargo registration in inventory system",
          "Cargo segregation and storage allocation based on type and requirements",
          "Secure storage with appropriate handling and environmental controls",
          "Regular inventory monitoring and status updates",
          "Cargo preparation for outbound shipment including packing and labeling",
          "Container stuffing and sealing for export shipments",
          "Final dispatch with proper documentation and tracking information"
        ],
        benefits: [
          "Strategic locations near ports, airports, and major transportation hubs",
          "Modern security systems and 24/7 surveillance ensuring cargo safety",
          "Climate-controlled storage for temperature-sensitive goods",
          "Advanced inventory management systems with real-time tracking",
          "Specialized handling equipment for various cargo types",
          "Bonded and non-bonded storage options for different requirements",
          "Value-added services including repackaging and labeling",
          "Flexible storage terms and competitive pricing"
        ],
        industries: [
          "Import and Export Trading",
          "Manufacturing and Industrial",
          "Retail and Consumer Goods",
          "Pharmaceuticals and Healthcare",
          "Food and Beverage",
          "Textiles and Garments",
          "Electronics and Technology",
          "Automotive and Spare Parts",
          "Construction and Building Materials",
          "Government and Public Sector"
        ],
        requirements: [
          "Valid commercial invoice and packing list",
          "Warehouse receipt and storage agreement",
          "Insurance certificate covering stored cargo",
          "Special permits for restricted or hazardous goods",
          "Temperature control requirements for perishable items",
          "Security clearance for high-value cargo",
          "Customs documentation for bonded storage",
          "Handling instructions for specialized cargo"
        ],
        caseStudies: [
          "Successfully managed the warehousing and distribution of pharmaceutical products for a major healthcare company, ensuring proper temperature control and regulatory compliance throughout the storage period.",
          "Coordinated the container stuffing and consolidation of textile goods for export to multiple destinations, optimizing container utilization and reducing shipping costs.",
          "Managed the storage and distribution of construction materials for a major infrastructure project, ensuring timely delivery and proper inventory management."
        ],
        faq: [
          {
            question: "What types of storage facilities do you offer?",
            answer: "We offer various types of storage facilities including general warehousing, bonded storage, temperature-controlled storage, and specialized storage for hazardous materials. Our facilities are equipped with modern security systems and handling equipment."
          },
          {
            question: "Do you provide container stuffing and deconsolidation services?",
            answer: "Yes, we provide comprehensive container stuffing and deconsolidation services including cargo consolidation, repackaging, labeling, and quality inspection. Our services help optimize container utilization and reduce shipping costs."
          },
          {
            question: "What security measures are in place at your warehouses?",
            answer: "Our warehouses are equipped with 24/7 surveillance systems, access control, fire suppression systems, and security personnel. We also provide comprehensive insurance coverage for stored cargo."
          },
          {
            question: "Do you provide real-time inventory tracking?",
            answer: "Yes, we provide real-time inventory tracking through our advanced warehouse management system. Clients can access inventory status, location, and movement history through our online portal."
          }
        ]
      }
    },
    {
      id: "customs-clearance",
      name: "Customs Clearance",
      shortName: "Customs Clearance",
      description: "Expert customs clearance with 31+ years experience, one-window service, and strong credibility with customs authorities.",
      icon: "Shield",
      iconImage: "/images/custom.png",
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-500",
      features: ["One-Window Clearance", "Expert Documentation", "Problem-Solving", "Authority Relations"],
      coverage: ["All Ports", "Airports", "Dry Ports", "Border Crossings"],
      detailedContent: {
        overview: "A.K. Traders has been providing expert customs clearance services for over 50 years, establishing itself as one of Pakistan's most trusted and experienced customs clearance agents. Our comprehensive customs clearance services cover all ports, airports, dry ports, and border crossings across Pakistan. We provide one-window service that includes documentation preparation, customs duty calculation, regulatory compliance, and cargo release coordination. Our team of experienced customs professionals maintains strong relationships with customs authorities and regulatory bodies, ensuring smooth and efficient clearance processes. We handle various types of cargo including general merchandise, restricted items, hazardous materials, and specialized goods requiring special permits and clearances.",
        process: [
          "Initial cargo assessment and documentation review",
          "Preparation of customs declarations and supporting documents",
          "Duty calculation and tax assessment based on cargo value and classification",
          "Submission of customs declarations and payment of duties and taxes",
          "Customs examination and cargo inspection coordination",
          "Resolution of any customs queries or disputes",
          "Cargo release and delivery coordination",
          "Post-clearance documentation and record keeping"
        ],
        benefits: [
          "Over 50 years of customs clearance experience and expertise",
          "One-window service covering all aspects of customs clearance",
          "Strong relationships with customs authorities and regulatory bodies",
          "Expert documentation and compliance services",
          "Problem-solving capabilities for complex clearance issues",
          "Competitive duty calculation and tax optimization",
          "Fast and efficient clearance processes",
          "Comprehensive post-clearance support and documentation"
        ],
        industries: [
          "Import and Export Trading",
          "Manufacturing and Industrial",
          "Pharmaceuticals and Healthcare",
          "Automotive and Spare Parts",
          "Electronics and Technology",
          "Textiles and Garments",
          "Food and Beverage",
          "Construction and Building Materials",
          "Government and Public Sector",
          "International Aid Organizations"
        ],
        requirements: [
          "Commercial invoice with detailed product description and value",
          "Packing list specifying quantity, weight, and dimensions",
          "Bill of lading or airway bill for cargo transportation",
          "Certificate of origin for preferential treatment",
          "Import/export licenses where applicable",
          "Insurance certificate covering cargo value",
          "Special permits for restricted or hazardous goods",
          "Bank guarantee or security deposit for duty payment"
        ],
        caseStudies: [
          "Successfully cleared a complex shipment of pharmaceutical equipment requiring multiple permits and regulatory approvals, ensuring compliance with health and safety regulations while minimizing clearance time.",
          "Coordinated the customs clearance of textile machinery imported from Germany, including duty optimization and regulatory compliance, resulting in significant cost savings for the client.",
          "Managed the clearance of humanitarian aid supplies for international organizations, ensuring rapid processing and compliance with special regulations for aid cargo."
        ],
        faq: [
          {
            question: "What is the typical clearance time for different types of cargo?",
            answer: "Clearance times vary by cargo type and complexity: general cargo (1-2 days), restricted items (3-5 days), and specialized goods (5-10 days). We provide accurate time estimates based on specific requirements and current customs processing times."
          },
          {
            question: "Do you provide duty calculation and tax optimization services?",
            answer: "Yes, we provide comprehensive duty calculation and tax optimization services, helping clients minimize customs duties and taxes through proper classification and valuation. Our expertise ensures compliance while optimizing costs."
          },
          {
            question: "Can you handle restricted or hazardous goods clearance?",
            answer: "Yes, we have extensive experience in handling restricted and hazardous goods clearance, including obtaining necessary permits, coordinating with regulatory authorities, and ensuring compliance with safety and environmental regulations."
          },
          {
            question: "What documentation is required for customs clearance?",
            answer: "Required documentation includes commercial invoice, packing list, bill of lading, certificate of origin, and any applicable permits or licenses. We provide detailed guidance on specific requirements based on cargo type and destination."
          }
        ]
      }
    },
    {
      id: "duty-drawback",
      name: "Duty Drawback Services",
      shortName: "Duty Drawback",
      description: "Specialized Duty Drawback Division (DDBD) providing advisory, documentation, and 24/7 online claim tracking for exporters.",
      icon: "Calculator",
      iconImage: "/images/duty.png",
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-500",
      features: ["Expert Advisory", "Accurate Documentation", "Online Tracking", "Efficient Processing"],
      coverage: ["All Export Categories", "Textile Industry", "Manufacturing", "General Exports"],
      detailedContent: {
        overview: "A.K. Traders operates a specialized Duty Drawback Division (DDBD) that provides comprehensive duty drawback services to exporters across Pakistan. Our duty drawback services help exporters recover customs duties paid on imported raw materials used in the production of exported goods. We provide expert advisory services, accurate documentation preparation, and efficient processing of duty drawback claims. Our team of experienced professionals understands the complex regulations and requirements of the duty drawback system, ensuring maximum recovery for our clients. We offer 24/7 online claim tracking and provide regular updates on the status of applications. Our services cover all export categories including textiles, manufacturing, agriculture, and general exports, helping businesses improve their competitiveness in international markets.",
        process: [
          "Initial consultation and assessment of duty drawback eligibility",
          "Documentation review and preparation of duty drawback application",
          "Calculation of duty drawback amount based on imported materials and export value",
          "Submission of application to customs authorities with supporting documents",
          "Liaison with customs officials and resolution of any queries",
          "Monitoring of application status and regular updates to client",
          "Processing of approved claims and coordination of refund payments",
          "Post-claim documentation and record keeping for future reference"
        ],
        benefits: [
          "Specialized expertise in duty drawback regulations and procedures",
          "Maximum recovery of customs duties paid on imported materials",
          "Accurate documentation and compliance with regulatory requirements",
          "24/7 online tracking and status updates for all applications",
          "Expert advisory services for duty drawback optimization",
          "Efficient processing and faster claim approval",
          "Comprehensive support for all export categories",
          "Cost-effective services improving export competitiveness"
        ],
        industries: [
          "Textile and Garment Manufacturing",
          "Pharmaceuticals and Healthcare",
          "Food and Beverage Processing",
          "Electronics and Technology",
          "Automotive and Spare Parts",
          "Construction and Building Materials",
          "Agriculture and Food Products",
          "Chemicals and Petrochemicals",
          "Leather and Footwear",
          "General Manufacturing and Exports"
        ],
        requirements: [
          "Export documentation including commercial invoice and shipping bill",
          "Import documentation for raw materials used in production",
          "Production records and manufacturing process documentation",
          "Duty payment receipts for imported materials",
          "Quality certificates and compliance documentation",
          "Bank guarantee for duty drawback claims",
          "Tax registration and business license",
          "Audit reports and financial statements where applicable"
        ],
        caseStudies: [
          "Successfully processed duty drawback claims for a major textile manufacturer, recovering over PKR 50 million in customs duties paid on imported cotton and synthetic fibers used in export production.",
          "Coordinated duty drawback applications for a pharmaceutical company exporting finished products, ensuring compliance with health and safety regulations while maximizing duty recovery.",
          "Managed duty drawback claims for an electronics manufacturer, optimizing documentation and processes to achieve faster claim approval and maximum duty recovery."
        ],
        faq: [
          {
            question: "What is duty drawback and how does it benefit exporters?",
            answer: "Duty drawback is a refund of customs duties paid on imported raw materials that are used in the production of exported goods. It helps exporters reduce their production costs and improve competitiveness in international markets by recovering duties paid on inputs."
          },
          {
            question: "What types of goods are eligible for duty drawback?",
            answer: "Most exported goods that use imported raw materials are eligible for duty drawback, including textiles, pharmaceuticals, food products, electronics, and manufactured goods. Eligibility depends on the use of imported materials in the production process."
          },
          {
            question: "How long does it take to process a duty drawback claim?",
            answer: "Processing times vary but typically range from 30-90 days depending on the complexity of the claim and completeness of documentation. We provide regular updates and work to expedite the process where possible."
          },
          {
            question: "What documentation is required for duty drawback claims?",
            answer: "Required documentation includes export invoices, shipping bills, import documentation for raw materials, production records, duty payment receipts, and quality certificates. We provide detailed guidance on specific requirements for each claim."
          }
        ]
      }
    },
    {
      id: "cis-transportation",
      name: "CIS Transportation",
      shortName: "CIS Transport",
      description: "Pioneer in multimodal freight forwarding to CIS countries since 1993, with expertise in long-distance coordination via Iran.",
      icon: "MapPin",
      iconImage: "/images/cis.png",
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-500",
      features: ["Multimodal Solutions", "Long-Distance Management", "CIS Expertise", "Via Iran Routes"],
      coverage: ["Turkmenistan", "Uzbekistan", "Tajikistan", "Kazakhstan"],
      detailedContent: {
        overview: "A.K. Traders has been a pioneer in multimodal freight forwarding to CIS (Commonwealth of Independent States) countries since 1993, establishing itself as one of Pakistan's most experienced providers of long-distance transportation services to Central Asia. Our CIS transportation services utilize multiple transportation modes including sea freight, road transport, and rail services, with expertise in coordinating complex multimodal shipments via Iran. We provide comprehensive logistics solutions for cargo movement to Turkmenistan, Uzbekistan, Tajikistan, Kazakhstan, and other CIS countries. Our services include customs clearance, documentation, warehousing, and final delivery coordination. We have developed strong partnerships with local agents and transportation providers in CIS countries, ensuring reliable and efficient cargo delivery to final destinations.",
        process: [
          "Initial cargo assessment and route planning for CIS destinations",
          "Multimodal transportation planning including sea, road, and rail options",
          "Documentation preparation including customs declarations and transit permits",
          "Sea freight coordination from Karachi to Bandar Abbas, Iran",
          "Overland transportation through Iran to CIS border crossings",
          "Customs clearance and border crossing coordination",
          "Final delivery to destination in CIS countries",
          "Proof of delivery and documentation completion"
        ],
        benefits: [
          "Pioneer status with over 30 years of CIS transportation experience",
          "Multimodal expertise ensuring optimal route selection and cost efficiency",
          "Strong partnerships with local agents in CIS countries",
          "Comprehensive documentation and customs clearance services",
          "Long-distance coordination and project management capabilities",
          "Reliable delivery to remote and challenging destinations",
          "Cost-effective solutions for Central Asian markets",
          "Expert knowledge of regional regulations and requirements"
        ],
        industries: [
          "Textile and Garment Manufacturing",
          "Pharmaceuticals and Healthcare",
          "Food and Beverage",
          "Electronics and Technology",
          "Construction and Building Materials",
          "Automotive and Spare Parts",
          "Agriculture and Food Products",
          "Chemicals and Petrochemicals",
          "Government and Public Sector",
          "International Aid Organizations"
        ],
        requirements: [
          "Commercial invoice with detailed product description and value",
          "Packing list specifying quantity, weight, and dimensions",
          "Certificate of origin for preferential treatment",
          "Transit permits for Iran and CIS countries",
          "Insurance certificate covering cargo during transit",
          "Special permits for restricted or hazardous goods",
          "Bank guarantee for transit operations",
          "Local agent coordination for final delivery"
        ],
        caseStudies: [
          "Successfully coordinated the shipment of textile machinery from Pakistan to Uzbekistan, involving sea freight to Bandar Abbas, overland transport through Iran, and final delivery to Tashkent manufacturing facility.",
          "Managed the transportation of pharmaceutical products to Kazakhstan, ensuring proper temperature control and regulatory compliance throughout the multimodal journey via Iran.",
          "Coordinated the delivery of construction materials to Turkmenistan, including cement, steel, and heavy machinery, requiring specialized handling and multiple border crossings."
        ],
        faq: [
          {
            question: "What are the main routes for CIS transportation?",
            answer: "Our main routes include sea freight from Karachi to Bandar Abbas, Iran, followed by overland transport through Iran to various CIS border crossings. We also utilize rail services where available and coordinate with local partners for final delivery."
          },
          {
            question: "How long does CIS transportation typically take?",
            answer: "Transit times vary by destination: Turkmenistan (15-20 days), Uzbekistan (18-25 days), Tajikistan (20-28 days), and Kazakhstan (25-35 days). These times include sea freight, overland transport, and final delivery."
          },
          {
            question: "Do you have local partners in CIS countries?",
            answer: "Yes, we have established partnerships with reliable local agents and transportation providers in all major CIS countries, ensuring smooth customs clearance and final delivery to destinations."
          },
          {
            question: "What types of cargo can be transported to CIS countries?",
            answer: "We can transport various types of cargo including general merchandise, machinery, pharmaceuticals, food products, and construction materials. Some restrictions apply to certain goods, and we provide guidance on specific requirements."
          }
        ]
      }
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