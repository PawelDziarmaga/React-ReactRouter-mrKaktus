import "../style/Rosliny.css";
import { NavLink } from "react-router-dom";

import API from "../data.json";

import SzczepionyMini from "../Pictures/Mini/SzczepionyMini.png";
import OpuncjaMini from "../Pictures/Mini/OpuntiaMini.png";

const Kaktusy = () => {
  return (
    <>
      <div className="listPage">
        <h1>Kaktusy :</h1>
        <NavLink to="/kaktusy/szczepiony">
          <div className="box">
            <h2>{API.kaktusy.szczepiony.name}</h2>
            <img src={SzczepionyMini} alt="" />
            <p>
              {API.kaktusy.szczepiony.firstShortInfo}
              <br />
              <br />
              <span>Więcej...</span>
            </p>
          </div>
        </NavLink>
        <NavLink to="/kaktusy/opuncja">
          <div className="box">
            <h2>{API.kaktusy.opuncja.name}</h2>
            <img src={OpuncjaMini} alt="" />
            <p>
              {API.kaktusy.opuncja.firstShortInfo}
              <br />
              <br />
              <span>Więcej...</span>
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Kaktusy;
