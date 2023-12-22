import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ cardTitle, cardDescription, cardImage, right }) => {
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
