"use client";
import Navbar from "@/pages/Navbar";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import POST from "../api/send";

const Merci = () => {
  return (
    <>
      <Navbar scaleDown={1} navTopLg={10} navRightLg={7} />
      <div className="flex flex-row sm:flex-col h-screen">
        <div
          className="w-[50%] sm:w-[100%] sm:h-[50%] flex flex-col mx-auto
         justify-center items-center"
        >
          <h1 className=" my-10 font-semibold">Merci! </h1>
          <hr className="h-[2px] w-[60%] bg-orange border-none" />
          <p
            className="text-center px-[7rem]  my-10 text-[20px] sm:text-[15px] 
          font-semibold text-balance"
          >
            Votre formulaire a été transmis. <br /> Notre équipe vous contactera
            dans les 24h
          </p>
        </div>
        <div
          className="w-[50%] bg-[url('/form-bg-lg.svg')] bg-center 
          bg-no-repeat h-screen bg-cover sm:bg-[url('/form-bg-sm.svg')] 
          sm:w-[100%] sm:h-[50%] flex flex-col justify-center items-end"
        >
          <img
            src="/form-bg-img-lg.svg"
            alt=""
            className="sm:hidden w-[100%] h-[654px] scale-90 mt-[5.5rem]"
          />
          <img
            src="form-bg-img-sm.svg"
            alt=""
            className="lg:hidden w-[100%] h-[357px]"
          />
        </div>
      </div>
    </>
  );
};

export default Merci;
