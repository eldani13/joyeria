import BrilliantMomentsCollection from "@/components/Featured/BrilliantMomentsCollection";
import DiamondShapeSection from "@/components/Featured/DiamondShapeSection";
import FeaturedCollectionSection from "@/components/Featured/FeaturedCollectionSection";
import HeroSection from "@/components/Hero/HeroSection";
import Categories from "@/components/Other/Categories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCollectionSection/>
      <DiamondShapeSection/>
      <BrilliantMomentsCollection/>
      <Categories/>
    </div>
  );
}
