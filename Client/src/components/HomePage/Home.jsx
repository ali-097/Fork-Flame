import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardData } from "./CardData.js";
import Card from "./Card/Card.jsx";

const Home = () => {
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
					src='/logo-alt.png'
					alt='logo'
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				/>
				<div className='socials'>
					<img
						src='/instagram.png'
						alt='instagram'
						onClick={() =>
							window.open("https://www.instagram.com/forknflame/")
						}
					/>
					<img
						src='/facebook.png'
						alt='facebook'
						onClick={() =>
							window.open("https://www.facebook.com/forknflame/")
						}
					/>
					<img
						src='/twitter.png'
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
		</div>
	);
};

export default Home;
