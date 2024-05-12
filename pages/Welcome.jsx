const Welcome = () => {
  return (
    <>
      <section
        id="Présentation"
        className="bg-[url('/rect-welcome.svg')] sm:bg-[url('/rect-welcome-sm.svg')] w-[1040px] h-[236px] sm:w-[320px] sm:h-[300px] bg-cover bg-no-repeat mx-auto flex justify-center items-center my-[2rem]"
      >
        <p className="w-[936px] h-[136px] sm:w-[272px] sm:h-[250px] text-[25px] sm:text-[18px] text-center font-bold">
          Bienvenue au <span className="text-orange">Comptoir de Gaume</span> !
          Ici, nous valorisons les meilleurs produits locaux pour satisfaire nos
          clients. Si vous êtes passionné par la viande de qualité et que vous
          souhaitez offrir une expérience client exceptionnelle, vous êtes au
          bon endroit.
        </p>
      </section>
    </>
  );
};

export default Welcome;
