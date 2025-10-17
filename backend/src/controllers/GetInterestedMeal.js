import Meal from "../models/Recipe.js";

const GetInterestedMeal = async (req, res) => {
  try {
    const getMeals = await Meal.aggregate([{ $sample: { size: 4 } }]);

    // console.log("Interested nmelsmln", getMeals);
    return res
      .status(200)
      .json({
        message: "Succesfully got interested the meals",
        data: getMeals,
        status: false,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", status: false });
  }
};

export default GetInterestedMeal;
