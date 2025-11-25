import Banner from "@/components/home/Banner";
import ClientLogo from "@/components/home/ClientLogo";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonial from "@/components/home/Testimonial";
import TopRated from "@/components/home/TopRated";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <ClientLogo />
      <TopRated />
      <HowItWorks />
      <Testimonial />
    </div>
  );
}
