import HeroSection from "./HeroSection";
import HomeMeals from "./HomeMeals";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <HeroSection />
      <div className="px-4 md:px-10 lg:px-20 py-10">
        <HomeMeals />
      </div>
    </div>
  );
};

export default Home;
