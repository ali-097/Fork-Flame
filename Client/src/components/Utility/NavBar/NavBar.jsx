import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className='navbar'>
			<img
				src='/logo.png'
				alt='logo'
				className='logo'
			/>
			<ul>
				<Link
					to='/'
					className='link'
				>
					<li>Home</li>
				</Link>
				<Link
					to='/menu'
					className='link'
				>
					<li>Menu</li>
				</Link>
				<Link
					to='/gallery'
					className='link'
				>
					<li>Gallery</li>
				</Link>
				<Link
					to='/reservation'
					className='link'
				>
					<li>Reservation</li>
				</Link>
				<Link
					to='/about'
					className='link'
				>
					<li>About Us</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
