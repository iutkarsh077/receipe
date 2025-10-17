export interface INutritionTypes {
    calories: number,
    carbohydrates: number,
    protein: number,
    fat: number,
    fiber: number,
    sugar: number,
    sodium: number
}


export interface INutritionData {
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  _id?: string; // optional if you don't always need it
}

export interface IMeal {
  _id?: string; // optional if not needed in frontend
  nutritionData: INutritionData;
  name: string;
  title: string;
  slug: string;
  description: string;
  categories: string; // "Asian"
  mealType: string; // "Dinner"
  createdBy: string; // "Lucas Martin"
  image?: string; // optional
  createdAt?: string; // optional
  updatedAt?: string; // optional
  __v?: number; // optional
}
