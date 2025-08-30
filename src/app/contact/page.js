"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Wasal</h1>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-900 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Section - Contact Information */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                                 <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#25ABCD] to-[#1D3B4B] bg-clip-text text-transparent">
                   Contact With Us
                 </h2>
                <p className="text-gray-600 text-lg">
                  We are here to answer your questions....
                </p>
              </div>

                             {/* Email Information */}
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-[#25ABCD] rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Email us</h3>
                                     <div className="space-y-1">
                     <a href="mailto:Wasal_1@gmail.com" className="text-[#25ABCD] underline block hover:opacity-80">
                       Wasal_1@gmail.com
                     </a>
                     <a href="mailto:Wasal_2@gmail.com" className="text-[#25ABCD] underline block hover:opacity-80">
                       Wasal_2@gmail.com
                     </a>
                   </div>
                </div>
              </div>

                             {/* Phone Information */}
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-[#25ABCD] rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Call us</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">+20 01225385592</p>
                    <p className="text-gray-700">+20 01256478792</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

                    {/* Right Section - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h3>
               
              <form className="space-y-4">
                {/* User Name */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    User name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Contact Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Type your Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Send Button */}
                                 <button
                   type="submit"
                   className="w-full bg-[#448AB1] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-colors shadow-lg hover:shadow-xl"
                 >
                   Send
                 </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
