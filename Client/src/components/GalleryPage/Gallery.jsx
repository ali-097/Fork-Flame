import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import NavBar from "../Utility/NavBar/NavBar.jsx";
import Footer from "../Utility/Footer/Footer.jsx";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};
	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true,
			offset: 200,
		});
	}, []);
	return (
		<div className='gallery--page'>
			<NavBar />
			<div
				className='slider--container'
				data-aos={"zoom-in-up"}
			>
				<Slider
					{...settings}
					className='slider'
				>
					<img
						src='/gallery/gallery1.png'
						alt='gallery'
					/>
					<img
						src='/gallery/gallery2.png'
						alt='gallery'
					/>
					<img
						src='/gallery/gallery3.png'
						alt='gallery'
					/>
					<img
						src='/gallery/gallery4.png'
						alt='gallery'
					/>
					<img
						src='/gallery/gallery5.png'
						alt='gallery'
					/>
				</Slider>
			</div>
			<Footer />
		</div>
	);
};

export default Gallery;
