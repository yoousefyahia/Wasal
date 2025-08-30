import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Hidden on mobile */}
      <div className="hidden md:flex w-1/2 bg-[#1E3A8A] relative items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-8">Wasal</h1>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Top Left - Construction Worker */}
          <div className="absolute top-2 left-5 bg-[#1E3A8A] backdrop-blur-sm">
            <Image 
              src="/worker.png" 
              alt="Construction Worker" 
              width={301} 
              height={301}
              className="rounded-2xl"
              priority
              unoptimized
            />
          </div>
          
          {/* Top Right - Factory */}
          <div className="absolute top-5 right-5 bg-[#1E3A8A] backdrop-blur-sm">
            <Image 
              src="/factory.png" 
              alt="Factory" 
              width={300} 
              height={300}
              className="rounded-2xl"
              priority
              unoptimized
            />
          </div>
          
          {/* Bottom Left - Material/Boxes */}
          <div className="absolute bottom-10 left-2 bg-[#1E3A8A] backdrop-blur-sm">
            <Image 
              src="/material.png" 
              alt="Materials" 
              width={300} 
              height={300}
              className="rounded-2xl"
              priority
              unoptimized
            />
          </div>
          
          {/* Bottom Right - Market */}
          <div className="absolute bottom-10 right-2 bg-[#1E3A8A]">
            <Image 
              src="/market.png" 
              alt="Market" 
              width={350} 
              height={350}
              className="rounded-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
        
        {/* Connecting Arrows with arrow.png image */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Top Left Arrow */}
          <div className="absolute top-67 left-40 transform -rotate-5">
            <Image 
              src="/arrow.png" 
              alt="Arrow" 
              width={110} 
              height={120}
              className="opacity-80"
              priority
              unoptimized
            />
          </div>
          
          {/* Top Right Arrow */}
          <div className="absolute top-65 right-50 transform rotate-100">
            <Image 
              src="/arrow.png" 
              alt="Arrow" 
              width={110} 
              height={120}
              className="opacity-80"
              priority
              unoptimized
            />
          </div>
          
          {/* Bottom Left Arrow */}
          <div className="absolute bottom-60 left-45 transform -rotate-10 scale-y-[-1]">
            <Image 
              src="/arrow.png" 
              alt="Arrow" 
              width={130} 
              height={120}
              className="opacity-80"
              priority
              unoptimized
            />
          </div>
          
          {/* Bottom Right Arrow */}
          <div className="absolute bottom-60 right-45 transform rotate-290 scale-y-[-1]">
            <Image 
              src="/arrow.png" 
              alt="Arrow" 
              width={130} 
              height={120}
              className="opacity-80"
              priority
              unoptimized
            />
          </div>
        </div>
        

      </div>

      {/* Right Panel - Sign Up Form */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Welcome to <span className="text-[#1E3A8A]">Wasal</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Sign up</h2>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6">
            {/* Username or Email Field */}
            <div>
              <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your username or email address
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                placeholder="Username or email address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* User Name Field - Left */}
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
                  User name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                  placeholder="User name"
                />
              </div>

              {/* Phone Field - Right */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                  placeholder="phone number..."
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                placeholder="Password"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#448AB1] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-colors focus:ring-2 focus:ring-[#448AB1] focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Have an Account ?{" "}
              <Link
                href="/signin"
                className="text-[#448AB1] hover:opacity-80 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
