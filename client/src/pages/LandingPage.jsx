"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateEducation } from "../redux/educationSlice"
import { updateProfile } from "../redux/profileSlice"
import { updateProject } from "../redux/projectSlice"
import { updateExperience } from "../redux/experienceSlice"
import axios from "axios"
import { BASE_URL } from "../api"
import { updateAchievements, updateExtraCoCurricular, updateSkills } from "../redux/extraDetailsSlice"

export default function LandingPage() {
  const currentUser = useSelector((state) => state.user.currentUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getAllResumeData = async () => {
    if (!currentUser?._id || !currentUser.token) return
    try {
      const response = await axios.get(`${BASE_URL}/data/get-all-resume-data?id=${currentUser._id}`, {
        headers: { authorization: currentUser.token },
      })
      const resumeData = response.data.resumeData[0]
      if (resumeData) {
        dispatch(updateProfile(resumeData.profile))
        dispatch(updateEducation(resumeData.education[0]))
        resumeData.projects.forEach((project, index) => {
          Object.keys(project).forEach((field) => {
            dispatch(updateProject({ index, field, value: project[field] }))
          })
        })
        resumeData.experience.forEach((experience, index) => {
          Object.keys(experience).forEach((field) => {
            dispatch(updateExperience({ index, field, value: experience[field] }))
          })
        })
        const { skills, achievements, extraCoCurricular } = resumeData.extraDetails
        Object.keys(skills).forEach((type) => {
          skills[type].forEach((skill, index) => {
            dispatch(updateSkills({ type, index, value: skill }))
          })
        })
        achievements.forEach((achievement, index) => {
          dispatch(updateAchievements({ index, value: achievement }))
        })
        extraCoCurricular.forEach((activity, index) => {
          dispatch(updateExtraCoCurricular({ index, value: activity }))
        })
      }
    } catch (error) {
      console.error("Error in getAllResumeData:", error)
    }
  }

  useEffect(() => {
    getAllResumeData()
  }, [])

  const handleGetStarted = () => navigate("/profile")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            ResumeMaker
          </motion.h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#templates"
              className="text-gray-600 hover:text-blue-600 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Templates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Enhanced Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50,000+ professionals
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Create Professional Resumes That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Get You Hired
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Build compelling resumes with professional templates. Trusted by thousands worldwide. Stand out from the
              crowd with ATS-optimized designs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
            >
              <button
                onClick={handleGetStarted}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Start Building Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="group-hover:text-blue-600 transition-colors duration-300">View Templates</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-500 pt-4 sm:pt-6"
            >
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></div>
                <span className="group-hover:text-gray-700 transition-colors">10,000+ Resumes Created</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></div>
                <span className="group-hover:text-gray-700 transition-colors">ATS Optimized</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></div>
                <span className="group-hover:text-gray-700 transition-colors">Expert Approved</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Right Content - Animated UI Cards */}
          <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <div className="relative w-full h-full max-w-lg mx-auto lg:max-w-none">
              {/* Floating Card 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  rotate: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 z-30"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base">Executive</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">Professional</p>
                  </div>
                  <div className="p-3 sm:p-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  rotate: {
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="absolute top-8 sm:top-12 right-0 w-32 sm:w-40 md:w-48 lg:w-56 z-20"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base">Modern</h3>
                    <p className="text-purple-100 text-xs sm:text-sm">Creative</p>
                  </div>
                  <div className="p-3 sm:p-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 - Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  rotate: {
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-56 z-40"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base">Classic</h3>
                    <p className="text-indigo-100 text-xs sm:text-sm">Traditional</p>
                  </div>
                  <div className="p-3 sm:p-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/5"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg hidden sm:block"
              >
                ✓ ATS Ready
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg hidden sm:block"
              >
                🚀 Professional
              </motion.div>

              {/* Background Geometric Shapes */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-200 rounded-lg opacity-30"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-purple-200 rounded-full opacity-30"
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-1/2 right-1/3 w-8 h-8 bg-indigo-200 rounded-full opacity-40"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Why Choose Us
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
            >
              Why Choose Our Resume Maker?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Professional tools designed to help you land your dream job with cutting-edge technology
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Easy Editor",
                desc: "Intuitive interface with real-time preview and smart suggestions",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🎯",
                title: "ATS-Friendly",
                desc: "Optimized for applicant tracking systems with keyword analysis",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "📄",
                title: "Pro Templates",
                desc: "Hand-crafted designs by industry experts and recruiters",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "💼",
                title: "Industry-Specific",
                desc: "Tailored templates for different roles and career levels",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "📊",
                title: "Analytics",
                desc: "Get detailed insights and improvement recommendations",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "Enterprise-grade security with data encryption and privacy",
                color: "from-teal-500 to-blue-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.desc}</p>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Join 50,000+ Success Stories
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Ready to Build Your Professional Resume?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands who have successfully landed their dream jobs with our professional resume builder
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStarted}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex items-center text-white/80 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ResumeMaker
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional resume building platform trusted worldwide. Create stunning resumes that get you hired.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-gray-200 text-lg">Product</h5>
              <ul className="space-y-3">
                {["Templates", "Resume Maker", "Cover Letters", "LinkedIn Optimizer"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-gray-200 text-lg">Support</h5>
              <ul className="space-y-3">
                {["Help Center", "Contact Us", "FAQ", "Live Chat"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-gray-200 text-lg">Company</h5>
              <ul className="space-y-3">
                {["About Us", "Privacy Policy", "Terms of Service", "Careers"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 ResumeMaker. All rights reserved.</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  All systems operational
                </span>
                <span>Made with ❤️ for job seekers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
