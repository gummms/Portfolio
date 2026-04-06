import React from "react";
import LogoItem from "./LogoItem";

import "./Logos.css";

import correFull from "../../assets/corre_full.png";
import correIcon from "../../assets/corre_icon.png";
import constaFull from "../../assets/consta_full.png";
import constaIcon from "../../assets/consta_icon.png";
import coraFull from "../../assets/cora_full.png";
import coraIcon from "../../assets/cora_icon.png";
import fluxoFull from "../../assets/fluxo_full.png";
import fluxoIcon from "../../assets/fluxo_icon.png";
import prismaFull from "../../assets/prisma_full.png";
import prismaIcon from "../../assets/prisma_icon.png";

const logosData = [
  { name: "Corre", full: correFull, icon: correIcon },
  { name: "Consta", full: constaFull, icon: constaIcon },
  { name: "CORA", full: coraFull, icon: coraIcon },
  { name: "Fluxo", full: fluxoFull, icon: fluxoIcon },
  { name: "Prisma", full: prismaFull, icon: prismaIcon },
];

const Logos = () => {
  return (
    <section className="logos-section">
      <h1>Visual identities</h1>
      <ul className="logos-list">
        {logosData.map((logo) => (
          <LogoItem key={logo.name} path={logo.full} logo={logo.name} />
        ))}
      </ul>
    </section>
  );
};

export default Logos;
