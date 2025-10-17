import { Search } from "lucide-react";
import { useState } from "react";
import { mealCategories, MealType } from "../helpers/constant";
import MealCards from "./MealCards";

const Meals = () => {
  const [mealType, setMealType] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [searchMeals, setSearchMeals] = useState("");


  const handleClearFilter = () =>{
    setMealCategory("");
    setMealType("");
    setSearchMeals("")
  }
  return (
    <div className="bg-gray-100 pb-10">
      <div className="flex flex-col items-center py-12">
        <h2 className="text-5xl font-extrabold mb-4">Explore Our Meals</h2>
        <p className="text-gray-500 text-2xl tracking-wide mb-2">
          Discover nutritious and delicious meal options
        </p>
        <h5 className="text-gray-700">Showing 6 meals per page</h5>
      </div>

      <div className="flex justify-center ">
        <div className="w-[80%]">
          <div className="bg-white w-full flex gap-x-4 p-5 mb-3 rounded-md shadow-xs">
            <div className="flex-1 flex relative">
              <input
                type="text"
                className="border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-0 flex-1 rounded-md pl-10"
                placeholder="Search Meals"
                value={searchMeals}
                onChange={(e)=>setSearchMeals(e.target.value)}
              />
              <Search className="absolute top-1/5 text-gray-400 left-3" />
            </div>
            <select
              name="car"
              value={mealCategory.length > 0 ? mealCategory : mealCategories[0]}
              onChange={(e) => setMealCategory(e.target.value)}
              className="border-gray-300 border-2 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-0 w-[15%] rounded-md pl-4"
            >
              {mealCategories.map((category, index) => (
                <option
                  key={index}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

            <select
              name="meal"
              value={mealType.length > 0 ? mealType : MealType[0]}
               onChange={(e) => setMealType(e.target.value)}
              className="border-gray-300 border-2 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-0 w-[15%] rounded-md pl-4"
            >
              {MealType.map((type, index) => (
                <option
                  value={type}
                  key={index}
                >
                  {type}
                </option>
              ))}
            </select>

            <button onClick={handleClearFilter} className="border-gray-300 border-2 hover:bg-gray-100 px-5 py-2 rounded-md font-medium hover:cursor-pointer w-[10%]">
              Clear Filter
            </button>
          </div>
          <MealCards searchMeals={searchMeals} mealType={mealType}  mealCategory={mealCategory} />
        </div>
      </div>
    </div>
  );
};

export default Meals;
