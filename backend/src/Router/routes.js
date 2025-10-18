import { Router } from "express";
import multer from "multer";
import storage from "../utils/storage.js";
import saveRecipe from "../controllers/UploadRecipes.js";
import GetMeals from "../controllers/GetMeals.js";
import GetOneMeal from "../controllers/GetOneMeal.js";
import GetInterestedMeal from "../controllers/GetInterestedMeal.js";
import Chat from "../controllers/chat.js"
const upload = multer({ storage })

const router = Router();

router.post('/save', upload.single("image"), saveRecipe);
router.post("/getMeals", GetMeals);
router.get("/meal/:slug", GetOneMeal);
router.get("/interested-meal", GetInterestedMeal);
router.post("/chat", Chat)

export default router;