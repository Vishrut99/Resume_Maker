import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateEducation } from "../redux/educationSlice";
import { updateProfile } from "../redux/profileSlice";
import { updateProject } from "../redux/projectSlice";
import { updateExperience } from "../redux/experienceSlice";
import axios from "axios";
import { BASE_URL } from "../api";
import { updateAchievements, updateExtraCoCurricular, updateSkills } from "../redux/extraDetailsSlice";

export default function LandingPage() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAllResumeData = async () => {
    if (!currentUser?._id || !currentUser.token) return;
    
    try {
      const response = await axios.get(`${BASE_URL}/data/get-all-resume-data?id=${currentUser._id}`, {
        headers: { authorization: currentUser.token },
      });
      const resumeData = response.data.resumeData[0];
      
      if (resumeData) {
        dispatch(updateProfile(resumeData.profile));
        dispatch(updateEducation(resumeData.education[0]));
        
        resumeData.projects.forEach((project, index) => {
          Object.keys(project).forEach((field) => {
            dispatch(updateProject({ index, field, value: project[field] }));
          });
        });

        resumeData.experience.forEach((experience, index) => {
          Object.keys(experience).forEach((field) => {
            dispatch(updateExperience({ index, field, value: experience[field] }));
          });
        });

        const { skills, achievements, extraCoCurricular } = resumeData.extraDetails;
        
        Object.keys(skills).forEach((type) => {
          skills[type].forEach((skill, index) => {
            dispatch(updateSkills({ type, index, value: skill }));
          });
        });

        achievements.forEach((achievement, index) => {
          dispatch(updateAchievements({ index, value: achievement }));
        });

        extraCoCurricular.forEach((activity, index) => {
          dispatch(updateExtraCoCurricular({ index, value: activity }));
        });
      }
    } catch (error) {
      console.error("Error in getAllResumeData:", error);
    }
  };

  useEffect(() => {
    getAllResumeData();
  }, []);

  const handleGetStarted = () => navigate("/profile");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">ResumeBuilder</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-slate-600 hover:text-slate-800">Features</a>
            <a href="#templates" className="text-slate-600 hover:text-slate-800">Templates</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-800">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-slate-800"
            >
              Create Professional Resumes That <span className="text-blue-600">Get You Hired</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600"
            >
              Build compelling resumes with professional templates. Trusted by thousands worldwide.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Building Resume
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors">
                View Templates
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>10,000+ Resumes Created</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Expert Approved</span>
              </div>
            </motion.div>
          </div>

          {/* Resume Previews */}
          <div className="relative h-80 lg:h-96">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 left-0 z-30"
            >
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden w-36 md:w-48">
                <img src={img1} alt="Executive Template" className="w-full h-44 md:h-60 object-cover" />
                <div className="p-2 md:p-3 bg-slate-50">
                  <h3 className="text-xs md:text-sm font-semibold text-slate-800">Executive</h3>
                  <p className="text-xs text-slate-600">Clean & Professional</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-8 right-8 z-20"
            >
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden w-32 md:w-44">
                <img src={img2} alt="Modern Template" className="w-full h-40 md:h-56 object-cover" />
                <div className="p-2 md:p-3 bg-slate-50">
                  <h3 className="text-xs md:text-sm font-semibold text-slate-800">Modern</h3>
                  <p className="text-xs text-slate-600">Creative & Elegant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-0 left-12 z-10"
            >
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden w-34 md:w-46">
                <img src={img3} alt="Classic Template" className="w-full h-42 md:h-58 object-cover" />
                <div className="p-2 md:p-3 bg-slate-50">
                  <h3 className="text-xs md:text-sm font-semibold text-slate-800">Classic</h3>
                  <p className="text-xs text-slate-600">Traditional & Formal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Why Choose Our Resume Builder?</h3>
            <p className="text-lg md:text-xl text-slate-600">Professional tools designed to help you land your dream job</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📝", title: "Easy Editor", desc: "Intuitive interface with real-time preview" },
              { icon: "🎯", title: "ATS-Friendly", desc: "Optimized for tracking systems" },
              { icon: "📄", title: "Pro Templates", desc: "Hand-crafted designs" },
              { icon: "💼", title: "Industry-Specific", desc: "Tailored for different roles" },
              { icon: "📊", title: "Analytics", desc: "Get improvement insights" },
              { icon: "🔒", title: "Secure", desc: "Enterprise-grade security" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Your Professional Resume?</h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8">Join thousands who have successfully landed their dream jobs</p>
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ResumeBuilder</h4>
              <p className="text-slate-300 text-sm">Professional resume building platform trusted worldwide.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Builder</a></li>
                <li><a href="#" className="hover:text-white">Cover Letters</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 ResumeBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}