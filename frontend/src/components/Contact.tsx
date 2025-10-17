import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Twitter, Facebook, Github, Linkedin, ChevronDown } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const messageLength = formData.message.length
  const maxLength = 500

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond to all inquiries within 24-48 business hours.",
    },
    {
      question: "Do you offer personalized meal plans?",
      answer:
        "Yes, we offer customized meal plans based on your dietary preferences, restrictions, and nutritional goals.",
    },
    {
      question: "How can I report an issue with the website?",
      answer:
        "You can report any technical issues through this contact form or by emailing our support team directly at support@calorieconscious.com.",
    },
    {
      question: "Are you hiring?",
      answer:
        "We're always looking for talented individuals to join our team. Please send your resume and cover letter to careers@calorieconscious.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg">Have questions? We'd love to hear from you.</p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={maxLength}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Your message here..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {messageLength}/{maxLength} characters
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </div>

            {/* Privacy Policy */}
            <div className="text-center text-sm text-gray-600 pt-4">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-green-600 hover:text-green-700 underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 hover:text-green-700 underline">
                Cookie Policy
              </a>
              .
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">support@calorie.com</p>
          </div>

          {/* Phone Card */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          {/* Location Card */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Nutrition Street</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-green-600 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-green-600 transition-transform duration-200 flex-shrink-0 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
