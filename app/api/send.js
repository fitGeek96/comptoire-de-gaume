"use server";

import EmailTemplate from "@/pages/Email-template";
import { Resend } from "resend";

const resend = new Resend("re_WJAxs4u4_CQVtbqTHyC1SC991BiNpki2R");
export default async function POST(values) {
  const { nom, prenom, email, phone } = values;

  try {
    const { data } = await resend.emails.send({
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

    console.log("Email sent:", data);
    return { status: "success", message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { status: "error", message: "Error sending email", error };
  }
}
