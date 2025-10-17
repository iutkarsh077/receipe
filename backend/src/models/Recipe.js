import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema({
  calories: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  fiber: { type: Number, required: true },
  sugar: { type: Number, required: true },
  sodium: { type: Number, required: true },
});

const mealSchema = new mongoose.Schema(
  {
    nutritionData: { type: nutritionSchema, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    categories: { type: String, required: true },
    mealType: { type: String, required: true },
    createdBy: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Meal =  mongoose.models.Meal || mongoose.model("Meal", mealSchema);
export default Meal;