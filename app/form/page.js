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

const Formulaire = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formSchema = z.object({
    nom: z.string().min(2).max(20),
    prenom: z.string().min(2).max(20),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    phone: z
      .string()
      .min(7)
      .max(15)
      .regex(/^\+[1-9]\d{1,14}$/, "Invalid phone number format"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  const onSubmit = async (values) => {
    console.log(values);
    try {
      await POST(values);
      console.log("Form submitted");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar scaleDown={1} />
      <div className="flex flex-row sm:flex-col h-screen sm:mt-[3rem]">
        <div
          className="w-[50%] sm:w-[100%] flex flex-col mx-auto
         justify-center items-center"
        >
          <Form {...form}>
            <p
              className="text-center font-semibold text-[20px] sm:text-[15px] mx-20 mt-20 
              mb-4 px-10"
            >
              Remplissez ce formulaire pour que nous puissions vous contacter
            </p>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-[60%] sm:w-[80%] text-center"
            >
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Nom"
                        className="text-black italic w-[95%] rounded-lg sm:h-[35px]"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="prenom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Prenom"
                        className="italic w-[95%] rounded-lg pl-5 pr-0 sm:h-[35px]"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="italic w-[95%] rounded-lg pl-5 pr-0 sm:h-[35px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Tel"
                        className="italic w-[95%] rounded-lg pl-5 pr-0 sm:h-[35px]"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href={"/merci"}>
                <Button
                  type="submit"
                  className="bg-transparent border-none mt-10 w-[188px] h-[123px] flex justify-center items-center 
                  bg-[url('/form-btn.svg')] mx-auto cursor-pointer font-semibold 
                  text-[30px] sm:text-[25px] sm:mt-5"
                >
                  Envoyer
                </Button>
              </Link>
            </form>
          </Form>
        </div>
        <div
          className="w-[50%] bg-[url('/form-bg-lg.svg')] sm:bg-none bg-center 
          bg-no-repeat h-screen bg-cover sm:bg-[url('/form-bg-sm.svg')] 
          sm:w-[100%] flex flex-col justify-center items-end"
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

export default Formulaire;
