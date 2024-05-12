"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ scaleDown, navTopLg, navRightLg }) => {
  const navigation = ["Présentation", "Qui sommes-nous", "Témoignages", "FAQ"];

  const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.3 } }, // Adjust duration as needed
  };

  const zoomInVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: "60%", // Start from the right
      y: "-60%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: "0%", // Move to center horizontally
      y: "0%", // Move to center vertically
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      x: "60%", // Move back to the right
      y: "-60%", // Move back up
      transition: {
        duration: 2,
        ease: "easeIn",
      },
    },
  };
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div
            className={`absolute left-0 right-0 w-screen max-w-[1280px] mx-auto pt-5 
            sm:pt-[6px] flex flex-row justify-between items-center h-11 top-5 
            sm:scale-90`}
          >
            <img
              src="/Logo.svg"
              alt="logo"
              // width={300}
              // height={300}
              className="sm:w-[128px] sm:h-[50px] "
            />

            <Disclosure.Button
              className="relative bg-transparent bg-[url('/menu-glyph.svg')] bg-cover 
              bg-center inline-flex justify-center items-center bg-no-repeat
              w-[150px] h-[4rem] border-none"
            >
              <span
                className="z-[52] text-black font-bold text-[1rem] sm:text-[18px] 
              text-center mr-5"
              >
                Menu
              </span>
              <div className="relative inset-0 flex items-center justify-center">
                <div className="z-[52] opacity-100 absolute">
                  {open ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />{" "}
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </div>

                {/* <img
                  src="/menu-glyph.svg"
                  alt="Menu Icon"
                  className="relative z-[51] sm:w-auto sm:h-auto broder-solid border-red-400
                  mr-10"
                /> */}
              </div>
            </Disclosure.Button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                variants={zoomInVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`absolute top-[7rem] sm:top-[100px] 
                right-[7rem] sm:right-[37px] z-[49]`}
              >
                <Disclosure.Panel className="relative text-center">
                  <div className="absolute inset-0 backdrop-blur-md bg-white/30 rounded-lg"></div>
                  <div
                    className="space-y-4 pt-[5rem] pb-[1rem] w-[480px] sm:w-[333px] 
                  text-center"
                  >
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={`/#${index === 1 ? "QuiSommeNous" : item}`}
                        className="relative z-[100] py-2 text-[#2a2826] px-[7rem] sm:px-[37px] hover:bg-gray-800 hover:text-white text-[1.5rem] sm:[20px] flex flex-col no-underline"
                      >
                        {item}
                      </a>
                    ))}
                    <div className="grid justify-items-stretch w-[428px] sm:w-[234px] h-[123px] sm:h-[159px] mt-[1rem] mx-auto">
                      <img
                        src="/big-box-group1.svg"
                        alt="top group"
                        className="justify-self-end m-0 p-0 z-[50]"
                      />
                      <div className="bg-[url('/big-box-cta.svg')] sm:bg-[url('/big-box-cta-sm.svg')] hover:bg-[url('/big-box-cta-brown.svg')] z-[50] w-[368px] sm:w-[183px] h-[70px] sm:h-[108px] bg-no-repeat bg-center bg-contain justify-self-center flex justify-center">
                        <Link
                          href={"/form"}
                          className="text-black no-underline hover:text-white flex justify-center items-center text-[1.5rem] sm:text-[20px]"
                        >
                          Je postule maintenant
                        </Link>
                      </div>
                      <img
                        src="/big-box-group2.svg"
                        alt="top group"
                        className="justify-self-start m-0 p-0 z-[50]"
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
