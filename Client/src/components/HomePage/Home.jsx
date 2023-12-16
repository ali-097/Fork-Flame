import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card.jsx";
import logo from "/logo.png";
import logo_alt from "/logo-alt.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";
import twitter from "/twitter.png";

const Home = () => {
	const [cards] = useState({
		menu: {
			cardTitle: "Menu",
			cardDescription:
				"Enter a culinary sanctuary where our menu unveils an artful tapestry of flavors. Meticulously crafted dishes blend innovation with elegance, inviting you to savor a symphony of tastes. Every plate is a chapter in an unforgettable journey of culinary artistry.",
			cardImage: "/menu.png",
			right: true,
		},
		location: {
			cardTitle: "Location",
			cardDescription:
				"Explore our culinary haven spanning various locations, where each setting tells a distinctive tale of flavors. From urban chic to coastal allure, our venues merge innovation with comfort, promising an enchanting encounter in every locale.",
			cardImage: "/location.png",
			right: false,
		},
		gallery: {
			cardTitle: "Gallery",
			cardDescription:
				"Explore our gallery, a visual journey showcasing diverse aesthetics that define our culinary world. From intimate urban scenes to captivating coastal views, each image offers a preview of the unique ambiance awaiting you.",
			cardImage: "/gallery.png",
			right: true,
		},
	});
	return (
		<>
			<div className='home--title'>
				<div className='home--title--navbar'>
					<img
						src={logo}
						alt='logo'
						onMouseEnter={(e) =>
							(e.target.style.cursor = "pointer")
						}
						onClick={() => window.location.reload()}
					/>
					<ul className='home--title--navbar--list'>
						<Link
							className='link'
							to='/about'
						>
							<li>ABOUT</li>
						</Link>
						<Link
							className='link'
							to='/gallery'
						>
							<li>GALLERY</li>
						</Link>
						<li
							onClick={() =>
								document
									.querySelector(".footer")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							CONTACT
						</li>
					</ul>
				</div>
				<div className='home--title--content'>
					<h2>WELCOME TO</h2>
					<h1>FORK & FLAME</h1>
					<Link
						className='link'
						to='/reservation'
					>
						<h3>RESERVE NOW</h3>
					</Link>
				</div>
			</div>
			<div className='slogan'>
				<p className='slogan--upper'>
					An outstanding setting where you can savour the moment
				</p>
				<p className='slogan--lower'>
					YOUR SENSORY EXPERIENCE STARTS HERE
				</p>
			</div>
			{Object.keys(cards).map((card) => (
				<Card
					key={card}
					cardTitle={cards[card].cardTitle}
					cardDescription={cards[card].cardDescription}
					cardImage={cards[card].cardImage}
					right={cards[card].right}
				/>
			))}
			<div className='awards'>
				<h1>AWARDS</h1>
				<div className='awards--content'>
					<img
						src='/award1.png'
						alt='award1'
					/>
					<img
						src='/award2.png'
						alt='award2'
					/>
					<img
						src='/award3.png'
						alt='award3'
					/>
					<img
						src='/award4.png'
						alt='award4'
					/>
					<img
						src='/award5.png'
						alt='award5'
					/>
				</div>
			</div>
			<div className='footer'>
				<img
					src={logo_alt}
					alt='logo'
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				/>
				<div className='socials'>
					<img
						src={instagram}
						alt='instagram'
						onClick={() =>
							window.open("https://www.instagram.com/forknflame/")
						}
					/>
					<img
						src={facebook}
						alt='facebook'
						onClick={() =>
							window.open("https://www.facebook.com/forknflame/")
						}
					/>
					<img
						src={twitter}
						alt='twitter'
						onClick={() =>
							window.open("https://twitter.com/forknflame")
						}
					/>
				</div>
				<p>
					© 2023 FORK & FLAME - CONTACT@FORKNFLAME.COM - +92 0333 941
					47 58 - PAKISTAN
				</p>
			</div>
		</>
	);
};

export default Home;
