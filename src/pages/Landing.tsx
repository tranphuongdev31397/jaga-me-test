import { Navbar } from "@/containers/Landing";
import AwardWinning from "@/containers/Landing/AwardWinning";
import Booking from "@/containers/Landing/Booking";
import CustomerPortal from "@/containers/Landing/CustomerPortal";
import Footer from "@/containers/Landing/Footer";
import Hero from "@/containers/Landing/Hero";
import Jagas from "@/containers/Landing/Jagas";
import OutServices from "@/containers/Landing/OurServices";
import Partner from "@/containers/Landing/Partner";
import Testimonials from "@/containers/Landing/Testimonials";
import { useTheme } from "@/contexts/shadcn/theme-provider";

import { useEffect } from "react";

export interface LandingPageProps {}

export default function LandingPage({}: LandingPageProps) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className="min-h-screen">
      <header className="w-full relative z-10 bg-white  top-0 left-0 header py-[35px]">
        <Navbar />
      </header>

      <main className="w-full bg-gray-3">
        <Hero />

        <OutServices />

        <Booking />

        <CustomerPortal />
        <Jagas />

        <Partner />
        <Testimonials />
        <AwardWinning />
      </main>

      <footer className="bg-gray-3 pt-[200px]">
        <Footer />
      </footer>
    </div>
  );
}
