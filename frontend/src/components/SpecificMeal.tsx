import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router";
import type { IMeal } from "../types/FormDataTypes";
import InfoCalorie from "./InfoCalorie";
import InterestedMeal from "./InterestedMeal";
import Chatbot from "./Chatbot";
import api from "../helpers/api";

const SpecificMeal = () => {
  const { name } = useParams();
  // console.log(name)
  const fetchMeal = async (): Promise<IMeal> => {
    try {
        // console.log(name)
      const res = await api.get(
        `/meal/${name}`
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
  <>
  <div className="bg-green-50 min-h-screen max-h-fit pt-4">
    <div className="flex flex-col lg:flex-row gap-8 mx-[5%] min-h-fit p-4 sm:p-6 lg:p-10">
      <div className="flex-1 flex flex-col shadow-sm rounded-md bg-white">
        <div className="relative">
          <img
            src={data?.image}
            alt={data?.name || "Meal"}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-t-lg"
          />
          <p className="absolute text-xs sm:text-sm border-none shadow-sm top-3 sm:top-4 left-3 sm:left-4 bg-green-600 text-white rounded-md px-2 py-1">
            {data?.categories}
          </p>
        </div>

        <div className="flex-1 m-4 sm:m-6 flex flex-col gap-y-3">
          <p className="text-xl sm:text-2xl truncate font-bold">{data?.name}</p>
          <p className="text-base sm:text-lg text-gray-500">
            Nutritious meal with balanced macronutrients
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-2">
            <div className="h-24 sm:h-28 bg-green-100 flex flex-col items-center justify-center rounded-md">
              <p>Calories</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {data?.nutritionData?.calories}
              </p>
            </div>
            <div className="h-24 sm:h-28 bg-blue-100 flex flex-col items-center justify-center rounded-md">
              <p>Carbs</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {data?.nutritionData?.carbohydrates}g
              </p>
            </div>
            <div className="h-24 sm:h-28 bg-red-100 flex flex-col items-center justify-center rounded-md">
              <p>Protein</p>
              <p className="text-xl sm:text-2xl font-bold text-red-600">
                {data?.nutritionData?.protein}g
              </p>
            </div>
            <div className="h-24 sm:h-28 bg-yellow-100 flex flex-col items-center justify-center rounded-md">
              <p>Fat</p>
              <p className="text-xl sm:text-2xl font-bold text-yellow-600">
                {data?.nutritionData?.fat}g
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="font-medium text-xl sm:text-2xl">
              Detailed Nutrition
            </h2>

            {[
              ["Calories", `${data?.nutritionData?.calories}g`],
              ["Carbohydrates", `${data?.nutritionData?.carbohydrates}g`],
              ["Protein", `${data?.nutritionData?.protein}g`],
              ["Fat", `${data?.nutritionData?.fat}g`],
              ["Fiber", `${data?.nutritionData?.fiber}g`],
              ["Sugar", `${data?.nutritionData?.sugar}g`],
              ["Sodium", `${data?.nutritionData?.sodium}mg`],
            ].map(([label, value], i) => (
              <p
                key={i}
                className="flex justify-between items-center my-4 sm:my-6 text-sm sm:text-base"
              >
                <span className="text-gray-500">{label}</span>
                <span className="text-black font-medium">{value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8 sm:space-y-10 w-full lg:w-[45%]">
        <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm">
          <InfoCalorie />
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm">
          <InterestedMeal />
        </div>
      </div>
    </div>
  </div>

  {data && <Chatbot data={data} />}
</>

  );
};

export default SpecificMeal;
