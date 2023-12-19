import "./Footer.css";

const Footer = () => {
	return (
		<div className='footer'>
			<img
				src='/logo-alt.png'
				alt='logo'
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			/>
			<div className='socials'>
				<img
					src='/instagram.png'
					alt='instagram'
					onClick={() =>
						window.open("https://www.instagram.com/forknflame/")
					}
				/>
				<img
					src='/facebook.png'
					alt='facebook'
					onClick={() =>
						window.open("https://www.facebook.com/forknflame/")
					}
				/>
				<img
					src='/twitter.png'
					alt='twitter'
					onClick={() =>
						window.open("https://twitter.com/forknflame")
					}
				/>
			</div>
			<p>
				© 2023 FORK & FLAME - CONTACT@FORKNFLAME.COM - +92 0333 941 47
				58 - PAKISTAN
			</p>
		</div>
	);
};

export default Footer;
