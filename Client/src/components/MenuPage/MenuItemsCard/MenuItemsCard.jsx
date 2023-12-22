import "./MenuItemsCard.css";

const MenuItemsCard = ({ title, items }) => {
	return (
		<div>
			<h1
				className='mi--card--title'
				data-aos='fade-up'
			>
				{title}
			</h1>
			{Object.values(items).map((item) => {
				return (
					<div
						key={item.name}
						className='item--card'
					>
						{item.right && (
							<img
								src={item.image}
								alt={item.name}
								className='item--image'
								data-aos={"fade-right"}
							/>
						)}
						<div
							className='item--card--overlay'
							data-aos={item.right ? "fade-left" : "fade-right"}
						>
							<h1 className='item--name'>{item.name}</h1>
							<p className='item--desc'>{item.description}</p>
						</div>
						{!item.right && (
							<img
								src={item.image}
								alt={item.name}
								className='item--image'
								data-aos={"fade-left"}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default MenuItemsCard;
