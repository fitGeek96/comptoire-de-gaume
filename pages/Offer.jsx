"use client";

import Link from "next/link";
import React from "react";

const Offer = () => {
  return (
    <>
      <section id="offer" className="px-[7rem] mt-10 sm:px-[2rem] sm:h-[3359]">
        <h1 className="text-left text-[40px] sm:text-[25px] font-bold">
          Alors, voici ce que nous vous{" "}
          <span className="bg-[url('/proposons.svg')] font-bold">
            {" "}
            proposons :{" "}
          </span>
        </h1>
        <p className="text-center text-[20px] px-[7rem] sm:px-0 sm:text-wrap mt-10">
          Rencontrons-nous, discutons pendant une heure autour d’un café Vous
          n’avez rien à perdre, à part une heure de votre temps lors de notre
          discussion. Mais imaginez tout ce que vous pourriez y gagner ?
        </p>
        <div
          className="bg-[url('/big-box.svg')] sm:bg-[url('/big-box-sm.svg')] 
          bg-contain sm:bg-cover bg-no-repeat flex flex-row justify-center 
          items-center sm:flex sm:flex-col sm:mt-10 w-full sm:w-[100%] h-[524px] 
          sm:h-[100%] sm:px-1 mx-auto sm:pt-[0rem] sm:pb-[5rem]"
        >
          <div
            className="bg-[url('/big-box-img.svg')] sm:bg-[url('/big-box-img-sm.svg')] 
            w-[100%] sm:w-[91%] ml-7 sm:m-0 sm:p-0 h-[472px] sm:h-[282px] bg-no-repeat 
            bg-cover sm:bg-cover text-center sm:mx-[5rem] sm:bg-center
            "
          ></div>

          <div
            className="flex flex-col gap-2 sm:gap-0 mx-auto w-[100%] scale-90 
            sm:h-full"
          >
            <h3
              className="font-semibold text-[25px] sm:text-[20px] sm:mx-5 sm:mt-3 sm:px-7 mb-5 
            sm:text-center"
            >
              Une rencontre avec nous, c'est
            </h3>
            <ul className="sm:flex sm:items-start sm:flex-col sm:text-left sm:pl-11">
              <p className="flex items-center mb-4">
                <img src="/hand.svg" className="bg-no-repeat mr-5" />
                <span>0 Préssion</span>
              </p>
              <p className="flex items-center mb-4">
                <img src="/hand.svg" className="bg-no-repeat mr-5" />
                <span>Rien à perdre</span>
              </p>
              <p className="flex items-center mb-4">
                <img src="/hand.svg" className="bg-no-repeat mr-5" />
                <span>Des possibilités de carrière à explorer !</span>
              </p>
            </ul>
            <div
              className="flex flex-col sm:justify-center sm:items-center sm:text-center 
                mt-5 sm:mt-0 sm:mx-10"
            >
              <h4 className="text-[25px] sm:text-[25px] font-semibold sm:text-left text-left mt-5">
                Cliquez sur le bouton ci-dessous et <br /> osez le changement
                !  
              </h4>
              <div
                className="grid justify-items-stretch w-[80%] sm:w-[234px] h-[159px] 
              mt-[1rem]"
              >
                <img
                  src="/big-box-group1.svg"
                  alt="top group"
                  className="justify-self-end m-0 pt-10 bg-contain"
                />
                <div
                  className="justify-self-center bg-[url('/big-box-cta.svg')]
                 sm:bg-[url('/big-box-cta-sm.svg')] w-[95%] h-[70px] sm:w-[100%] sm:h-[108px]
                 bg-no-repeat bg-contain sm:bg-auto flex justify-center 
                 items-center sm:p-1 sm:bg-center"
                >
                  <Link
                    href={"/form"}
                    className="text-black no-underline flex justify-center items-center 
                    text-[25px] sm:text-[20px] sm:text-regular sm:w-[137px] sm:h-[84px]"
                  >
                    Je souhaite prendre rendez-vous
                  </Link>
                </div>
                <img
                  src="/big-box-group2.svg"
                  alt="top group"
                  className="justify-self-start m-0 pb-10 bg-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-10 sm:mt-0 leading-loose">
            <span className="font-bold">
              Prenez 1 h de votre temps pour venir nous rencontrer : 
            </span>{" "}
            <br /> Rue d'Arlon, 18A 6820 Florenville <br /> (Carrefour Market){" "}
            <br />
            <span className="font-bold">
              Obtenez directement votre CDI à la clé !
            </span>{" "}
            <br /> Nous ne vous proposerons un poste que si nous sommes
            convaincus d'apporter du positif à votre carrière.
          </p>
        </div>
      </section>
    </>
  );
};

export default Offer;
