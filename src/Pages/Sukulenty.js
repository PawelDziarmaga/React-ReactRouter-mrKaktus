import "../style/Rosliny.css";
import { NavLink } from "react-router-dom";

import API from "../data.json";
import AloesMini from "../Pictures/Mini/AloesMini.png";
import SansewieriaMini from "../Pictures/Mini/SansewieriaMini.png";

const Sukulenty = () => {
  return (
    <>
      <div className="listPage">
        <h1>Sukulenty :</h1>
        <NavLink to="/sukulenty/aloes">
          <div className="box">
            <h2>{API.sukulenty.aloes.name}</h2>
            <img src={AloesMini} alt="" />
            <p>
              {API.sukulenty.aloes.firstShortInfo}
              <br />
              <br />
              <span>Więcej...</span>
            </p>
          </div>
        </NavLink>
        <NavLink to="/sukulenty/sansewieria">
          <div className="box">
            <h2>{API.sukulenty.sansewieria.name}</h2>
            <img src={SansewieriaMini} alt="" />
            <p>
              {API.sukulenty.sansewieria.firstShortInfo}
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

export default Sukulenty;
