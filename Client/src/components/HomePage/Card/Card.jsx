import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ cardTitle, cardDescription, cardImage, right }) => {
	return (
		<>
			<div className='card'>
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
								? "About?id=Location"
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
