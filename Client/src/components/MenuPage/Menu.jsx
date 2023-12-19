import NavBar from "../Utility/NavBar/NavBar.jsx";
import { itemsTypes } from "./ItemTypes.js";
import { MenuItems } from "./MenuItems.js";
import MenuDetails from "./MenuDetails/MenuDetails.jsx";
import MenuItemsCard from "./MenuItemsCard/MenuItemsCard.jsx";
import Footer from "../Utility/Footer/Footer.jsx";
import "./Menu.css";
import { useEffect } from "react";

const Menu = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='menu--page'>
			<NavBar />
			<div className='menu--items'>
				{Object.keys(itemsTypes).map((item) => (
					<MenuDetails
						key={item}
						title={itemsTypes[item].title}
						description={itemsTypes[item].description}
						left={itemsTypes[item].left}
					/>
				))}
			</div>
			<div className='menu--items--card'>
				{Object.keys(MenuItems).map((item) => (
					<MenuItemsCard
						key={item}
						title={item}
						items={MenuItems[item]}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Menu;
