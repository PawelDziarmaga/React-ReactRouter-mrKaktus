import "../style/Main.css";
import { Route } from "react-router-dom";

import Rosliny from "../Pages/Rosliny";
import Kaktusy from "../Pages/Kaktusy";
import Sukulenty from "../Pages/Sukulenty";

import Home from "../Pages/Home";
import Aloes from "../Pages/Aloes";
import Fikus from "../Pages/Fikus";
import Grubosz from "../Pages/Grubosz";
import Opuncja from "../Pages/Opuncja";
import Sansewieria from "../Pages/Sansewieria";
import Szczepiony from "../Pages/Szczepiony";

const Main = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/rosliny" exact component={Rosliny} />
      <Route path="/kaktusy" exact component={Kaktusy} />
      <Route path="/sukulenty" exact component={Sukulenty} />

      <Route path="/rosliny/grubosz" exact component={Grubosz} />
      <Route path="/rosliny/fikus" exact component={Fikus} />
      <Route path="/kaktusy/opuncja" exact component={Opuncja} />
      <Route path="/kaktusy/szczepiony" exact component={Szczepiony} />
      <Route path="/sukulenty/aloes" exact component={Aloes} />
      <Route path="/sukulenty/sansewieria" exact component={Sansewieria} />
    </>
  );
};

export default Main;
