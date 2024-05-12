import React from "react";

const Testimonials = () => {
  return (
    <>
      <section
        id="Témoignages"
        className="px-0 mx-auto flex justify-start items-center
        flex-col h-[842px] mt-10 sm:h-[1859px]"
      >
        <h1
          className="text-black font-bold text-[40px] sm:text-[25px] px-[7rem] 
        sm:px-[2rem]"
        >
          Ce que nos{" "}
          <span className="font-bold bg-[url('/collab-vect.svg')] w-[190px] h-[39px]">
            collaborateurs
          </span>{" "}
          pensent de nous
        </h1>

        <div
          className="flex flex-row sm:flex-col justify-center items-center mt-10 
        gap-[4rem] gap-[1rem]"
        >
          <div className="bg-no-repeat w-[338px] h-full text-center py-0 sm:mb-10">
            <img
              src="/collab-img-01.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p
              className="text-black mx-auto font-bold mt-5 text-[20px] flex flex-center 
            items-center"
            >
              Nathan
            </p>
            <p className="text-black mx-auto  text-[20px] flex flex-center items-center">
              Chef-Boucher
            </p>
            <p className="mt-5">
              Fier de son équipe <br /> Beau matériel et environnement <br />{" "}
              pour travailler <br /> Equipe soudée <br /> Se sent soutenu
            </p>
          </div>
          <div className="w-[338px] h-full text-center py-0">
            <img
              src="/collab-img-02.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p
              className="text-black mx-auto font-bold mt-5 text-[20px] flex 
            flex-center items-center"
            >
              Madisson & Vincianne
            </p>
            <p className="text-black mx-auto  text-[20px] flex flex-center items-center">
              Vendeuses boucherie
            </p>
            <p className="mt-10">
              Ambiance familiale <br /> Belle entente dans l’équipe <br /> Pour
              tout problème on trouve des <br /> solutions <br /> Chef boucher
              au TOP <br /> Beaux horaires
            </p>
          </div>
          <div className="w-[338px] h-full text-center py-0">
            <img
              src="/collab-img-03.svg"
              alt="Icon 1"
              className="w-[313px] h-[294px] pt-[15px] object-cover align-top"
            />
            <p className="text-black mx-auto font-bold mt-5 text-[20px] flex flex-center items-center">
              Justin
            </p>
            <p className="text-black mx-auto  text-[20px] flex flex-center items-center">
              Pizzaïolo
            </p>
            <p className="mt-10">
              Salaire attractif <br /> Super ambiance entre collègues <br /> Top
              magasin
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
