import "../style/App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./Navigation";
import Logo from "./Logo";
import Main from "./Main";
import Footer from "./Footer";

import API from "../data.json";

const App = () => {
	return (
		<Router basename='/#'>
			<div className='app'>
				<nav> {<Navigation />}</nav>
				<div className='logo'>{<Logo />}</div>
				<main>{<Main api={API} />}</main>
				<footer>{<Footer />}</footer>
			</div>
		</Router>
	);
};
export default App;
