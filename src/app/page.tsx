import BrilliantMomentsCollection from "@/components/Featured/BrilliantMomentsCollection";
import DiamondShapeSection from "@/components/Featured/DiamondShapeSection";
import FeaturedCollectionSection from "@/components/Featured/FeaturedCollectionSection";
import HeroSection from "@/components/Hero/HeroSection";
import Categories from "@/components/Other/Categories";
import Information from "@/components/Other/Information";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories/>
      <FeaturedCollectionSection/>
      <DiamondShapeSection/>
      <BrilliantMomentsCollection/>
      <Information/>
    </div>
  );
}
