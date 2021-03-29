import React, { useState } from "react";
import HomeItem from "./HomeItem";

import "../style/Home.css";

import API from "../data.json";

import AloesMini from "../Pictures/Mini/AloesMini.png";
import FicusMini from "../Pictures/Mini/FicusMini.png";
import GruboszMini from "../Pictures/Mini/GruboszMini.png";
import OpuntiaMini from "../Pictures/Mini/OpuntiaMini.png";
import SansewieriaMini from "../Pictures/Mini/SansewieriaMini.png";
import SzczepionyMini from "../Pictures/Mini/SzczepionyMini.png";

const items = [
  {
    name: API.sukulenty.aloes.name,
    picture: AloesMini,
    description: API.sukulenty.aloes.firstShortInfo,
  },
  {
    name: API.rosliny.fikus.name,
    picture: FicusMini,
    description: API.rosliny.fikus.firstShortInfo,
  },
  {
    name: API.rosliny.grubosz.name,
    picture: GruboszMini,
    description: API.rosliny.grubosz.firstShortInfo,
  },
  {
    name: API.kaktusy.opuncja.name,
    picture: OpuntiaMini,
    description: API.kaktusy.opuncja.firstShortInfo,
  },
  {
    name: API.sukulenty.sansewieria.name,
    picture: SansewieriaMini,
    description: API.sukulenty.sansewieria.firstShortInfo,
  },
  {
    name: API.kaktusy.szczepiony.name,
    picture: SzczepionyMini,
    description: API.kaktusy.szczepiony.firstShortInfo,
  },
];

const Home = () => {
  const [beforeChoosenOne, setBeforeChoosenOne] = useState("");

  const handleButton = () => {};
  let choosenOne;
  const handleCHangeItem = (e) => {
    if (beforeChoosenOne) {
      document.getElementById(beforeChoosenOne).classList.remove("activeTwo");
    }

    choosenOne = document.getElementById(e.target.id);
    choosenOne = e.target.id;
    if (!choosenOne) {
      choosenOne = e.target.className;
    }
    setBeforeChoosenOne(choosenOne);
    document.getElementById(choosenOne).classList.add("activeTwo");

    const paragraph = items.filter((item) => item.name === choosenOne);
    document.querySelector("div.paragraph p").textContent =
      paragraph[0].description;
  };

  const pages = items.map((item) => (
    <HomeItem
      click={handleCHangeItem}
      key={item.name}
      name={item.name}
      picture={item.picture}
    />
  ));

  return (
    <>
      <div className="container">
        <h1>Kolekcja najciekawszych roślin</h1>
        <div className="firstFloor">
          {pages[0]}
          {pages[1]}
          {pages[2]}
        </div>
        <div className="paragraph">
          <p></p>
          <button onClick={handleButton}>Dowiedz się więcej</button>
        </div>
        <div className="secondFloor">
          {pages[3]}
          {pages[4]}
          {pages[5]}
        </div>
      </div>
    </>
  );
};

export default Home;
