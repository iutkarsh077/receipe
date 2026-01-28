import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Meals from "../components/Meals";
import About from "../components/About";
import Contact from "../components/Contact";
import Blogs from "../components/Blog";
import Admin from "../components/Admin";
import SpecificMeal from "../components/SpecificMeal";
import App from "../App";
import NotFound from "../components/NotFound";
import Auth from "../components/Auth";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Home />} />
       <Route path="auth" element={<Auth />} />
      <Route path="meals" element={<Meals />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="admin" element={<Admin />} />
      <Route path="meal/:name" element={<SpecificMeal />} />
       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
