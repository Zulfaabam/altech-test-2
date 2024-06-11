import Navbar from "./Navbar";
import blobTop from "../assets/blob-haikei.svg";
import blobBottom from "../assets/layered-waves-haikei.svg";
import metrics from "../assets/metrics.svg";
import LoginModal from "./Login";
import { useState } from "react";

const Hero = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center text-center bg-white">
      <Navbar openLogin={openLoginModal} />
      <div className="space-y-8 flex flex-col justify-center items-center px-4">
        <h1 className="font-bold text-3xl md:text-5xl">
          Welcome to Our Startup's ERP Solution
        </h1>
        <div className="max-w-[720px]">
          <h2 className="font-medium text-lg md:text-xl">
            Simplify Your Business Management
          </h2>
          <p className="text-sm md:text-base">
            Our startup offers an ERP-like website designed to ease
            entrepreneurs in tracking every incoming and outgoing item, as well
            as recording daily profits effortlessly.
          </p>
        </div>
      </div>
      <img
        src={blobTop}
        alt="blob-top"
        className="w-[350px] md:w-[600px] absolute -top-20 md:-top-40 -left-20 md:-left-56"
      />
      <img
        src={metrics}
        alt="metrics"
        className="absolute bottom-12 md:bottom-24 left-4 md:left-10 w-40 md:w-80"
      />
      <img
        src={blobBottom}
        alt="blob-bottom"
        className="absolute -bottom-10 md:-bottom-20 -right-[180px] md:-right-[365px] -rotate-[27deg] w-[600px] md:w-[800px] 2xl:w-[1200px]"
      />
      {isLoginOpen && <LoginModal closeModal={closeLoginModal} />}
    </div>
  );
};

export default Hero;
