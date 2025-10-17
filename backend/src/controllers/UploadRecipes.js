import Meal from "../models/Recipe.js";

const saveRecipe = async (req, res) =>{
    try {
        const body = req.body;
        // console.log(body, req.file);

        const nutrients = JSON.parse(req.body.nutritionData)

        const data = {
            nutritionData: nutrients,
            name: req.body.dishName,
            title: req.body.dishTitle,
            slug: req.body.dishName.toLowerCase(),
            description: req.body.description,
            categories: req.body.category,
            mealType: req.body.mealType,
            createdBy: req.body.createdBy,
            image: req.file.path
        }

        
        const result = await Meal.create(data);
        // console.log(result);

        return res.status(201).json({message: "Recipe saved successfully", status: true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Failed to save Receipe", status: false})
    }
}

export default saveRecipe;