"use client";
import "../styles/theme.css";
import Navbar from "@/pages/Navbar";
import Welcome from "@/pages/Welcome";
import Profile from "@/pages/Profile";
import Offer from "@/pages/Offer";
import Connaissance from "@/pages/Connaissance";
import Requirements from "@/pages/Requirements";
import Team from "@/pages/Team";
import Teasing from "@/pages/Teasing";
import Parcours from "@/pages/Parcours";
import Testimonials from "@/pages/Testimonials";
import Faq from "@/pages/Faq";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section
        className="max-w-screen bg-[url('/background-lg.svg')] 
      sm:bg-[url('/bg-sm.svg')] h-full w-screen
       bg-cover bg-no-repeat bg-center 
       overflow-hidden sm:w-fit sm:h-fit"
      >
        <Navbar />
        <Hero />
      </section>
      <Welcome />
      <Profile />
      <Offer />
      <Connaissance />
      <Requirements />
      <Team />
      <Teasing />
      <Parcours />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
