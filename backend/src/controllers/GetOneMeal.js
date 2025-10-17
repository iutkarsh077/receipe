import Meal from "../models/Recipe.js";

const GetOneMeal = async (req, res) =>{
    try {
         const { slug } = req.params;

        //  console.log(slug)

         const getMeals = await Meal.findOne({slug})

        //  console.log(getMeals)
         return res.status(200).json({message: "Succesfully got all the meals", data: getMeals, status: false});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", status: false});
    }
} 

export default GetOneMeal;