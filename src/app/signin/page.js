import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#1E3A8A] relative flex items-center justify-center">
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

      {/* Right Panel - Sign In Form */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back to <span className="text-[#1E3A8A]">Wasal</span>
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {/* Sign In Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448AB1] focus:border-transparent transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-3 w-3 text-[#448AB1] focus:ring-[#448AB1] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#448AB1] hover:opacity-80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#448AB1] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-colors focus:ring-2 focus:ring-[#448AB1] focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Sign In Buttons */}
          <div className="flex items-center gap-2">
            {/* Google Button */}
            <button className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm h-12">
              <img src="/google.png" alt="Google" className="w-8 h-8 mr-2 bg-transparent" />
              Sign in with Google
            </button>
            
            {/* Facebook Button */}
            <button className="flex-shrink-0 flex items-center justify-center p-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-12 h-12">
              <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
            </button>
            
            {/* Apple Button */}
            <button className="flex-shrink-0 flex items-center justify-center p-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-12 h-12">
              <img src="/appel.png" alt="Apple" className="w-8 h-8" />
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
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
      </div>
    </div>
  );
}
