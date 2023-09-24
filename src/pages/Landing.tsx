import { Navbar } from "@/containers/Landing";
import Booking from "@/containers/Landing/Booking";
import CustomerPortal from "@/containers/Landing/CustomerPortal";
import Hero from "@/containers/Landing/Hero";
import OutServices from "@/containers/Landing/OurServices";
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

      <main className="w-full">
        <Hero />

        <OutServices />

        <Booking />

        <CustomerPortal />
      </main>

      <footer className="bg-white"></footer>
    </div>
  );
}
