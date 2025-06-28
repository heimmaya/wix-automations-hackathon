// Google Sheets API utility
const SHEET_ID = '1pxIDXJaPXN2tqPoYhqqNE1RK7iUDKZ8-CU0D6ueX7_0'
const API_KEY = 'YOUR_GOOGLE_SHEETS_API_KEY' // Replace with actual API key
const RANGE = 'Sheet1!A:Z' // Adjust range as needed

// For demo purposes, we'll use mock data since we don't have API key
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Smart Content Generator",
    description: "Build an AI-powered tool that automatically generates website content based on business type, target audience, and brand voice. The solution should integrate with Wix Editor and provide real-time content suggestions.",
    category: "AI & Content",
    difficulty: "Medium",
    techStack: ["JavaScript", "OpenAI API", "Wix Velo"],
    estimatedTime: "24-36 hours",
    maxTeamSize: 4,
    prizes: ["$15,000 First Prize", "$8,000 Second Prize", "$5,000 Third Prize"],
    mentors: ["Sarah Chen - AI Engineer", "David Rodriguez - Content Strategist"],
    requirements: [
      "Integration with Wix Editor",
      "Support for multiple content types",
      "Brand voice consistency",
      "Multi-language support (bonus)"
    ]
  },
  {
    id: 2,
    title: "Automated SEO Optimizer",
    description: "Create an intelligent SEO automation tool that analyzes website content, suggests improvements, and automatically implements SEO best practices across Wix sites.",
    category: "SEO & Analytics",
    difficulty: "Hard",
    techStack: ["JavaScript", "SEO APIs", "Wix Velo", "Data Analytics"],
    estimatedTime: "36-48 hours",
    maxTeamSize: 4,
    prizes: ["$12,000 First Prize", "$7,000 Second Prize", "$4,000 Third Prize"],
    mentors: ["Mike Johnson - SEO Expert", "Lisa Wang - Data Scientist"],
    requirements: [
      "Real-time SEO analysis",
      "Automated meta tag generation",
      "Keyword optimization",
      "Performance tracking dashboard"
    ]
  },
  {
    id: 3,
    title: "Smart Workflow Builder",
    description: "Develop a visual workflow automation tool that allows users to create complex business processes without coding. Think Zapier but integrated deeply with Wix ecosystem.",
    category: "Workflow & Integration",
    difficulty: "Hard",
    techStack: ["JavaScript", "Node.js", "Wix APIs", "Drag & Drop UI"],
    estimatedTime: "40-48 hours",
    maxTeamSize: 4,
    prizes: ["$18,000 First Prize", "$10,000 Second Prize", "$6,000 Third Prize"],
    mentors: ["Alex Thompson - Integration Specialist", "Rachel Green - UX Designer"],
    requirements: [
      "Visual workflow designer",
      "Integration with popular services",
      "Real-time execution monitoring",
      "Template library"
    ]
  },
  {
    id: 4,
    title: "Personalization Engine",
    description: "Build a smart personalization system that adapts website content, layout, and functionality based on visitor behavior, preferences, and demographics.",
    category: "Personalization & UX",
    difficulty: "Medium",
    techStack: ["JavaScript", "Machine Learning", "Wix Velo", "Analytics"],
    estimatedTime: "30-40 hours",
    maxTeamSize: 3,
    prizes: ["$10,000 First Prize", "$6,000 Second Prize", "$3,000 Third Prize"],
    mentors: ["Emma Davis - ML Engineer", "Tom Wilson - UX Researcher"],
    requirements: [
      "Real-time personalization",
      "A/B testing integration",
      "Privacy-compliant data handling",
      "Performance optimization"
    ]
  },
  {
    id: 5,
    title: "E-commerce Automation Suite",
    description: "Create comprehensive automation tools for e-commerce sites including inventory management, pricing optimization, customer segmentation, and automated marketing campaigns.",
    category: "E-commerce",
    difficulty: "Hard",
    techStack: ["JavaScript", "Wix Stores API", "Payment APIs", "Email Automation"],
    estimatedTime: "42-48 hours",
    maxTeamSize: 4,
    prizes: ["$20,000 First Prize", "$12,000 Second Prize", "$8,000 Third Prize"],
    mentors: ["Jennifer Lee - E-commerce Expert", "Mark Stevens - Payment Systems"],
    requirements: [
      "Multi-channel inventory sync",
      "Dynamic pricing algorithms",
      "Customer lifecycle automation",
      "Analytics dashboard"
    ]
  },
  {
    id: 6,
    title: "Social Media Auto-Publisher",
    description: "Develop an intelligent social media automation tool that creates, schedules, and publishes content across multiple platforms based on website updates and user-defined strategies.",
    category: "Social Media & Marketing",
    difficulty: "Medium",
    techStack: ["JavaScript", "Social Media APIs", "Content Generation", "Scheduling"],
    estimatedTime: "24-32 hours",
    maxTeamSize: 3,
    prizes: ["$8,000 First Prize", "$5,000 Second Prize", "$2,000 Third Prize"],
    mentors: ["Amy Foster - Social Media Manager", "Chris Brown - Content Creator"],
    requirements: [
      "Multi-platform publishing",
      "Content optimization for each platform",
      "Scheduling and automation",
      "Performance analytics"
    ]
  }
]

export const fetchProjectsFromSheets = async () => {
  try {
    // In a real implementation, you would fetch from Google Sheets API
    // const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
    // const data = await response.json()
    // return parseSheetData(data.values)
    
    // For demo, return mock data
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROJECTS), 1000)
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return MOCK_PROJECTS
  }
}

export const getProjectById = async (id) => {
  const projects = await fetchProjectsFromSheets()
  return projects.find(project => project.id === parseInt(id))
}

// Helper function to parse Google Sheets data
const parseSheetData = (rows) => {
  if (!rows || rows.length < 2) return []
  
  const headers = rows[0]
  const projects = []
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]
    const project = {}
    
    headers.forEach((header, index) => {
      project[header.toLowerCase().replace(/\s+/g, '')] = row[index] || ''
    })
    
    projects.push(project)
  }
  
  return projects
} 