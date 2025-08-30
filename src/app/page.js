import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Hidden on mobile */}
      <div className="hidden md:flex w-full md:w-1/2 bg-[#1E3A8A] relative items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-8">Wasal</h1>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Top Left - Construction Worker */}
          <div className="absolute top-2 left-5 bg-[#1E3A8A] backdrop-blur-sm  ">
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
          <div className="absolute top-5 right-5 bg-[#1E3A8A] backdrop-blur-sm ">
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
          <div className="absolute bottom-10 left-2 bg-[#1E3A8A] backdrop-blur-sm ">
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
          <div className="absolute bottom-10 right-2 bg-[#1E3A8A] ">
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

      {/* Right Panel - Welcome Content */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-md text-center">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
             Welcome to <span className="text-[#1E3A8A] font-semibold">Wasal</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Your comprehensive platform for construction and logistics management
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <Link 
              href="/signin"
              className="w-full bg-[#448AB1] text-white py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-colors inline-block"
            >
              Sign in
            </Link>
            
            <Link 
              href="/signup"
              className="w-full border border-[#448AB1] text-[#448AB1] py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#448AB1] hover:text-white transition-colors inline-block"
            >
              Create Account
            </Link>
          </div>

          {/* Features Preview */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">What you can do with Wasal:</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
              <p>• Manage construction projects efficiently</p>
              <p>• Track materials and inventory</p>
              <p>• Coordinate with workers and suppliers</p>
              <p>• Monitor market trends and pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
