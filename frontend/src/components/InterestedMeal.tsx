import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { IMeal } from "../types/FormDataTypes";
import { Loader2 } from "lucide-react";
import api from "../helpers/api";

const InterestedMeal = () => {
  const navigate = useNavigate();
const { name } = useParams();
  const fetchInterestedMeals = async () => {
    try {
      const res = await api.get(
        `/interested-meal`
      );
      // console.log(res.data.data)
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { data, isLoading, refetch, isError, error } = useQuery<IMeal[]>({
    queryKey: ["interested-meal", name],
    queryFn: fetchInterestedMeals,
    retry: 2,
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
    <div className="rounded-md shadow-sm">
      <p className="text-xl font-medium mb-6">You May Also Like</p>
      <div className="grid grid-cols-2 gap-4">
        {Array.isArray(data) && data?.map((meal, index) => (
          <div
            key={index}
            className="relative rounded-md group overflow-hidden"
          >
            <img
              src={meal?.image}
              onClick={() => navigate(`/meal/${meal.slug}`)}
              alt={meal?.name || "Meal"}
              className="object-cover group-hover:scale-125 ease-in-out duration-300 transition-all w-full h-40"
            />

            <div className="absolute top-0 left-2">
              <p className="mt-2  bg-green-500 text-white rounded-md  px-3 py-1 text-sm">
                {meal.categories}
              </p>
            </div>

            <div className="absolute bottom-2 left-2">
              <p className="mt-2 text-white  px-3 py-1 text-sm">
                ⭐ {meal?.nutritionData?.calories} cal
              </p>
            </div>

            <div className="absolute bottom-2 right-2">
              <p className="mt-2  bg-sky-500 text-white rounded-md  px-3 py-1 text-sm">
                {meal?.mealType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedMeal;
