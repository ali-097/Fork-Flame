import "./Gallery.css";
import NavBar from "../Utility/NavBar/NavBar.jsx";

const Gallery = () => {
	return(
		<div className='gallery--page'>
			<NavBar />
			<div className='gallery--img'>
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
			</div>
			
		</div>
	);
};

export default Gallery;
