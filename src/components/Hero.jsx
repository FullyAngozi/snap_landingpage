import React from "react";
import heroimg from "../assets/images/image-hero-mobile.png";
import heroimglarge from "../assets/images/image-hero-desktop.png";
import audiophile from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

const Hero = () => {
  return (
    <main className=" w-full h-screen md:flex md:items-center">
      <div className=" max-w-[1000px] md:max-w-[90%] h-[60%]   mx-auto  ">
        <section className=" h-full flex flex-col md:flex-row-reverse  items-center gap-4">
          <div className=" ">
            <img src={heroimglarge} alt="" className=" w-full" />
          </div>
          <div className=" max-w-[90%] flex flex-col  h-full ">
            <section className="  mx-auto flex flex-col h-full text-center py-4 justify-evenly  md:items-start   ">
              <div className=" md:text-left">
                <h1 className=" text-6xl font-bold">Make </h1>
                <h1 className=" text-6xl font-bold">remote work</h1>
              </div>
              <p className=" text-4xl text-gray-600 md:text-left ">
                Get your team in sync, no matter your location, streamline
                processess, create team rituals, and watch productivity soar.
              </p>
              <div className=" py-6">
                <a
                  href="3"
                  className=" py-4 px-7 text-2xl bg-black text-white rounded-2xl "
                >
                  Learn more
                </a>
              </div>
            </section>
            <div className=" flex items-center justify-between   ">
                <img src={audiophile} alt="" style={{ width: 40 }} />
                <img src={databiz} alt="" style={{ width: 70 }} />
                <img src={maker} alt="" style={{ width: 70 }} />
                <img src={meet} alt="" style={{ width: 70 }} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
