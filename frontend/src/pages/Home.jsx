import FeaturedRecipe from "../components/FeaturedRecipe";
import Hero from "../components/Hero";
import Category from "./Category";

function Home() {
  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden">
        <Hero />
      </div>
      <Category/>
      <FeaturedRecipe />
    </div>
  );
}

export default Home;
