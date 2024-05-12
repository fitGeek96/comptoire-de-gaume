"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Team = () => {
  return (
    <>
      <section
        id="team"
        className="sm:px-4 my-0 mx-auto px-0 flex flex-col justify-start items-center 
        mt-10 bg-[url('/brown-bg.png')] bg-cover bg-no-repeat sm:w-full 
        sm:text-left sm:h-[900px] sm:w-auto"
      >
        <h1
          className="font-bold text-[40px] sm:text-[25px] mt-10 sm:mt-0 text-white 
        text-bold pt-10 sm:pt-5"
        >
          Nous n’avons plus qu’un{" "}
          <span className="bg-[url('/team-rect.svg')] text-black font-bold">
            {" "}
            seul poste de boucher
          </span>{" "}
          pour <br /> compléter notre équipe.
        </h1>
        <div
          className="my-0 mx-auto px-0 flex flex-col justify-center items-center
         "
        >
          <p className="text-white text-[20px] mt-10">
            Réservez maintenant votre rendez-vous avant qu’il ne soit trop tard
            !
          </p>
          <h3
            className="text-center text-[25px] sm:text-[20px] sm:w-[350px] sm:mr-10 mt-10
        font-bold text-white"
          >
            Épanouissez-vous dans un travail qui a du sens
          </h3>
          <div
            className="sm:w-auto sm:h-auto mx-3 sm:w-full sm:flex sm:justify-start 
            sm:items-start
         "
          >
            <p
              className="text-white mt-10 text-[20px] sm:h-[100%] sm:leading-loose
             sm:text-balance sm:text-center sm:px-2"
            >
              Vous aurez VRAIMENT le sentiment de contribuer à l’économie locale
              en mettant en valeur les meilleurs produits de la région.
            </p>
          </div>
        </div>

        <div
          className="mt-10 mx-auto py-10 flex justify-center items-center w-full 
        "
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full h-[446px] sm:h-full"
          >
            <CarouselContent className="">
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className={`basis-3/3 scale-100 opacity-100`}
                  >
                    <img
                      src={`carousel-vect-lg-${index + 1}.svg`}
                      alt="small screen"
                      className={`sm:hidden`}
                    />
                    <img
                      src={`carousel-vect-sm-${index + 1}.svg`}
                      alt="small screen"
                      className={`lg:hidden sm:w-[320px] sm:h-[171px] size-32`}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious
              className=" z-[999] absolute top-33 left-[-5rem] right-0 bottom-0 
            mx-auto bg-transparent sm:top-60 border-none"
            />
            <CarouselNext
              className="z-[999] absolute top-33 left-[5rem] right-0 bottom-0 
            mx-auto bg-transparent sm:top-60 sm:left-[3rem] border-none"
            />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Team;
