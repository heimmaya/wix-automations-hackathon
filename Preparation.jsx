import React, { useState } from 'react'
import { Play, Book, Code, Users, Calendar, ExternalLink, Download, CheckCircle } from 'lucide-react'

const Preparation = () => {
  const [completedItems, setCompletedItems] = useState(new Set())

  const toggleCompleted = (itemId) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const sessions = [
    {
      id: 1,
      title: "Wix Velo Development Fundamentals",
      description: "Learn the basics of Velo by Wix, including database operations, APIs, and frontend-backend integration.",
      duration: "60 minutes",
      level: "Beginner",
      date: "December 10, 2024",
      time: "2:00 PM PST",
      instructor: "Sarah Chen - Senior Developer Advocate"
    },
    {
      id: 2,
      title: "Advanced Automation Patterns",
      description: "Explore complex automation workflows and integration patterns for scalable solutions.",
      duration: "75 minutes",
      level: "Advanced",
      date: "December 11, 2024",
      time: "3:00 PM PST",
      instructor: "Alex Rodriguez - Principal Engineer"
    }
  ]

  const resources = [
    {
      id: 'docs',
      title: "Wix Developer Documentation", 
      description: "Complete API reference, guides, and tutorials",
      url: "https://dev.wix.com/docs",
      type: "Documentation"
    },
    {
      id: 'velo',
      title: "Velo by Wix",
      description: "Full-stack development platform for creating web applications",
      url: "https://www.wix.com/velo", 
      type: "Platform"
    }
  ]

  const checklist = [
    {
      id: 'setup',
      title: "Development Environment Setup",
      items: [
        "Install Node.js (v16 or higher)",
        "Set up a Wix Developer account", 
        "Create a test Wix site for development",
        "Install your preferred code editor",
        "Set up Git and create a GitHub repository"
      ]
    },
    {
      id: 'apis', 
      title: "API Access & Authentication",
      items: [
        "Generate API keys from Wix Developers console",
        "Test API connectivity with a simple request",
        "Understand OAuth flow for Wix apps",
        "Review rate limiting and best practices"
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'  
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hackathon Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get ready for the Wix Automations Hackathon with these essential resources and training sessions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="h-6 w-6 text-wix-blue mr-3" />
            Pre-Hackathon Training Sessions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getLevelColor(session.level)}`}>
                      {session.level}
                    </span>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{session.date}</div>
                    <div>{session.time}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{session.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {session.duration}</span>
                  <span>Instructor: {session.instructor}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center btn-primary text-sm">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Recording
                  </button>
                  <button className="flex items-center btn-secondary text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Slides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Book className="h-6 w-6 text-wix-orange mr-3" />
            Essential Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="card hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <span className="text-xs bg-wix-blue text-white px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-wix-blue hover:text-blue-700 font-medium text-sm"
                >
                  Visit Resource
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            Preparation Checklist
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {checklist.map((section) => (
              <div key={section.id} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                
                <div className="space-y-3">
                  {section.items.map((item, index) => {
                    const itemId = `${section.id}-${index}`
                    const isCompleted = completedItems.has(itemId)
                    
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                        onClick={() => toggleCompleted(itemId)}
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                          isCompleted 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}>
                          {isCompleted && (
                            <CheckCircle className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          isCompleted 
                            ? 'text-gray-500 line-through' 
                            : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 text-wix-blue mr-3" />
            Community & Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discord Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our Discord server to connect with other participants and get support.
              </p>
              <button className="btn-primary text-sm">
                Join Discord
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get direct help from Wix engineers during dedicated office hours.
              </p>
              <p className="text-sm text-gray-500">Daily 10 AM - 8 PM PST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive documentation and guides for all Wix development tools.
              </p>
              <button className="btn-secondary text-sm">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preparation 