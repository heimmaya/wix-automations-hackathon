import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Users, Trophy, Calendar, Target, Lightbulb } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wix Automations
            <span className="block text-yellow-300">Hackathon 2024</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Build the future of website automation. Create innovative solutions that make 
            website management effortless and empower millions of users worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-white text-wix-blue rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/guidelines"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-wix-blue transition-colors duration-200"
            >
              Read Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-wix-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Duration</h3>
              <p className="text-gray-600">48 hours of intense coding</p>
              <p className="text-sm text-gray-500">December 15-17, 2024</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-wix-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prize Pool</h3>
              <p className="text-gray-600">$50,000 in prizes</p>
              <p className="text-sm text-gray-500">Plus Wix Pro accounts</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-wix-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Size</h3>
              <p className="text-gray-600">1-4 developers per team</p>
              <p className="text-sm text-gray-500">Individual participation allowed</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Build Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from exciting automation challenges that will shape the future of web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-wix-blue mr-3" />
                <h3 className="text-xl font-semibold">Smart Content Generation</h3>
              </div>
              <p className="text-gray-600">
                Build AI-powered tools that automatically generate and optimize website content
                based on user preferences and industry best practices.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-wix-orange mr-3" />
                <h3 className="text-xl font-semibold">Workflow Automation</h3>
              </div>
              <p className="text-gray-600">
                Create intelligent automation workflows that streamline repetitive tasks
                and improve user productivity across different industries.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-wix-purple mr-3" />
                <h3 className="text-xl font-semibold">Personalization Engine</h3>
              </div>
              <p className="text-gray-600">
                Develop smart personalization features that adapt website experiences
                based on visitor behavior and preferences.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center text-lg px-8 py-3"
            >
              See All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wix-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of developers in creating automation solutions that will impact millions of users
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/preparation"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-white text-wix-blue rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Prepared
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-wix-blue transition-colors duration-200"
            >
              Choose Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
