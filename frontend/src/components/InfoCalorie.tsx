const InfoCalorie = () => {
  return (
   <div className="">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">How Much Calories You Need?</h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-6">
        Caloric needs vary depending on age, sex, activity level, and overall health.
      </p>

      {/* Men's Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">How Many Calories Does a Man Need Daily?</h2>

        <p className="text-gray-700 mb-4">
          According to the{" "}
          <span className="font-semibold text-gray-900">U.S. Department of Health and Human Services</span> (Dietary
          Guidelines for Americans, 2020–2025):
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Sedentary adult men:</span>
            <span className="font-semibold text-blue-600">2,000–2,400 kcal/day</span>
          </div>
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Moderately active men:</span>
            <span className="font-semibold text-blue-600">2,200–2,800 kcal/day</span>
          </div>
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Active men:</span>
            <span className="font-semibold text-blue-600">2,400–3,000 kcal/day</span>
          </div>
        </div>
      </div>

      {/* Women's Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">How Many Calories Does a Woman Need Daily?</h2>

        <div className="space-y-2">
          <div className="flex justify-between items-center bg-pink-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Sedentary adult women:</span>
            <span className="font-semibold text-pink-600">1,600–2,000 kcal/day</span>
          </div>
          <div className="flex justify-between items-center bg-pink-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Moderately active women:</span>
            <span className="font-semibold text-pink-600">1,800–2,200 kcal/day</span>
          </div>
          <div className="flex justify-between items-center bg-pink-50 p-4 rounded">
            <span className="font-semibold text-gray-900">Active women:</span>
            <span className="font-semibold text-pink-600">2,000–2,400 kcal/day</span>
          </div>
        </div>
      </div>

      {/* Reference Section */}
      <div className="border-l-4 border-gray-400 pl-4 py-2">
        <p className="text-gray-600 italic">
          <span className="font-semibold">Reference:</span> Dietary Guidelines for Americans, 2020–2025 – Chapter 1
        </p>
      </div>
    </div>
  )
}

export default InfoCalorie
