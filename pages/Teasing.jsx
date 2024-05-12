"use client";
import React from "react";
import Link from "next/link";

const Teasing = () => {
  return (
    <>
      <section
        id="teasing-offer"
        className="px-0 mx-auto text-left flex justify-center items-left flex-col mt-10 "
      >
        <h1
          className="text-black font-bold text-[40px] sm:text-[30px] px-[7rem] 
        pt-10 sm:pt-0 sm:px-[2rem] sm:[320px]"
        >
          Vous méritez de vous sentir en{" "}
          <span
            className="font-bold text-black bg-[url('/teasing-offer-vect.svg')] 
          w-[185px] h-[63px]"
          >
            sécurité.
          </span>
        </h1>
        <p
          className="mt-10 text-semibold text-[25px] text-left px-[7rem]
         sm:mx-auto sm:px-[2rem] sm:text-balance sm:text-center"
        >
          Nous comprenons qu'il est difficile de quitter un emploi stable,
          surtout avec des obligations familiales et financières.
        </p>
        <p className="mt-10 text-left px-[7rem] sm:px-[2rem] text-[20px]">
          C'est pourquoi nous offrons des garanties pour vous assurer une
          transition sans risque :
        </p>
        <div className="flex flex-row sm:flex-col justify-center items-center mt-10 gap-[4rem]">
          <div
            className="bg-[url('/cadre-brown.svg')] bg-no-repeat w-[338px] h-[400px]
           text-center py-0"
          >
            <img
              src="/teasing-offer-img-01.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p
              className="text-white bg-[url('/card-title-bg-brown.svg')] align-top 
            w-[313px] h-[80px] mx-auto font-bold text-[20px] flex flex-center items-center"
            >
              Coaching professionnel <br /> sur mesure
            </p>
          </div>
          <div
            className="bg-[url('/cadre-brown.svg')] bg-no-repeat w-[338px] h-[400px] 
          text-center py-0"
          >
            <img
              src="/teasing-offer-img-02.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p
              className="text-white bg-[url('/card-title-bg-brown.svg')] align-top 
            w-[313px] h-[80px] mx-auto font-bold text-[20px] flex flex-center items-center"
            >
              Soutien à la <br /> réinsertion
            </p>
          </div>
          <div
            className="text-white bg-[url('/cadre-brown.svg')] bg-no-repeat w-[338px] 
          h-[400px] text-center py-0"
          >
            <img
              src="/teasing-offer-img-03.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p
              className="bg-[url('/card-title-bg-brown.svg')] align-top w-[313px] h-[80px] 
            mx-auto font-bold text-[20px] flex flex-center items-center"
            >
              Intégration <br /> personnalisée
            </p>
          </div>
        </div>
        <p className="text-center text-[20px] mt-10">
          Au Comptoir de Gaume, nous nous engageons à vous soutenir, quel que
          soit votre chemin.
        </p>
        <div
          className="bg-[url('/req-cta.svg')] w-[100%] h-[123px] sm:bg-[url('/req-cta-sm.svg')]
          bg-no-repeat bg-contain bg-center sm:w-[286px] sm:h-[144px] justify-self-center 
          flex justify-center mx-auto mt-10 sm:mt-[2rem]"
        >
          <Link
            href={"/form"}
            className="text-black no-underline flex justify-center items-center text-[25px]
              sm:text-[25px] sm:text-center font-medium"
          >
            Je souhaite vous rencontrer
          </Link>
        </div>
      </section>
    </>
  );
};

export default Teasing;
