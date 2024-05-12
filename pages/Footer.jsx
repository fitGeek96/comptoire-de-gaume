import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-[url('/footer-bg.svg')] w-full h-[331px] flex flex-col 
      justify-center items-center sm:h-full"
      >
        <div
          className="flex flex-row sm:flex-col justify-between items-center
        sm:justify-center gap-[2rem]"
        >
          <div>
            <img
              src="/logo-footer.svg"
              alt=""
              className="w-[495px] h-[193px] sm:scale-75"
            />
          </div>
          <div
            className="flex flex-col justify-between sm:justify-center sm:items-center
          sm:mx-auto sm:w-[350px]"
          >
            <div className="flex mb-10 flex-row items-stretch gap-2">
              <img src="/location.svg" alt="location" className="self-center" />{" "}
              <p className="self-center text-[25px]">
                Rue d'Arlon, 18A, 6820 Florenville, Belgique
              </p>
            </div>
            <div className="flex mb-10 items-stretch gap-2">
              <img src="/call.svg" alt="phone number" className="self-center" />{" "}
              <p className="self-center text-[25px]">
                +32 (0) 61 32 52 45 / +32 (0) 475 81 26 90
              </p>
            </div>
            <div className="flex mb-10 items-stretch gap-2">
              <img src="/mail.svg" alt="email" className="self-center" />{" "}
              <p className="self-center text-[25px]">info@comptoirdegaume.be</p>
            </div>
          </div>
        </div>

        <div
          className="link flex flex-row justify-center items-center gap-[2rem] mt-10
        sm:flex-col sm:flex-col-reverse sm:gap-2 sm:mt-0"
        >
          <p>© Comptoir de Gaume 2024. Tous droits réservés.</p>
          <a href="/" className="text-black text-semibold">
            Politique de confidentialité
          </a>
          <a href="/" className="text-black text-semibold">
            Conditions d’utilisation
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
