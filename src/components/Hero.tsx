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
    <div className="h-screen relative overflow-hidden flex items-center justify-center text-center">
      <Navbar openLogin={openLoginModal} />
      <div className="space-y-8 flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl">
          Welcome to Our Startup's ERP Solution
        </h1>
        <div className="max-w-[720px]">
          <h2 className="font-medium text-xl">
            Simplify Your Business Management
          </h2>
          <p>
            Our startup offers an ERP-like website designed to ease
            entrepreneurs in tracking every incoming and outgoing item, as well
            as recording daily profits effortlessly.
          </p>
        </div>
      </div>
      <img
        src={blobTop}
        alt="blob-top"
        className="w-[600px] absolute -top-40 -left-56"
      />
      <img
        src={metrics}
        alt="metrics"
        className="absolute bottom-24 left-10 w-80"
      />
      <img
        src={blobBottom}
        alt="blob-bottom"
        className="absolute -bottom-20 -right-[365px] -rotate-[27deg] w-[1200px]"
      />
      {isLoginOpen && <LoginModal closeModal={closeLoginModal} />}
    </div>
  );
};

export default Hero;
