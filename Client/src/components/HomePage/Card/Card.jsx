import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "aos/dist/aos.css";

const Card = ({ cardTitle, cardDescription, cardImage, right }) => {
	useEffect(() => {
		AOS.init({
			duration: 1500, // Duration of the animation
			once: true, // Only animate once
			offset: 200, // Offset (in pixels) from the top of the element when the animation should start
		});
	}, []);
	return (
		<>
			<div
				className='card'
				data-aos={right ? "flip-right" : "flip-left"}
			>
				{!right && (
					<div
						className='card--image'
						style={{ backgroundImage: `url(${cardImage})` }}
					></div>
				)}
				<div className='card--description'>
					<h1>{cardTitle}</h1>
					<p>{cardDescription}</p>
					<Link
						className='link'
						to={`/${
							cardTitle === "Location"
								? `About/${cardTitle}`
								: cardTitle === "Our Chefs"
								? `About/Chefs`
								: cardTitle
						}`}
					>
						<p>View {cardTitle}</p>
					</Link>
				</div>
				{right && (
					<div
						className='card--image'
						style={{ backgroundImage: `url(${cardImage})` }}
					></div>
				)}
			</div>
		</>
	);
};

export default Card;
