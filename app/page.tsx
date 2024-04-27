import React from "react";
import Header from "./components/layout/header";
import HomeSection from "./components/sections/home-section/home-section";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="w-9/12  mx-auto pt-14  flex justify-center tablet_min:w-[95%]">
        <HomeSection />
      </div>
    </div>
  );
}
