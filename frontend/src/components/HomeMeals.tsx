import type { IMeal } from '../types/FormDataTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Eye, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';

const HomeMeals = () => {
    const navigate = useNavigate();
    const fetchMeals = async (): Promise<IMeal[]> => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/getMeals`, {
        limit: 30
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
    <div className="grid grid-cols-5 gap-10 pb-20 pt-10 px-7">
      {data?.map((item, index) => (
        <div
          key={index}
          className="h-80 bg-white hover:shadow-md rounded-lg ease-in-out duration-300 transition-all hover:-translate-y-3 group"
          onClick={()=>navigate(`/meal/${item.slug}`)}
        >
          <div className="relative h-[80%] w-full">
            <img
            src={item.image}
            alt="Meal"
            className="object-cover group-hover:blur-xs ease-in-out duration-300 transition-all h-full w-full rounded-t-lg"
          />
          <p className='bg-green-500 text-white px-3 text-xs font-medium py-1 absolute top-2 left-2 rounded-3xl'>{item.mealType}</p>
          <Eye className="absolute group-hover:block text-white font-extrabold ease-in-out duration-300 transition-all top-1/2 left-[45%] hidden"/>
          </div>

          <div className=" flex-1 p-3.5">
          <div className="w-full flex items-center justify-between my-2">
            <p className="font-medium">⭐ {item.nutritionData.calories} cal</p>
            <p className="text-lg font-medium text-green-600 hover:cursor-pointer">View Details</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeMeals
