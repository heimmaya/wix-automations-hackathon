import React from 'react'
import { Clock, Users, Trophy, FileText, AlertCircle, CheckCircle, Target, Star } from 'lucide-react'

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hackathon Guidelines & Rules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to participate in the Wix Automations Hackathon. 
            Please read carefully before registering.
          </p>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-wix-blue mr-3" />
              <h3 className="text-lg font-semibold">Timeline</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Registration Opens:</strong> November 15, 2024</li>
              <li><strong>Registration Closes:</strong> December 10, 2024</li>
              <li><strong>Hackathon Starts:</strong> December 15, 2024 (9:00 AM PST)</li>
              <li><strong>Submission Deadline:</strong> December 17, 2024 (6:00 PM PST)</li>
              <li><strong>Results Announced:</strong> December 20, 2024</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-wix-orange mr-3" />
              <h3 className="text-lg font-semibold">Team Requirements</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>Teams can have 1-4 members</li>
              <li>Individual participation is allowed</li>
              <li>All team members must register</li>
              <li>Teams can be formed before or during the event</li>
              <li>Remote participation is encouraged</li>
            </ul>
          </div>
        </div>

        {/* Eligibility */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            Eligibility Criteria
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Who Can Participate:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Developers, designers, and product managers</li>
                <li>• Students and professionals (18+ years old)</li>
                <li>• Anyone passionate about automation</li>
                <li>• International participants welcome</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Restrictions:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wix employees cannot win prizes</li>
                <li>• Must use Wix platform and APIs</li>
                <li>• Previously submitted projects not allowed</li>
                <li>• AI-generated code must be disclosed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="h-6 w-6 text-wix-blue mr-3" />
            Competition Rules
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Development Requirements:</h3>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>1. All code must be written during the hackathon period (48 hours)</li>
                <li>2. Projects must integrate with Wix platform using official APIs</li>
                <li>3. Use of existing libraries and frameworks is allowed</li>
                <li>4. Teams can use design assets and mockups prepared before the event</li>
                <li>5. Final submission must include working demo and source code</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Submission Requirements:</h3>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>1. Working demo accessible via URL</li>
                <li>2. Source code repository (GitHub/GitLab)</li>
                <li>3. README with setup instructions</li>
                <li>4. 3-minute demo video</li>
                <li>5. Brief project description (max 500 words)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Code of Conduct:</h3>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>1. Respectful and inclusive behavior towards all participants</li>
                <li>2. No harassment, discrimination, or inappropriate conduct</li>
                <li>3. Collaborative and supportive environment</li>
                <li>4. Fair play - no cheating or plagiarism</li>
                <li>5. Follow Wix community guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="h-6 w-6 text-wix-purple mr-3" />
            Judging Criteria
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation (25%)</h3>
                  <p className="text-gray-600 text-sm">Creativity and novel approach to solving challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Technical Excellence (25%)</h3>
                  <p className="text-gray-600 text-sm">Code quality and effective use of Wix APIs.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">User Experience (20%)</h3>
                  <p className="text-gray-600 text-sm">Design and usability of the solution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Impact (20%)</h3>
                  <p className="text-gray-600 text-sm">Potential to benefit users and community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-wix-orange mr-3" />
            Prizes & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">🥇</div>
              <h3 className="font-semibold text-gray-900 mb-2">Grand Prize</h3>
              <p className="text-orange-600 font-semibold text-lg mb-2">$20,000</p>
              <p className="text-sm text-gray-600">+ Wix Pro accounts for 2 years</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">🥈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Second Place</h3>
              <p className="text-blue-600 font-semibold text-lg mb-2">$12,000</p>
              <p className="text-sm text-gray-600">+ Wix Pro accounts for 1 year</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">🥉</div>
              <h3 className="font-semibold text-gray-900 mb-2">Third Place</h3>
              <p className="text-yellow-600 font-semibold text-lg mb-2">$8,000</p>
              <p className="text-sm text-gray-600">+ Wix Pro accounts for 6 months</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-3">Special Awards:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <span className="font-medium text-purple-700">Best Innovation Award</span>
                <p className="text-purple-600">$3,000 + Recognition</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <span className="font-medium text-green-700">People's Choice Award</span>
                <p className="text-green-600">$2,000 + Community Recognition</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
                <span className="font-medium text-pink-700">Best Student Team</span>
                <p className="text-pink-600">$1,500 + Internship Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
            Important Notes
          </h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Mandatory Requirements</h3>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Projects must be submitted before the deadline</li>
              <li>• All team members must be registered</li>
              <li>• Demo video is required for judging</li>
              <li>• Source code must be publicly accessible</li>
            </ul>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Intellectual Property:</h3>
              <p className="text-sm">Participants retain ownership of their creations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Support & Mentorship:</h3>
              <p className="text-sm">Mentors available via Discord during hackathon hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidelines 
