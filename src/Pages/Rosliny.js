import "../style/Rosliny.css";
import { NavLink } from "react-router-dom";

import API from "../data.json";
import GruboszMini from "../Pictures/Mini/GruboszMini.png";
import FikusMini from "../Pictures/Mini/FicusMini.png";

const Rosliny = () => {
  return (
    <>
      <div className="listPage">
        <h1>Rosliny</h1>
        <NavLink to="/rosliny/grubosz">
          <div className="box">
            <h2>{API.rosliny.grubosz.name}</h2>
            <img src={GruboszMini} alt="" />
            <p>
              {API.rosliny.grubosz.firstShortInfo}
              <br />
              <br />
              <span>Więcej...</span>
            </p>
          </div>
        </NavLink>
        <NavLink to="/rosliny/fikus">
          <div className="box">
            <h2>{API.rosliny.fikus.name}</h2>
            <img src={FikusMini} alt="" />
            <p>
              {API.rosliny.fikus.firstShortInfo}
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

export default Rosliny;
