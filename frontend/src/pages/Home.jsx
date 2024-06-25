import FeaturedRecipe from "../components/FeaturedRecipe";
import Hero from "../components/Hero";
import LatestRecipes from "../components/LatestRecipes";
import Category from "./Category";

function Home() {
  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden">
        <Hero />
      </div>
      <Category/>
      <FeaturedRecipe />
      <LatestRecipes/>
    </div>
  );
}

export default Home;
