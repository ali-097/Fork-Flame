import "./ChefCards.css";

const ChefCards = ({ name, text, image }) => {
	return (
		<div className='chef--card'>
			<h1
				className='chef--name'
				data-aos={"fade-down"}
			>
				{name}
			</h1>
			<div className='chef--info'>
				<p
					className='chef--text'
					data-aos={"fade-right"}
				>
					{text}
				</p>
				<img
					src={image}
					alt={name}
					className='chef--image'
					data-aos={"flip-left"}
				/>
			</div>
		</div>
	);
};

export default ChefCards;
