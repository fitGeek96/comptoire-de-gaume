import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative sm:mx-auto mt-[10rem] pl-[6rem] sm:flex sm:flex-col 
    sm:w-[90%] sm:p-0 sm:justify-around sm:items-center sm:gap-7 sm:h-fit sm:h-[50%]"
    >
      <h1 className="text-left text-white text-[65px] sm:text-[3rem] font-bold sm:text-center">
        Vous êtes un boucher{" "}
        <span className="relative inline-block talentueux text-black font-bold">
          Talentueux ?
        </span>
      </h1>

      <p
        className="relative text-white text-left text-[40px] sm:text-[25px] sm:text-center 
        sm:leading-loose mx-auto h-fit "
      >
        Rejoignez notre équipe <br />
        du
        <span className="text-orange font-bold"> Comptoir de Gaume </span>
        dans le
        <span className="font-bold underline decoration-orange">
          {" "}
          Carrefour Market
        </span>{" "}
        de{" "}
        <span className="font-bold underline decoration-orange">
          {" "}
          Florenville Belgique
        </span>{" "}
        !
        <img
          src="/grande-fleche.svg"
          alt="Grande fleche"
          className="absolute left-[50px] sm:left-0 top-[230px] sm:top-[150px] 
          sm:w-[80px] sm:h-[70px]"
        />
      </p>

      <div
        className="sm:mx-auto grid justify-items-stretch w-[483px] h-[123px] sm:w-[330px]
         sm:h-[140px] mt-10 sm:mt-5 "
      >
        <img
          src="/top-group.svg"
          alt="top group"
          className="justify-self-end m-0 p-0"
        />
        <div
          className="sm:mx-auto sm:mt-0 sm:pt-0 bg-[url('/rect-15.svg')] 
          sm:bg-[url('/rect-15-sm.svg')]  w-[456px] h-[70px] sm:w-[280px] sm:h-[120px] 
          bg-contain bg-no-repeat justify-self-center flex justify-center items-center"
        >
          <Link
            href={"/form"}
            className="text-white no-underline flex justify-center items-center 
              text-[1.5rem] text-center"
          >
            Je souhaite vous rencontrer
          </Link>
        </div>
        <img
          src="/bottom-group.svg"
          alt="bottom group"
          className="justify-self-start m-0 p-0"
        />
      </div>
      <div className="relative flex justify-center">
        <img
          src="/arrow-down.svg"
          alt="top group"
          className="justify-self-cener mx-auto mt-[1rem] sm:mt-0"
        />
      </div>
    </div>
  );
};

export default Hero;
