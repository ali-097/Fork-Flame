import "./MenuDetails.css";

const MenuDetails = ({ title, description, left }) => {
	const leftcontainerstyles = {};
	const rightcontainerstyles = {};
	const lefttitlestyles = {
		background:
			"linear-gradient(90deg, #283128 0%, rgba(40, 49, 40, 0.62) 15.73%, rgba(40, 49, 40, 0.30) 36.04%, rgba(36, 40, 36, 0.00) 62.6%, rgba(40, 49, 40, 0.06) 88.65%, rgba(40, 49, 40, 0.00) 100%)",
		paddingLeft: "3rem",
	};
	const righttitlestyles = {
		background:
			"linear-gradient(90deg, rgba(40, 49, 40, 0) 0%, rgba(40, 49, 40, 0.06) 11.35%, rgba(40, 49, 40, 0) 37.4%, rgba(36, 40, 36, 0) 63.96%, rgba(40, 49, 40, 0.3) 84.27%, rgba(40, 49, 40, 0.62) 100%)",
		paddingRight: "3rem",
		textAlign: "right",
	};
	const leftdescstyles = {
		paddingLeft: "3rem",
	};
	const rightdescstyles = {
		paddingRight: "3rem",
		textAlign: "right",
	};
	return (
		<div
			className='menu--details'
			style={left ? leftcontainerstyles : rightcontainerstyles}
		>
			<h1 style={left ? lefttitlestyles : righttitlestyles}>{title}</h1>
			<p style={left ? leftdescstyles : rightdescstyles}>{description}</p>
		</div>
	);
};

export default MenuDetails;
