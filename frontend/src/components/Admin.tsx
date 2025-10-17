import { useEffect, useState } from "react";
import type { INutritionTypes } from "../types/FormDataTypes";
import { MealType } from "../helpers/constant";
import { ChevronDown } from "lucide-react";
import axios from "axios";

const Admin = () => {
  const [nutritionData, setNutritionData] = useState<INutritionTypes>({
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
  });
  const [dishName, setDishName] = useState("");
  const [dishTitle, setDishTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [mealType, setMealType] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [openMealDropDown, setOpenMealDropDown] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(()=>{
    if(image === null) return;
    const objectUrl = URL.createObjectURL(image);
    setPreviewImage(objectUrl);

    return ()=>{
      URL.revokeObjectURL(objectUrl);
    }
  }, [image])

  const handleNutritionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNutritionData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(!e.target.files) return;
    const file = e.target.files[0];
    setImage(file)
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  const formData = new FormData();
  formData.append("nutritionData", JSON.stringify(nutritionData));
  formData.append("dishName", dishName);
  formData.append("dishTitle", dishTitle);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("mealType", mealType);
  formData.append("createdBy", createdBy);

  if (image) {
    formData.append("image", image);
  }

  try {
     await axios.post(`${import.meta.env.VITE_BASE_URL}/save`, formData);
    // console.log("Upload successful:", res);
  } catch (error) {
    console.error("Error uploading meal:", error);
  }
};


  return (
    <div className="mt-10 mb-20">
      <form className="mx-[4%] space-y-5">
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500">
            Nutrition Info
          </h2>
          <div className="grid grid-cols-4 gap-x-5">
            <div className="flex flex-col">
              <label htmlFor="calories" className="mb-1  font-medium">
                Calories
              </label>
              <input
                type="number"
                name="calories"
                id="calories"
                min={0}
                step={0.1}
                value={nutritionData.calories}
                onChange={handleNutritionChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="carbohydrates" className="mb-1 font-medium">
                Carbohydrates
              </label>
              <input
                type="number"
                min={0}
                step={0.1}
                name="carbohydrates"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={nutritionData.carbohydrates}
                onChange={handleNutritionChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Protein" className="mb-1 font-medium">
                Protein
              </label>
              <input
                type="number"
                min={0}
                step={0.1}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                name="protein"
                value={nutritionData.protein}
                onChange={handleNutritionChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fat" className="mb-1 font-medium">
                Fat
              </label>
              <input
                type="number"
                min={0}
                step={0.1}
                name="fat"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={nutritionData.fat}
                onChange={handleNutritionChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fiber" className="mb-1 font-medium">
                Fiber
              </label>
              <input
                type="number"
                min={0}
                step={0.1}
                name="fiber"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={nutritionData.fiber}
                onChange={handleNutritionChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Sugar" className="mb-1 font-medium">
                Sugar
              </label>
              <input
                type="number"
                min={0}
                step={0.1}
                name="sugar"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={nutritionData.sugar}
                onChange={handleNutritionChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sodium" className="mb-1 font-medium">
                Sodium
              </label>
              <input
                type="number"
                min={0}
                name="sodium"
                step={0.1}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={nutritionData.sodium}
                onChange={handleNutritionChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Name" className="mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={dishTitle}
            onChange={(e) => setDishTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 font-medium">
            Description
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 font-medium">
            Category
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="meal-type" className="mb-1 font-medium">
            Meal Type
            <div
              className="border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between duration-300 transition-all ease-in-out relative"
              onClick={() => setOpenMealDropDown(!openMealDropDown)}
            >
              <p className="px-4">{mealType.length > 0 ? mealType : "Select your meal"}</p>
              <ChevronDown
                className={`mx-4 transition-all duration-300 ease-in-out ${openMealDropDown ? "rotate-0" : "rotate-180"}`}
              />
              <div
                className={`${
                  openMealDropDown ? "flex flex-col absolute top-[110%] w-full bg-zinc-200 rounded-md " : "hidden"
                }`}
              >
                {MealType.map((meal, index) => (
                  <div onClick={()=>setMealType(meal)} key={index} className="hover:bg-gray-100 w-full duration-300 ease-in-out transition-all py-3 pl-4 hover:cursor-pointer">{meal}</div>
                ))}
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="created-by" className="mb-1 font-medium">
            Created By
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="created-by" className="mb-1 font-medium">
            Upload Image
          </label>
          <input
            type="file"
            accept=".jpg .png .jpeg"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            onChange={handleImageChange}
          />
        </div>
          <div className="flex justify-between items-start">
                {
                  previewImage && (
                    <img src={previewImage} className="w-auto h-60 object-cover inline-flex" alt="Image" />
                  )
                }
          <button className="bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out transition-all px-5 py-3 font-medium rounded-md text-white hover:cursor-pointer" onClick={handleSubmit}>Create Recipe</button>
          </div>
      </form>
    </div>
  );
};

export default Admin;
