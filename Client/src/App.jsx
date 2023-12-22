import Home from "./components/HomePage/Home";
import Reservation from "./components/ReservationPage/Reservation";
import Menu from "./components/MenuPage/Menu";
import Gallery from "./components/GalleryPage/Gallery";
import About from "./components/AboutPage/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
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
			</Routes>
		</Router>
	);
};

export default App;
