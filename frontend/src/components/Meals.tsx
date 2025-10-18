import { Search } from "lucide-react";
import { useState } from "react";
import { mealCategories, MealType } from "../helpers/constant";
import MealCards from "./MealCards";

const Meals = () => {
  const [mealType, setMealType] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [searchMeals, setSearchMeals] = useState("");

  const handleClearFilter = () => {
    setMealCategory("");
    setMealType("");
    setSearchMeals("");
  };

  return (
    <div className="bg-gray-100 pb-10">
      {/* Header Section */}
      <div className="flex flex-col items-center py-10 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          Explore Our Meals
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-2xl tracking-wide mb-2">
          Discover nutritious and delicious meal options
        </p>
        <h5 className="text-gray-700 text-sm sm:text-base">
          Showing 6 meals per page
        </h5>
      </div>

      {/* Filter Section */}
      <div className="flex justify-center px-4">
        <div className="w-full md:w-[90%] lg:w-[80%]">
          <div className="bg-white w-full flex flex-col sm:flex-row sm:flex-wrap gap-4 p-5 mb-6 rounded-md shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                className="border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-0 w-full rounded-md pl-10 py-2 text-sm sm:text-base"
                placeholder="Search Meals"
                value={searchMeals}
                onChange={(e) => setSearchMeals(e.target.value)}
              />
              <Search className="absolute top-1/2 -translate-y-1/2 text-gray-400 left-3 w-5 h-5" />
            </div>

            {/* Category Dropdown */}
            <select
              value={mealCategory.length > 0 ? mealCategory : mealCategories[0]}
              onChange={(e) => setMealCategory(e.target.value)}
              className="border-gray-300 border-2 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-0 w-full sm:w-[45%] md:w-[20%] rounded-md pl-4 py-2 text-sm sm:text-base"
            >
              {mealCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Meal Type Dropdown */}
            <select
              value={mealType.length > 0 ? mealType : MealType[0]}
              onChange={(e) => setMealType(e.target.value)}
              className="border-gray-300 border-2 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-0 w-full sm:w-[45%] md:w-[20%] rounded-md pl-4 py-2 text-sm sm:text-base"
            >
              {MealType.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Clear Filter Button */}
            <button
              onClick={handleClearFilter}
              className="border-gray-300 border-2 hover:bg-gray-100 px-4 sm:px-5 py-2 rounded-md font-medium w-full sm:w-auto text-sm sm:text-base transition-all duration-300"
            >
              Clear Filter
            </button>
          </div>

          {/* Meal Cards */}
          <MealCards
            searchMeals={searchMeals}
            mealType={mealType}
            mealCategory={mealCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Meals;
