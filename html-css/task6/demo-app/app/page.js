import Image from "next/image";

import BannerSlider from "./components/ui/BannerSlider";
import BlogSection from "./components/ui/BlogSection";
import CardSection from "./components/ui/CardSection";
import TestimonialSlider from "./components/ui/TestimonialSlider";
import QuestionsSection from "./components/ui/QuestionsSection";
import OverlayBanner from "./components/ui/OverlayBanner";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <BlogSection />
      <CardSection />
      <TestimonialSlider />
      <QuestionsSection />
      <OverlayBanner />
    </>
  );
}
