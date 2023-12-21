import AOS from "aos";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardData } from "./CardData.js";
import Card from "./Card/Card.jsx";
import Footer from "../Utility/Footer/Footer.jsx";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500, // Duration of the animation
			once: true, // Only animate once
			offset: 200, // Offset (in pixels) from the top of the element when the animation should start
		});
	}, []);
	const [cards] = useState(CardData);
	return (
		<div className='home--page'>
			<div className='home--title'>
				<div className='home--title--navbar'>
					<img
						src='/logo.png'
						alt='logo'
						onMouseEnter={(e) =>
							(e.target.style.cursor = "pointer")
						}
						onClick={() => window.location.reload()}
						data-aos={"fade-right"}
					/>
					<ul className='home--title--navbar--list' data-aos={"fade-left"}>
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
				<div className='home--title--content' data-aos={"fade-down"}>
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
				<span className='slogan--upper'>
					An outstanding setting where you can savour the moment
				</span>
				<span className='slogan--lower'>
					YOUR SENSORY EXPERIENCE STARTS HERE
				</span>
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
			<Footer />
		</div>
	);
};

export default Home;
