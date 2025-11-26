import type { IMeal } from "../types/FormDataTypes";
import { useQuery } from "@tanstack/react-query";
import { Eye, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";
import api from "../helpers/api";

const HomeMeals = () => {
  const navigate = useNavigate();

  const fetchMeals = async (): Promise<IMeal[]> => {
    try {
      const res = await api.post(`/getMeals`, {
        limit: 30,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { data, isLoading, isError, refetch, error } = useQuery<IMeal[]>({
    queryKey: ["meals"],
    queryFn: fetchMeals,
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
        <p className="text-red-600 font-medium">
          Error: {(error as Error)?.message}
        </p>
        <button
          className="bg-green-600 hover:bg-green-700 duration-300 transition-all text-white px-6 rounded-md py-3"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pb-20 pt-10">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out group cursor-pointer"
            onClick={() => navigate(`/meal/${item.slug}`)}
          >
            {/* Image Section */}
            <div className="relative h-52 sm:h-56 md:h-60 lg:h-64 w-full">
              <img
                src={item.image}
                alt={item.mealType}
                className="object-cover h-full w-full rounded-t-lg group-hover:brightness-90 transition-all duration-300"
              />
              <p className="bg-green-500 text-white px-3 text-xs sm:text-sm font-medium py-1 absolute top-2 left-2 rounded-3xl">
                {item.mealType}
              </p>
              <Eye className="absolute group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out text-white w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Info Section */}
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between my-1 sm:my-2">
                <p className="font-medium text-sm sm:text-base">
                  ⭐ {item.nutritionData.calories} cal
                </p>
                <p className="text-green-600 font-semibold text-sm sm:text-base hover:underline">
                  View Details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMeals;
