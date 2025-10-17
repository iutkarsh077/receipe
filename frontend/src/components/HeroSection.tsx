import { Star } from 'lucide-react'
import { avatars } from '../helpers/constant'

const HeroSection = () => {
  return (
    <div className=" px-4   py-8">
        <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 mb-12 rounded-3xl bg-gradient-to-br from-green-50 min-h-screen via-blue-50 to-purple-50 shadow-lg border border-green-100">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/10002.png" alt="" className="w-full h-full opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
          </div>

          <div className="absolute w-full h-[80%] items-center flex justify-center">
            <div className="w-[80%] flex gap-x-5 ">
              <div className="w-[50%] pt-7 px-9 ">
                <p className="bg-green-500 text-white rounded-2xl font-medium px-4 py-2 inline-flex">
                  Know your meal plate!
                </p>
                <p className="flex gap-x-4 flex-wrap">
                  <span className="text-green-700 text-7xl font-bold">
                    Sharpen
                  </span>
                  <span className="text-cyan-700 text-7xl font-bold">Your</span>
                  <span className=" bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent text-7xl font-bold">
                    Calorie Counting Skills
                  </span>
                </p>
                <p className="flex-wrap font-medium text-xl mt-6">
                  This platform uses AI to generate both meal plate images and
                  ingredient-based calorie estimates—helping you build quick,
                  confident portion awareness
                </p>

                <div className="flex items-center gap-6 mt-10">
                  <div className="flex items-center justify-center -space-x-2">
                    {avatars.map((avatar) => (
                      <div
                        key={avatar.id}
                        className={`${avatar.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      >
                        {avatar.initials}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <h2 className="text-sm font-medium text-slate-900">
                      1000+ Happy Users
                    </h2>

                    <div className="flex ">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] px-7">
                <div
                  className="bg-green-100 w-full h-full rounded-3xl shadow-sm "
                  style={{
                    animation: "float 2s ease-in-out infinite",
                  }}
                >
                  <img src="/10007.jpg" alt="ss" className="p-5 rounded-3xl border-4 border-white" />
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
          </div>
        </div>
      </div>
  )
}

export default HeroSection
