import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
	return (
		<>
			<ul>
				<li>
					<NavLink to='/' exact>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/rosliny'>Rośliny</NavLink>
				</li>
				<li>
					<NavLink to='/kaktusy'>Kaktusy</NavLink>
				</li>
				<li>
					<NavLink to='/sukulenty'>Sukulenty</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navigation;
