import Home from "./components/HomePage/Home";
import Reservation from "./components/ReservationPage/Reservation";
import Menu from "./components/MenuPage/Menu";
import Gallery from "./components/GalleryPage/Gallery";
import About from "./components/AboutPage/About";
import Admin from "./components/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true,
			offset: 200,
		});
	}, []);
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/reservation'
					element={<Reservation />}
				/>

				<Route
					path='/menu'
					element={<Menu />}
				/>
				<Route
					path='/gallery'
					element={<Gallery />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/about/:Id'
					element={<About />}
				/>
				<Route
					path='/admin'
					element={<Admin />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
