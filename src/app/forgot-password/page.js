import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
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

      {/* Right Panel - Forgot Password Form */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Forgot Password?
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Enter your email or phone and we'll send you a link to reset your password
            </p>
          </div>

          {/* Forgot Password Form */}
          <form className="space-y-6">
            {/* Email or Phone Field */}
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your email or phone
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                required
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                placeholder="email or phone"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#448AB1] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-colors focus:ring-2 focus:ring-[#448AB1] focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-8 space-y-3">
            <div>
              <Link
                href="/signin"
                className="text-[#448AB1] hover:opacity-80 font-medium transition-colors"
              >
                ← Back to Sign In
              </Link>
            </div>
            
            <div>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#448AB1] hover:opacity-80 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
