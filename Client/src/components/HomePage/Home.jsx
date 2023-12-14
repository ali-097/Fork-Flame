import "./Home.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import item1 from "/menu1.png";
import item2 from "/menu2.png";
import item3 from "/menu3.png";
import item4 from "/menu4.png";
import item5 from "/menu5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
	};
	return (
		<>
			<div className='home--title'>
				<div className='home--title--navbar'>
					<img
						src={logo}
						alt='logo'
					/>
					<ul className='home--title--navbar--list'>
						<Link
							className='link'
							to='/about'
						>
							<li>ABOUT</li>
						</Link>
						<Link
							className='link'
							to='/gallery'
						>
							<li>GALLERY</li>
						</Link>
						<li>CONTACT</li>
					</ul>
				</div>
				<div className='home--title--content'>
					<h2>WELCOME TO</h2>
					<h1>FORK & FLAME</h1>
					<Link
						className='link'
						to='/reservation'
					>
						<h3>RESERVE NOW</h3>
					</Link>
				</div>
			</div>
			<div className='slogan'>
				<p className='slogan--upper'>
					An outstanding setting where you can savor the moment
				</p>
				<p className='slogan--lower'>
					YOUR SENSORY EXPERIENCE STARTS HERE
				</p>
			</div>
			<div className='menu'>
				<Slider
					{...settings}
					className='slider'
				>
					<img src={item1} />
					<img src={item2} />
					<img src={item3} />
					<img src={item4} />
					<img src={item5} />
				</Slider>
			</div>
		</>
	);
};

export default Home;
