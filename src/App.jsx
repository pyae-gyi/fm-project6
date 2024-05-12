import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import sideBarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import stepsData from "./stepsData";
import { useState, useEffect } from "react";

import Step from "./Step";
import Hero from "./Hero";
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia("(max-width: 768px)").matches; // Adjust breakpoint as needed
      setIsMobile(isMobileView);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isMobile ? sideBarMobile : sideBarDesktop;

  return (
    <section className="md:flex md:justify-center md:items-center md:h-screen max-h-screen">
      <div className="flex flex-col md:shadow-xl md:rounded-lg max-md:h-screen transition md:flex-row md:p-3 md:w-[1000px]  max-w-[1000px]">
        <div className=" flex flex-row relative md:flex-shrink-0">
          <div className="w-full ">
            <img src={imageSrc} className="h-full object-cover" />
          </div>
          <div className="absolute w-full h-full pt-6 md:p-7 md:pt-9 md:gap-8 justify-center md:justify-start flex text-lg md:text-base gap-3 md:flex-col">
            {stepsData.map((stepData) => {
              return <Step key={stepData.stepId} {...stepData} />;
            })}
          </div>
        </div>
        <Hero />
      </div>
    </section>
  );
}

export default App;
