import "./ChefCards.css";

const ChefCards = ({ name, text, image }) => {
	return (
		<div className='chef--card'>
			<h1 className='chef--name'>{name}</h1>
			<div className='chef--info'>
				<p className='chef--text'>{text}</p>
				<img
					src={image}
					alt={name}
					className='chef--image'
				/>
			</div>
		</div>
	);
};

export default ChefCards;
