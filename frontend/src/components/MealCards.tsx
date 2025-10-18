import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Eye, Loader2 } from "lucide-react";
import type { IMeal } from "../types/FormDataTypes";
import { useNavigate } from "react-router";
import { useState } from "react";

const MealCards = ({
  searchMeals,
  mealType,
  mealCategory,
}: {
  searchMeals: string;
  mealType: string;
  mealCategory: string;
}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number[] | null>(null);

  const fetchMeals = async (): Promise<IMeal[]> => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/getMeals`, {
        searchMeals,
        mealType,
        mealCategory,
        currentPage,
        limit: 8,
      });

      const pages = Math.ceil(res.data.totalDocument / 8);
      const pageArray = Array.from({ length: pages }, (_, i) => i + 1);
      setTotalPage(pageArray);
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { data, isLoading, isError, refetch, error } = useQuery<IMeal[]>({
    queryKey: ["meals", searchMeals, mealType, mealCategory, currentPage],
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
      {/* Grid for cards */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          md:gap-8 
          mt-8 
          px-4 
          md:px-0
        "
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className="
              bg-white 
              hover:shadow-lg 
              rounded-lg 
              transition-all 
              duration-300 
              ease-in-out 
              hover:-translate-y-2 
              group
              cursor-pointer
            "
            onClick={() => navigate(`/meal/${item.slug}`)}
          >
            {/* Image Section */}
            <div className="relative h-48 sm:h-56 md:h-52 lg:h-44 xl:h-56 w-full">
              <img
                src={item.image}
                alt="Meal"
                className="
                  object-cover 
                  h-full 
                  w-full 
                  rounded-t-lg 
                  group-hover:blur-[1px] 
                  transition-all 
                  duration-300
                "
              />
              <Eye
                className="
                  absolute 
                  top-1/2 
                  left-1/2 
                  -translate-x-1/2 
                  -translate-y-1/2 
                  text-white 
                  font-extrabold 
                  hidden 
                  group-hover:block 
                  transition-all 
                  duration-300
                "
              />
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-2">
              <p className="text-lg sm:text-xl font-semibold truncate">
                {item.name}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                <p className="text-xs sm:text-sm bg-green-100 text-green-900 font-medium rounded-lg px-2 py-1">
                  {item.categories}
                </p>
                <p className="text-xs sm:text-sm bg-blue-100 text-blue-900 font-medium rounded-lg px-2 py-1">
                  {item.mealType}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-sm sm:text-base font-medium">
                  ⭐ {item.nutritionData.calories} cal
                </p>
                <p className="text-sm sm:text-base font-medium text-green-600">
                  View Details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 px-4">
        {totalPage?.map((item, index) => (
          <p
            key={index}
            onClick={() => setCurrentPage(item)}
            className={`
              ${
                currentPage === item
                  ? "bg-sky-500"
                  : "bg-green-500 hover:bg-green-600"
              } 
              text-white 
              py-2 
              px-4 
              rounded-md 
              text-sm sm:text-base 
              transition-all 
              duration-300 
              ease-in-out 
              hover:scale-105 
              cursor-pointer
            `}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default MealCards;
