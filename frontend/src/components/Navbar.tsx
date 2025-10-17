import { Link, useLocation } from "react-router";
import { NavItems } from "../helpers/constant";

const Navbar = () => {
  const {pathname} = useLocation();

  return (
    <div className="h-16 bg-white text-black w-full">
      <div className="flex justify-between items-center h-full mx-7">
        <div className="text-2xl text-green-500 font-bold tracking-wider">Calories</div>

        <div className="flex items-center gap-x-4">
          {
            NavItems.map((item, index)=>(
              <Link to={item.slug} key={index}>
                <p className={`flex items-center gap-x-2 hover:text-green-500 hover:bg-gray-100 font-semibold px-4 py-2 ease-in-out duration-300 transition-all ${pathname == item.slug && "bg-gray-100 text-green-500"}`}>
                  {<item.icon className="w-4 h-4"/>}
                  <span>{item.title}</span>
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
