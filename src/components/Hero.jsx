import React from "react";
import { heroimage, heroimageBig, clients } from "../constants";

const Hero = () => {
  return (
    <main className=" ">
      <div>
        <img src={heroimage} alt="talents" className="my-5 md:hidden" />
        <img src={heroimageBig} alt="talents" className="my-5 hidden md:flex" />
      </div>

      <div className=" bg-purple-300 flex flex-col justify-center"> 
        <div className=" ">
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. streamline processes, create team rituals, and watch productivity soar.</p>
          <span>
            <a href="">Learn more</a>
          </span>
        </div>
        <div className=" flex">
          {clients.map(item => (
            <img src={item.logo} alt='logos' key={item.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
