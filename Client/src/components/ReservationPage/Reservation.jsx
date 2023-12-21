import { useState } from "react";
import NavBar from "../Utility/NavBar/NavBar.jsx";
import Footer from "../Utility/Footer/Footer.jsx";
import axios from "axios";
import "./Reservation.css";

const Reservation = () => {
	const [reservationData, setReservationData] = useState({
		name: "",
		email: "",
		phone: "",
		date: "",
		time: "",
		people: "",
	});
	const saveReservation = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/save-reservation", reservationData)
			.then((res) => {
				console.log(res.data);
			});
		setReservationData({
			name: "",
			email: "",
			phone: "",
			date: "",
			time: "",
			people: "",
		});
	};
	return (
		<div className='reservation--page'>
			<NavBar />
			<div className='reservation--form--container'>
				<form
					onSubmit={saveReservation}
					className='reservation--form'
				>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={reservationData.name}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								name: e.target.value,
							})
						}
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={reservationData.email}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								email: e.target.value,
							})
						}
						required
					/>
					<label htmlFor='phone'>Phone</label>
					<input
						type='tel'
						name='phone'
						value={reservationData.phone}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								phone: e.target.value,
							})
						}
						required
					/>
					<label htmlFor='date'>Date</label>
					<input
						type='date'
						name='date'
						value={reservationData.date}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								date: e.target.value,
							})
						}
						required
					/>

					<label htmlFor='time'>Time</label>
					<input
						type='time'
						name='time'
						value={reservationData.time}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								time: e.target.value,
							})
						}
						required
					/>
					<label htmlFor='people'>People</label>
					<input
						type='number'
						name='people'
						value={reservationData.people}
						onChange={(e) =>
							setReservationData({
								...reservationData,
								people: e.target.value,
							})
						}
						required
					/>
					<button type='submit'>Reserve Now</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Reservation;
