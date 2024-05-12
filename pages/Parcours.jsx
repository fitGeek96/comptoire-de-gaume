import React from "react";

const Parcours = () => {
  return (
    <>
      <section
        id="parcours"
        className="mx-auto px-[7rem] sm:px-[2rem]  flex justify-start items-left flex-col 
        mt-10 bg-[url('/brown-bg.png')] h-[549px] sm:h-[100%] sm:pb-10 bg-cover bg-no-repeat"
      >
        <h1
          className="font-bold text-[40px] sm:text-[25px] text-white text-bold pt-20
        sm:pt-10"
        >
          Votre parcours pour{" "}
          <span
            className="bg-[url('/rejoin-vect.svg')] w-[307px] h-[62px]
           text-black font-bold"
          >
            nous rejoindre
          </span>
        </h1>
        <p className="text-white text-[20px] mt-10">
          Réservez maintenant votre rendez-vous avant qu’il ne soit trop tard !
        </p>
        <div className="flex flex-row justify-start mt-10 ">
          <img
            src="/rejoin-bar.svg"
            alt="vector"
            className="size-[16rem] w-[50px] pt-2 sm:hidden"
          />
          <img
            src="/rejoin-bar-sm.svg"
            alt="rejoin bar sm"
            className="mr-5 mb-[4rem] w-[25px] lg:hidden"
          />
          <div className="">
            <p className="text-[20px] text-white sm:w-[286px] sm:mt-5">
              <span className="font-extrabold">
                {" "}
                Rencontrez notre équipe :{" "}
              </span>
              <span className="font-thin">
                Vous passerez une heure avec nous pour découvrir notre
                environnement et discuter de vos aspirations.
              </span>
            </p>
            <br />
            <p className="text-[20px] text-white sm:w-[286px] sm:mb-5 sm:mt-5">
              <span className="font-extrabold"> Testez le poste : </span>
              <span className="font-thin">
                Vous travaillerez avec nous pendant trois demi-journées. Cela
                vous permet de vous familiariser avec le travail et de sentir si
                l'ambiance vous convient.
              </span>
            </p>
            <br />
            <p className="text-[20px] text-white sm:w-[286px]">
              <span className="font-extrabold">Recevez un offre : </span>
              <span className="font-thin">
                Si l’essai est concluant, pour vous comme pour nous, nous vous
                proposons rapidement un contrat.
              </span>
            </p>
            <br />
            <p className="text-[20px] text-white sm:w-[286px]">
              <span className="font-extrabold"> Démarrez votre CDI : </span>
              <span className="font-thin">
                Si vous acceptez l'offre, vous intégrez notre équipe avec un
                contrat à durée indéterminée.
              </span>
            </p>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Parcours;
