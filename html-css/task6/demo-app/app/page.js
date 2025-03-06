import Image from "next/image";

import BannerSlider from "./components/ui/BannerSlider";
import BlogSection from "./components/ui/BlogSection";
import CardSection from "./components/ui/CardSection";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <BlogSection />
      <CardSection />
    </>
  );
}
