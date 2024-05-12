import React from "react";

const Faq = () => {
  return (
    <>
      <section
        id="FAQ"
        className="px-[7rem] sm:px-[2rem] mx-auto flex flex-col justify-start pt-10 
       items-start h-[1054px] sm:h-[2510px] bg-[url('/brown-bg.png')] 
        bg-cover bg-no-repeat"
      >
        <h1 className="font-bold text-[40px] sm:text-[25px] text-white text-bold">
          Vous avez des{" "}
          <span className="bg-[url('/faq-vect.svg')] w-[244px] h-[62px]">
            {" "}
            questions ?
          </span>
        </h1>
        <div className="all-sides flex flex-row sm:flex-col mx-auto pt-20 gap-4">
          <div className="left-side px-[3rem] sm:px-0">
            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[400px]">
              <h1 className="text-white font-bold pt-5 sm:text-[20px]">
                Quelles sont les qualifications spécifiques requises pour le
                poste de boucher au Comptoir de Gaume ?
              </h1>
              <div className="flex flex-row justify-between gap-4 ">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  Nous recherchons des bouchers qualifiés, passionnés par leur
                  métier et motivés à offrir des produits de qualité. Une
                  expérience dans la boucherie est préférée, mais la passion et
                  le désir d'apprendre sont tout aussi importants.
                </p>
              </div>
            </div>

            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[370px]">
              <h1 className="text-white font-bold pt-5 sm:text-[20px]">
                Quelles sont les étapes du processus de recrutement ?{" "}
              </h1>
              <div className="flex flex-row justify-between gap-4">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  Le processus commence par une rencontre pour discuter de vos
                  aspirations, suivie d'une période d'essai de trois
                  demi-journées. Si tout se passe bien, vous recevrez une offre
                  de contrat à durée indéterminée.
                </p>
              </div>
            </div>

            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[400px]">
              <h1 className="text-white font-bold pt-5 sm:pt-0 sm:text-[20px]">
                Quels sont les avantages de travailler au Comptoir de Gaume ?
              </h1>
              <div className="flex flex-row justify-between gap-4 ">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  En plus d'un environnement de travail moderne et d'une
                  rémunération compétitive, vous bénéficierez de l'ambiance
                  familiale de notre entreprise, des possibilités de faire des
                  heures supplémentaires rémunérées et d'un soutien à
                  l'évolution de votre carrière.
                </p>
              </div>
            </div>
          </div>
          <div className="right-side px-[3rem] sm:px-0">
            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[400px]">
              <h1 className="text-white font-bold pt-5 sm:text-[20px]">
                Le Comptoir de Gaume propose-t-il des opportunités de formation
                ?{" "}
              </h1>
              <div className="flex flex-row justify-between gap-4 ">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  Oui, nous offrons une formation continue pour tous nos
                  employés. Cela inclut des visites chez nos fournisseurs et des
                  formations internes pour vous aider à évoluer dans votre
                  carrière.
                </p>
              </div>
            </div>
            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[380px]">
              <h1 className="text-white font-bold pt-5 sm:text-[20px]">
                Existe-t-il des mesures de soutien si je décide de changer de
                carrière ?{" "}
              </h1>
              <div className="flex flex-row justify-between gap-4 ">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  Oui, si vous souhaitez changer de direction professionnelle,
                  nous offrons un coaching personnalisé et un soutien actif pour
                  faciliter votre réorientation.
                </p>
              </div>{" "}
            </div>
            <div className=" w-[493px] h-[281px] sm:w-[318px] sm:h-[400px]">
              <h1 className="text-white font-bold pt-5 sm:pt-0 sm:text-[20px]">
                Que fait le Comptoir de Gaume pour soutenir l'intégration des
                nouveaux employés ?
              </h1>
              <div className="flex flex-row justify-between gap-4">
                <img
                  src="/faq-flech.svg"
                  alt=""
                  className="w-[65px] h-[58px]"
                />
                <p className="text-white font-thin italic pt-5 sm:leading-loose">
                  Nous proposons une intégration personnalisée avec le soutien
                  d'un parrain ou d'une marraine qui vous guidera à travers les
                  premiers mois pour assurer une transition en douceur dans
                  notre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
