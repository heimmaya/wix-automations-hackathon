import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Plus, Minus, User, Mail, FileText, Palette, Send, ArrowLeft } from 'lucide-react'
import { getProjectById } from '../utils/sheetsApi'

const Registration = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    teamName: '',
    teamMembers: [
      { name: '', email: '', role: '', experience: '' }
    ],
    projectDescription: '',
    technicalApproach: '',
    designConcept: '',
    whyThisProject: '',
    additionalNotes: ''
  })

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await getProjectById(projectId)
        setProject(projectData)
      } catch (error) {
        console.error('Error loading project:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadProject()
  }, [projectId])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTeamMemberChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }))
  }

  const addTeamMember = () => {
    if (formData.teamMembers.length < (project?.maxTeamSize || 4)) {
      setFormData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, { name: '', email: '', role: '', experience: '' }]
      }))
    }
  }

  const removeTeamMember = (index) => {
    if (formData.teamMembers.length > 1) {
      setFormData(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.filter((_, i) => i !== index)
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      console.log('Registration data:', { projectId, ...formData })
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting registration:', error)
      alert('Error submitting registration. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wix-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-8">The requested project could not be found.</p>
          <button
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering for <strong>{project.title}</strong>. 
              We've received your application and will be in touch soon with next steps.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/projects')}
                className="w-full btn-primary"
              >
                View Other Projects
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full btn-secondary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-wix-blue hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Register for: {project.title}
            </h1>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Category: {project.category}</span>
              <span>Difficulty: {project.difficulty}</span>
              <span>Max Team Size: {project.maxTeamSize}</span>
              <span>Time: {project.estimatedTime}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <User className="h-5 w-5 mr-2 text-wix-blue" />
              Team Information
            </h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                required
                value={formData.teamName}
                onChange={(e) => handleInputChange('teamName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                placeholder="Enter your team name"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
                {formData.teamMembers.length < project.maxTeamSize && (
                  <button
                    type="button"
                    onClick={addTeamMember}
                    className="flex items-center text-wix-blue hover:text-blue-700 text-sm"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Member
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">
                        Member {index + 1} {index === 0 && '(Team Lead)'}
                      </h4>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeTeamMember(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={member.name}
                          onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={member.email}
                          onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Role
                        </label>
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                          placeholder="e.g., Frontend Developer, Designer"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Experience Level
                        </label>
                        <select
                          value={member.experience}
                          onChange={(e) => handleTeamMemberChange(index, 'experience', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                        >
                          <option value="">Select experience level</option>
                          <option value="beginner">Beginner (0-2 years)</option>
                          <option value="intermediate">Intermediate (2-5 years)</option>
                          <option value="advanced">Advanced (5+ years)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-wix-blue" />
              Project Approach
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                  placeholder="Describe your approach to solving this challenge..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Technical Approach *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.technicalApproach}
                  onChange={(e) => handleInputChange('technicalApproach', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                  placeholder="Explain your technical strategy and implementation plan..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why This Project? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.whyThisProject}
                  onChange={(e) => handleInputChange('whyThisProject', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                  placeholder="Why did you choose this project? What excites you about it?"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Palette className="h-5 w-5 mr-2 text-wix-blue" />
              Design & User Experience
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Design Concept *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.designConcept}
                  onChange={(e) => handleInputChange('designConcept', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                  placeholder="Describe your UI/UX approach and user experience strategy..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wix-blue focus:border-transparent"
                  placeholder="Any additional information or questions..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Registration
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/projects')}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              By submitting this registration, you agree to the hackathon terms and conditions.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration 