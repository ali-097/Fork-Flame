import "./MenuDetails.css";

const MenuDetails = ({ title, description, left }) => {
	const titleStyles = {
		background: left
			? "linear-gradient(90deg, #283128 0%, rgba(40, 49, 40, 0.62) 15.73%, rgba(40, 49, 40, 0.30) 36.04%, rgba(36, 40, 36, 0.00) 62.6%, rgba(40, 49, 40, 0.06) 88.65%, rgba(40, 49, 40, 0.00) 100%)"
			: "linear-gradient(90deg, rgba(40, 49, 40, 0) 0%, rgba(40, 49, 40, 0.06) 11.35%, rgba(40, 49, 40, 0) 37.4%, rgba(36, 40, 36, 0) 63.96%, rgba(40, 49, 40, 0.3) 84.27%, rgba(40, 49, 40, 0.62) 100%)",
		paddingLeft: left ? "3rem" : "0",
		paddingRight: left ? "0" : "3rem",
		textAlign: left ? "left" : "right",
	};
	const descStyles = {
		paddingLeft: left ? "3rem" : "0",
		paddingRight: left ? "0" : "3rem",
		textAlign: left ? "left" : "right",
		float: left ? "" : "right",
	};
	return (
		<div className='menu--details'>
			<h1 style={titleStyles}>{title}</h1>
			<p style={descStyles}>{description}</p>
		</div>
	);
};

export default MenuDetails;
