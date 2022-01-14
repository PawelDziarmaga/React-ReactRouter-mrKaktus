import "../style/Main.css";
import { Route, Switch } from "react-router-dom";

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
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route exact path='/rosliny'>
					<Rosliny />
				</Route>

				<Route exact path='/kaktusy'>
					<Kaktusy />
				</Route>

				<Route exact path='/sukulenty'>
					<Sukulenty />
				</Route>

				<Route path='/rosliny/grubosz'>
					<Grubosz />
				</Route>

				<Route path='/rosliny/fikus'>
					<Fikus />
				</Route>

				<Route path='/kaktusy/opuncja'>
					<Opuncja />
				</Route>

				<Route path='/kaktusy/szczepiony'>
					<Szczepiony />
				</Route>

				<Route path='/sukulenty/aloes'>
					<Aloes />
				</Route>

				<Route path='/sukulenty/sansewieria'>
					<Sansewieria />
				</Route>

				<Route path='*'>
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default Main;
