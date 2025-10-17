import Meal from "../models/Recipe.js";

const GetMeals = async (req, res) =>{
    try {
        const { currentPage = 1, searchMeals = "", mealType = "", mealCategory = "", limit = 8 } = req.body;
        const skip = (currentPage - 1) * limit;

        const filter = {};

        if(searchMeals && searchMeals.trim != ""){
            filter.$or = [
                {name: { $regex: searchMeals, $options: 'i'}},
                {description: { $regex: searchMeals, $options: 'i'}},
                {title: { $regex: searchMeals, $options: 'i'}},
                {mealType: { $regex: searchMeals, $options: 'i'}},
            ]
        }

        if(mealType && mealType.trim != "" && mealType != "All Meal Type"){
            filter.mealType = mealType
        }

        if(mealCategory && mealCategory.trim != "" && mealCategory != "All Categories"){
            filter.categories = mealCategory
        }

        // console.log("Filter is: ", filter)
        const totalDocument = await Meal.countDocuments(filter);
        const getMeals = await Meal.find(filter).sort({ _id: -1 }).skip(skip).limit(limit)

        // console.log(totalDocument)

        return res.status(200).json({message: "Succesfully got the meals", data: getMeals, totalDocument,  status: true});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server error", status: false});
    }
}
export default GetMeals;