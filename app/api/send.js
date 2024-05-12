"use server";

import EmailTemplate from "@/pages/Email-template";
import { Resend } from "resend";

const resend = new Resend("re_fC3rWhKL_NLhiC4577ttuaPfiZWD8Hs1c");
export default async function POST(values) {
  const { nom, prenom, email, phone } = values;

  const { data, error } = await resend.emails.send({
    from: "Comptoire de Gaume <onboarding@resend.dev>",
    to: "fitgeek96@gmail.com",
    subject: "Testing ...",
    html: `<div>
            <h3>Nom: ${nom}</h3>
            <h3>Prenom: ${prenom}</h3>
            <h3>Email: ${email}</h3>
            <h3>Tel: ${phone}</h3>
          </div>`,
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
