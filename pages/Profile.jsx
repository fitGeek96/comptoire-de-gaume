import React from "react";

const Profile = () => {
  return (
    <>
      <section id="profile" className="px-[7rem] sm:px-[2rem] mt-10">
        <h1 className="text-left text-[40px] sm:text-[25px] font-bold">
          Vous vous reconnaissez dans ce{" "}
          <span className="bg-[url('/profile.svg')] font-bold"> profil ?</span>
        </h1>
        <div className="flex justify-center flex-row sm:flex-col w-[1088px] sm:w-full mt-[4rem]">
          <div className="flex flex-col items-center mx-4 sm:mb-10">
            <img
              src="/icon-1.svg"
              alt="Icon 1"
              className="w-20 h-20 sm:scale-[1.5] sm:mb-5"
            />
            <h3 className="text-lg font-bold my-2 sm:text-[20px]">
              Votre Rôle
            </h3>
            <p className="text-center w-[229px] sm:w-[320px] sm:text-[20px]">
              Dépasser les attentes. Apportez du dynamisme et de l'excellence
              chaque jour pour étonner clients, collègues et producteurs locaux.
            </p>
          </div>
          <div className="flex flex-col items-center mx-4 sm:mb-10">
            <img
              src="/icon-2.svg"
              alt="Icon 2"
              className="w-20 h-20 sm:scale-[1.5] sm:mb-5"
            />
            <h3 className="text-lg font-bold my-2 sm:text-[20px]">Notre but</h3>
            <p className="text-center w-[284px] sm:w-[320px] sm:text-[20px]">
              Être la meilleure boucherie de toute la région, et faire vivre à
              nos clients locaux mais aussi aux touristes une expérience de
              shopping alimentaire exceptionnelle. Un mot d'ordre : Livrons du
              '' Waouh '' et du plaisir.
            </p>
          </div>
          <div className="flex flex-col items-center mx-4 sm:mb-10">
            <img
              src="/icon-3.svg"
              alt="Icon 3"
              className="w-20 h-20 sm:scale-[1.5] sm:mb-5"
            />
            <h3 className="text-lg font-bold my-2 sm:text-[20px]">
              Votre état d'esprit
            </h3>
            <p className="text-center w-[278px]  sm:w-[320px] sm:text-[20px]">
              Motivé, positif et souriant. Parce que votre attitude peut
              transformer une journée ordinaire en une journée extraordinaire
              pour celles et ceux qui croisent votre chemin.
            </p>
          </div>
          <div className="flex flex-col items-center mx-4 sm:mb-10">
            <img
              src="/icon-4.svg"
              alt="Icon 4"
              className="w-20 h-20 sm:scale-[1.5] sm:mb-5"
            />
            <h3 className="text-lg font-bold my-2 text-center sm:text-[20px]">
              Ce qui compte le plus <br /> pour nous
            </h3>
            <p className="text-center w-[273px] sm:w-[320px] sm:text-[20px]">
              La satisfaction de nos clients. C'est notre mesure de succès.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <h3 className="text-center mx-auto font-bold text-[1.5rem] sm:text-[20px] mt-[4rem] sm:mt-1 w-[848px]">
            Si vous êtes prêt à relever ces défis, nous serions ravis de vous
            avoir dans notre équipe.
          </h3>
        </div>
      </section>
    </>
  );
};

export default Profile;
