"use client";
import * as React from "react";

const EmailTemplate = ({ values }) => {
  const { nom, prenom, email, phone } = values;

  return (
    <div>
      <h3>Nom: {nom}</h3>
      <h3>Prenom: {prenom}</h3>
      <h3>Email: {email}</h3>
      <h3>Tel: {phone}</h3>
    </div>
  );
};

export default EmailTemplate;
