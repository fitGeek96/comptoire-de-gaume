"use client";
import React from "react";
import Link from "next/link";

const Connaissance = () => {
  return (
    <>
      <section
        id="QuiSommeNous"
        className="px-[7rem] sm:px-[2rem] mt-10 pt-10 bg-[url('/brown-bg.png')] 
        sm:bg-[url('/brown-bg-sm.svg')] bg-no-repeat bg-cover h-[1293px] sm:h-[2800px]"
      >
        <h1 className="text-white font-bold text-left text-[2.5rem] sm:text-[25px]">
          Évolution, équilibre et innovation : Faites décoller votre carrière au{" "}
          <span
            className="bg-[url('/bg-brown-rect.svg')] w-[450px] h-[71px] bg-no-repeat
           text-black font-bold"
          >
            Comptoir de Gaume
          </span>
        </h1>
        <div className="flex flex-row sm:flex-col justify-center items-center mt-10 gap-4">
          <div
            className="bg-[url('/cadre.svg')] bg-no-repeat w-[338px] h-[402px] 
          text-center pt-[17px]"
          >
            <img
              src="/img-01.png"
              alt="Icon 1"
              className="w-[313px] h-[294px]"
            />
            <p
              className="bg-[url('/card-title-bg.svg')] w-[313px] h-[80px] mx-auto font-bold 
            text-[20px] flex flex-center items-center"
            >
              Évoluez dans votre <br /> carrière
            </p>
          </div>
          <div
            className="bg-[url('/cadre.svg')] bg-no-repeat w-[338px] h-[402px] text-center 
          pt-[15px]"
          >
            <img
              src="/img-02.png"
              alt="Icon 1"
              className="w-[313px] h-[294px] align-top "
            />
            <p
              className=" align-top bg-[url('/card-title-bg.svg')] w-[313px] h-[80px] 
            mx-auto font-bold text-[20px] flex flex-center items-center"
            >
              Équilibre <br /> pro/perso
            </p>
          </div>
          <div
            className="bg-[url('/cadre.svg')] bg-no-repeat w-[338px] h-[402px] 
          text-center pt-[15px]"
          >
            <img
              src="/img-03.png"
              alt="Icon 1"
              className="w-[313px] h-[294px] align-top "
            />
            <p
              className=" align-top bg-[url('/card-title-bg.svg')] w-[313px] h-[80px] 
            mx-auto font-bold text-[20px] flex flex-center items-center"
            >
              Créez et <br /> innovez
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col-reverse justify-between mt-10">
          <div className="mx-auto sm:mt-10 sm:w-[336px]">
            <h4 className="text-orange font-semibold text-[25px] sm:text-[20px] text-center">
              Faisons un peu plus connaissances
            </h4>
            <div className="flex flex-row justify-center mx-auto">
              <img
                src="/border-left.svg"
                alt="border left"
                className="w-[17px] h-[362px] sm:[468px] sm:scale-y-[2] pt-2 sm:pt-[7rem] m-0"
              />
              <p
                className="text-center text-[#FBFBFB] w-[450px] py-[2rem] px-0 sm:px-[1rem] 
              leading-normal sm:text-[18px] sm:text-wrap sm:w-[332px]"
              >
                Bonjour ! Moi, c’est{" "}
                <span className="font-bold text-white">Xavier Goebels </span> ,
                le dirigeant du <br /> Comptoir de Gaume et du Carrefour Market.{" "}
                <br /> Nous proposons des produits de TOP qualité pour <br />{" "}
                rendre nos clients heureux, mais ce que j’adore, c’est <br />{" "}
                collaborer avec des gens passionnés. <br /> Vous êtes boucher et
                vous avez vraiment du talent ? <br /> Parfait, moi je vous
                propose un café et un projet de <br /> carrière à explorer.{" "}
                <br />
                Rencontrons-nous. Discutons de ce qui vous anime et <br />{" "}
                voyons comment, ensemble, nous pouvons concrétiser <br /> vos
                ambitions. <br />
                Prenez RDV et discutons. Ensemble, écrivons le <br /> prochain
                chapitre de votre carrière de vie.
              </p>
              <img
                src="/border-right.svg"
                alt="border right"
                className="w-[17px] h-[362px] pt-2 m-0 sm:[468px] sm:scale-y-[2] pt-2 sm:pt-[7rem]"
              />
            </div>
            <div className="grid justify-items-stretch w-[488px] h-[123px] sm:w-[336px] sm:h-[144px]">
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
                  className="text-orange no-underline flex justify-center items-center 
                  text-[1.5rem] sm:text-[20px] text-center"
                >
                  Je souhaite rencontrer Xavier Goebels
                </Link>
              </div>

              <img
                src="/bottom-group.svg"
                alt="bottom group"
                className="justify-self-start m-0 p-0"
              />
            </div>
          </div>
          <div
            className="mx-auto bg-[url('/xavier.svg')] sm:bg-[url('/xavier-sm.svg')]
           w-[543px] h-[547px] sm:w-[317px] sm:h-[319px]"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Connaissance;
