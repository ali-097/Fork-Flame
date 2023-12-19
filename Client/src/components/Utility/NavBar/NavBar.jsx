import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className='navbar'>
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

				<img
					src='/logo.png'
					alt='logo'
					className='logo'
				/>

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
				<li
					onClick={() =>
						window.scrollTo({
							top: document.body.scrollHeight,
							behavior: "smooth",
						})
					}
				>
					Contact
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
