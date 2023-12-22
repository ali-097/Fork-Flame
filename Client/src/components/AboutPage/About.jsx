import "./About.css";
import { useParams } from "react-router-dom";
import NavBar from "../Utility/NavBar/NavBar.jsx";
import Footer from "../Utility/Footer/Footer.jsx";
import ChefCards from "./ChefCards/ChefCards.jsx";
import { ChefData } from "./ChefData.js";
import { useEffect } from "react";

const About = () => {
	const { Id } = useParams();
	useEffect(() => {
		if (Id) {
			const element = document.getElementById(Id);
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, [Id]);
	return (
		<div className='about--page'>
			<NavBar />
			<div className='about--page--content'>
				<h1 className='vision--title'>Our Vision</h1>
				<div className='vision--content'>
					<p className='vision--text'>
						Welcome to Fork & Flame, where culinary passion meets
						the artistry of the grill. At Fork & Flame, our vision
						extends beyond the confines of our kitchen. We aspire to
						be more than just a restaurant; we aim to be a culinary
						destination that ignites the senses and fosters
						connections. Our commitment is to deliver an immersive
						dining experience where the fusion of fork and flame
						elevates each dish to a culinary masterpiece. Step into
						Fork & Flame and embark on a gastronomic journey where
						passion is on the menu and every bite tells a story. Our
						vision is to be the flame that sparks unforgettable
						moments, turning ordinary meals into extraordinary
						memories. Join us as we celebrate the joy of culinary
						exploration.
					</p>
					<img
						src='/about/vision-image.jpg'
						alt='vision--image'
						className='vision--image'
					/>
				</div>
				<div
					className='locations--container'
					id='Location'
				>
					<h1 className='locations--title'>Our Locations</h1>
					<p className='locations--text'>
						Discover the essence of culinary delight at our various
						locations. Each spot is carefully curated to offer a
						unique dining experience, blending exceptional flavors
						with a welcoming ambiance. From the cozy atmosphere of
						our first location, where comfort meets creativity, to
						the vibrant energy of our second destination, pulsating
						with excitement, and the serene charm of our third
						locale, nestled in natural beauty - every Fork & Flame
						venue tells a story. Join us on a gastronomic journey as
						we bring passion to the plate and create unforgettable
						moments in every corner of our culinary haven.
					</p>
					<div className='locations--images'>
						<img
							src='/about/location-1.jpg'
							alt='location-1'
						/>
						<img
							src='/about/location-2.jpg'
							alt='location-2'
						/>
						<img
							src='/about/location-3.jpg'
							alt='location-3'
						/>
					</div>
				</div>
				<div
					className='chefs--container'
					id='Chefs'
				>
					<h1 className='chefs--title'>Meet Our Chefs</h1>
					{ChefData.chefs.map((chef) => (
						<ChefCards
							key={chef.name}
							name={chef.name}
							text={chef.text}
							image={chef.image}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
