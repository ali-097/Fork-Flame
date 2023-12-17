import { useState } from "react";
import NavBar from "../Utility/NavBar/NavBar.jsx";
import { itemTypes } from "./ItemTypes.js";
import MenuDetails from "./MenuDetails/MenuDetails.jsx";
import "./Menu.css";

const Menu = () => {
	const [itemsTypes] = useState(itemTypes);
	return (
		<div className='menu--page'>
			<NavBar />
			<div className='menu--items'></div>
			{Object.keys(itemsTypes).map((item) => (
				<MenuDetails
					key={item}
					title={itemsTypes[item].title}
					description={itemsTypes[item].description}
					left={itemsTypes[item].left}
				/>
			))}
		</div>
	);
};

export default Menu;
