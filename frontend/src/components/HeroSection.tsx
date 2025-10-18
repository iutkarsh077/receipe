import { Star } from "lucide-react";
import { avatars } from "../helpers/constant";

const HeroSection = () => {
  return (
    <div className="px-4 py-8">
      <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 mb-12 rounded-3xl bg-gradient-to-br from-green-50 min-h-[80vh] via-blue-50 to-purple-50 shadow-lg border border-green-100">
        {/* Background image overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/10002.png"
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-10 px-6 lg:px-16">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-5">
            <p className="bg-green-500 text-white rounded-2xl font-medium px-4 py-2 inline-flex self-start">
              Know your meal plate!
            </p>

            <div className="mt-4 space-y-2">
              <h1 className="text-green-700 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Sharpen <span className="text-cyan-700">Your</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Calorie Counting Skills
                </span>
              </h1>
            </div>

            <p className="font-medium text-gray-700 text-base sm:text-lg mt-6 leading-relaxed">
              This platform uses AI to generate both meal plate images and
              ingredient-based calorie estimates — helping you build quick,
              confident portion awareness.
            </p>

            {/* Avatars and rating */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center -space-x-2">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className={`${avatar.color} w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-sm font-medium text-slate-900">
                  1000+ Happy Users
                </h2>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="bg-green-100 w-full max-w-md rounded-3xl shadow-md"
              style={{
                animation: "float 2s ease-in-out infinite",
              }}
            >
              <img
                src="/10007.jpg"
                alt="Meal"
                className="p-5 rounded-3xl border-4 border-white w-full object-cover"
              />
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default HeroSection;
