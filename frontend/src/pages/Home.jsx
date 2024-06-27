import FeaturedRecipe from "../components/FeaturedRecipe";
import Hero from "../components/Hero";
import LatestRecipes from "../components/LatestRecipes";
import Logo from "../components/Logo";
import NewsLetter from "../components/NewsLetter";
import Reviews from "../components/Reviews";
import Subscription from "../components/Subcription";
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
      <NewsLetter />
      <Reviews />
    </div>
  );
}

export default Home;
