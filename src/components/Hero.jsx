import React from "react";
import heroimg from "../assets/images/image-hero-mobile.png";
import heroimglarge from "../assets/images/image-hero-desktop.png";
import audiophile from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

const Hero = () => {
  return (
    <main className=" w-full h-screen">
      <section className=" h-full flex flex-col md:hidden ">
        <div className=" py-4">
          <img src={heroimg} alt="" />
        </div>
        <section className=" max-w-[90%] mx-auto flex flex-col h-full text-center py-4 justify-evenly">
          <h1 className=" text-6xl font-bold py-3">Make remote work</h1>
          <p className=" text-4xl text-gray-600">
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
          <div className=" flex items-center  justify-between  ">
            <img src={audiophile} alt="" style={{ width: 40 }} />
            <img src={databiz} alt="" style={{ width: 70 }} />
            <img src={maker} alt="" style={{ width: 70 }} />
            <img src={meet} alt="" style={{ width: 70 }} />
          </div>
        </section>
      </section>

      {/* large screen */}

      <section className=" hidden md:flex h-full w-full justify-between items-center md:max-w-[900px]  xl:max-w-[1240px] mx-auto gap-5 py-28 bg-green-400 ">
        <section className=" max-w-[90%] mx-auto flex flex-col  h-full py-4">
          <h1 className=" text-6xl font-bold">Make </h1>
          <h1 className=" text-6xl font-bold">remote work</h1>
          <p className=" text-3xl text-gray-600 py-10">
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
          <div className=" flex items-center mt-8  ">
            <img
              src={audiophile}
              alt=""
              style={{ width: 70 }}
              className=" px-3"
            />
            <img
              src={databiz}
              alt=""
              style={{ width: 100 }}
              className=" px-3"
            />
            <img src={maker} alt="" style={{ width: 100 }} className=" px-3" />
            <img src={meet} alt="" style={{ width: 100 }} className=" px-3" />
          </div>
        </section>
        <div>
          <img src={heroimglarge} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
