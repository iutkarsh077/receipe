import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Eye, Loader2 } from "lucide-react";
import type { IMeal } from "../types/FormDataTypes";
import { useNavigate } from "react-router";
import { useState } from "react";

const MealCards = ({ searchMeals, mealType, mealCategory }: {searchMeals: string, mealType: string, mealCategory: string}) => {
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
          limit: 8
        });

      // console.log(res);
      const pages = Math.ceil((res.data.totalDocument)/8);
      const pageArray = Array.from({length: pages}, (_, i)=> i + 1);
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
    <div className="grid grid-cols-4 gap-10 mt-10">
      {data?.map((item, index) => (
        <div
          key={index}
          className="h-80 bg-white hover:shadow-md rounded-lg ease-in-out duration-300 transition-all hover:-translate-y-3 group"
          onClick={()=>navigate(`/meal/${item.slug}`)}
        >
          <div className="relative h-[57%] w-full">
            <img
            src={item.image}
            alt="Meal"
            className="object-cover group-hover:blur-xs ease-in-out duration-300 transition-all h-full w-full rounded-t-lg"
          />
          <Eye className="absolute group-hover:block text-white font-extrabold ease-in-out duration-300 transition-all top-1/2 left-[45%] hidden"/>
          </div>

          <div className=" h-[40%] p-3.5">
            <p className="text-2xl truncate font-semibold">
            {item.name}
          </p>
          <div className="flex gap-x-4 items-center mt-3">
            <p className="text-sm bg-green-100 text-green-900 font-medium rounded-lg px-2 py-1">{item.categories}</p>
            <p className="text-sm bg-blue-100 text-blue-900 font-medium rounded-lg px-2 py-1">{item.mealType}</p>
          </div>
          <div className="w-full flex items-center justify-between my-2">
            <p className="font-medium">⭐ {item.nutritionData.calories} cal</p>
            <p className="text-lg font-medium text-green-600 hover:cursor-pointer">View Details</p>
          </div>
          </div>
        </div>
      ))}
    </div>
      <div className="flex gap-x-3 justify-center w-full mt-8">
        {
          totalPage?.map((item, index)=>(
            <p key={index} onClick={()=>setCurrentPage(item)} className={`${currentPage === item ? "bg-sky-500": "bg-green-500"} hover:scale-110 hover:cursor-pointer transition-all duration-300 ease-in-out flex gap-x-3 text-white py-1 rounded-sm px-3`}>
              {item}
            </p>
          ))
        }
      </div>
    </>
  );
};

export default MealCards;
