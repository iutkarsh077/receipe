import { Cookie, Home, Info, Mail } from "lucide-react";
import type { INavbar } from "../types/NavItems";

export const NavItems: INavbar[] = [
  {
    slug: "/",
    title: "Home",
    icon: Home,
  },
  {
    slug: "/meals",
    title: "Meals",
    icon: Cookie,
  },
  {
    slug: "/about",
    title: "About",
    icon: Info,
  },
  {
    slug: "/contact",
    title: "Contact",
    icon: Mail,
  },
  // {
  //   slug: "/admin",
  //   title: "Admin",
  //   icon: UserStar,
  // },
];

export const mealCategories = [
  "All Categories",
  "Asian",
  "Mediterranean",
  "Smoothie",
  "American",
  "Salad",
  "Thai",
];
export const MealType = ["All Meal Type", "Breakfast", "Lunch", "Dinner"];


export const avatars = [
    { id: 1, initials: "JD", color: "bg-blue-500" },
    { id: 2, initials: "SM", color: "bg-purple-500" },
    { id: 3, initials: "AR", color: "bg-orange-500" },
    { id: 4, initials: "LK", color: "bg-green-500" },
  ]