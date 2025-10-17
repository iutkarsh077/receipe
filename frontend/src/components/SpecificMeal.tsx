import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router";
import type { IMeal } from "../types/FormDataTypes";
import InfoCalorie from "./InfoCalorie";
import InterestedMeal from "./InterestedMeal";

const SpecificMeal = () => {
  const { name } = useParams();
  // console.log(name)
  const fetchMeal = async (): Promise<IMeal> => {
    try {
        // console.log(name)
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/meal/${name}`
      );
      // console.log(res)
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  const { data, isLoading, isError, error, refetch } = useQuery<IMeal>({
    queryKey: ["meal", name],
    queryFn: fetchMeal,
    retry: 2
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );
  }

  if (isError)
    return (
      <div className="flex flex-col gap-y-3 items-center justify-center min-h-96">
        <p>Error: {error.message}</p>
        <button
          className="bg-green-600 text-white px-6 rounded-md py-3"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );
  return (
    <div className="bg-green-50 min-h-screen max-h-fit pt-4">
      <div className="flex gap-x-8 mx-[6%] min-h-fit p-10">
        <div className="flex-1 flex flex-col shadow-sm rounded-md bg-white">
          <div className="relative">
            <img
              src={data?.image}
              alt={data?.name || "Meal"}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            <p className="absolute text-sm border-none shadow-sm top-4 left-4 bg-green-600 text-white rounded-md px-2 py-1">
              {data?.categories}
            </p>
          </div>
          <div className=" flex-1 m-6 flex gap-y-3 flex-col">
            <p className="text-2xl truncate font-bold">{data?.name}</p>
            <p className="text-lg text-gray-500">
              Nutritious meal with balanced macronutrients
            </p>

            <div className="grid grid-cols-2 gap-6 mt-2">
              <p className="h-28 bg-green-100 flex flex-col items-center justify-center rounded-md">
                <p>Calories</p>
                <p className="text-2xl font-bold text-green-600">
                  {data?.nutritionData?.calories}
                </p>
              </p>
              <p className="h-28 bg-blue-100 flex flex-col items-center justify-center rounded-md">
                Carbs{" "}
                <p className="text-2xl font-bold text-blue-600">
                  {data?.nutritionData?.carbohydrates}g
                </p>
              </p>
              <p className="h-28 bg-red-100 flex flex-col items-center justify-center rounded-md">
                Protein
                <p className="text-2xl font-bold text-red-600">
                  {data?.nutritionData?.protein}g
                </p>
              </p>
              <p className="h-28 bg-yellow-100 flex flex-col items-center justify-center rounded-md">
                Fat
                <p className="text-2xl font-bold text-yellow-600">
                  {data?.nutritionData?.fat}g
                </p>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="font-medium text-2xl">Detailed Nutrition</h2>
              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Calories</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.calories}g
                </span>
              </p>
              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Carbohydrates</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.carbohydrates}g
                </span>
              </p>
              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Protein</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.protein}g
                </span>
              </p>

              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Fat</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.fat}g
                </span>
              </p>

              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Fiber</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.fiber}g
                </span>
              </p>

              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Sugar</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.sugar}g
                </span>
              </p>

              <p className="flex justify-between items-center my-6">
                <span className="text-gray-500">Sodium</span>
                <span className="text-black font-medium ">
                  {data?.nutritionData?.sodium}mg
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 w-[50%]">
            <p className=" bg-white p-8 max-h-fit rounded-md shadow-sm"><InfoCalorie /></p>
          <p className=" bg-white p-8 max-h-fit rounded-md shadow-sm"> <InterestedMeal/></p>
        </div>
      </div>
    </div>
  );
};

export default SpecificMeal;
