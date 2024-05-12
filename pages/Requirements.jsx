"use client";
import React from "react";
import Link from "next/link";

const Requirements = () => {
  return (
    <>
      <section
        id="requirements"
        className="mx-auto pl-[7rem] mt-10 sm:pl-[2rem] sm:h-[100%]"
      >
        <div className="sm:pb-10">
          <h1 className="font-bold text-black text-[1.5rem] sm:w-[314px]">
            Nous avons besoin de votre{" "}
            <span className="font-bold bg-[url('/req-rec.svg')] w-[242px] h-[63px]">
              savoir-faire
            </span>{" "}
            pour magnifier les :
          </h1>
          <div className="flex flex-row justify-between sm:w-[324px] sm:h-[410px] sm:mb-[10rem]">
            <img
              src="/bullets.svg"
              alt="vector"
              className="mt-[47px] size-24 sm:scale-y-[.5] sm:hidden"
            />
            <img
              src="/bullets-sm.svg"
              alt="vector"
              className="sm:w-full lg:hidden sm:h-full sm:visible scale-[.70]"
            />
            <div className="mt-[55px]">
              <p className="text-[20px]">
                <span className="font-bold">Produits locaux : </span>
                Nous sélectionnons pour vous les meilleurs élevages et artisans
                de la région. Vous aurez la fierté de travailler avec les
                produits que nos producteurs locaux peuvent offrir de mieux.
              </p>
              <br />
              <p className="text-[20px]">
                <span className="font-bold">
                  Environnement de travail moderne et agréable :
                </span>
                Vous travaillerez dans un tout nouvel atelier complètement
                équipé et spécialement conçu pour votre confort. Nous vous
                assurons les meilleures conditions de travail pour que vous
                puissiez exceller dans vos tâches.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mx-auto flex flex-col justify-center items-center">
          <h3 className="font-semibold text-[25px]">Votre missions ?</h3>
          <p className="mt-10 text-center text-[20px] sm:w-[315px]">
            Sublimer et mettre en valeur le meilleur assortiment de boucheries -
            charcuteries - traiteur <br /> en comptoir traditionnel et le
            libre-service pour nos clients.
          </p>
        </div>
        <div
          className="mx-auto flex justify-center items-center bg-[url('/req-big-box.svg')] 
        sm:bg-[url('/req-big-box-sm.svg')] w-[1074px] h-[575px] sm:w-[317px] sm:h-[592px] 
        bg-no-repeat sm:bg-cover sm:mt-10 sm:text-center"
        >
          <div
            className="mx-auto bg-[url('/req-img.svg')] w-[1017px] h-[521px]
          sm:bg-[url('/req-img-sm.svg')] sm:w-[294px] sm:h-[563px] sm:bg-center"
          ></div>
        </div>
        <p className="text-center mt-10">
          Voici 7 bonnes raisons de rejoindre notre équipe
        </p>
        <div
          className="flex flex-row justify-start sm:items-start sm:mx-auto mt-10 sm:mt-0
         sm:w-[317px] sm:h-[1112px] sm:align-top"
        >
          <img
            src="/lg-bullets-sm.svg"
            alt="vector"
            className="sm:w-[50%] sm:h-[1112px] bottom-10 sm:pr-1 lg:hidden scale-y-90"
          />
          <img
            src="/lg-bullets.svg"
            alt="vector"
            className="size-[25rem] w-[50px] pt-2 sm:hidden"
          />

          <div className="sm:flex sm:flex-col sm:pt-[50px]">
            <p className="text-[20px]">
              <span className="font-bold"> Emploi stable et direct : </span>
              Commencez avec un contrat à durée indéterminée dès votre arrivée.
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold">Salaire compétitif :</span>
              Nous payons bien parce que vos compétences et votre talent le
              méritent.
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold"> Ambiance familiale : </span>
              Vos enfants seront gâtés à la Saint-Nicolas, nous partageons des
              moments conviviaux comme les dîners annuels et les barbecues
              d'été.
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold"> Gagnez plus : </span>
              Faites des heures supplémentaires rémunérées en travaillant avec
              notre service traiteur lors d'événements.
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold"> Formation continue : </span>
              Chaque année, bénéficiez de formations et de visites chez nos
              fournisseurs pour enrichir vos connaissances.
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold">Évolution de carrière :</span>
              Nous écoutons vos ambitions et vous aidons à grandir chez nous
              grâce à votre entretien annuel prévu à cet effet..
            </p>
            <br />
            <p className="text-[20px]">
              <span className="font-bold">
                Travaillez avec une super équipe :
              </span>
              Chez nous, avancer seul on va plus vite, mais avancer ensembles,
              on va plus loin !
            </p>
          </div>
        </div>

        <div
          className="bg-[url('/req-cta.svg')] w-[100%] h-[123px] sm:bg-[url('/req-cta-sm.svg')]
          bg-no-repeat bg-contain bg-center sm:w-[286px] sm:h-[144px] justify-self-center 
          flex justify-center mx-auto mt-10 sm:mt-[5rem]"
        >
          <Link
            href={"/form"}
            className="text-black no-underline flex justify-center items-center text-[25px]
              sm:text-[25px] sm:text-center font-medium"
          >
            Je réserve mon Entretien
          </Link>
        </div>
      </section>
    </>
  );
};

export default Requirements;
