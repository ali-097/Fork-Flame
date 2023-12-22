import { useState } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
	const [adminData, setAdminData] = useState({
		username: "",
		password: "",
	});
	const [reservationData, setReservationData] = useState([]);

	const validateLogIn = async (e) => {
		e.preventDefault();
		if (adminData.username === "admin" && adminData.password === "admin") {
			document.querySelector(".admin--form").style.display = "none";

			try {
				const response = await axios.get(
					"http://localhost:3000/get-reservations"
				);
				setReservationData(response.data);
			} catch (error) {
				console.error("Error fetching reservations:", error.message);
			}
		} else {
			alert("Invalid Username or Password");
		}
	};
	return (
		<div className='admin--page'>
			<form
				className='admin--form'
				data-aos={"zoom-in"}
			>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					value={adminData.username}
					onChange={(e) =>
						setAdminData({ ...adminData, username: e.target.value })
					}
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={adminData.password}
					onChange={(e) =>
						setAdminData({ ...adminData, password: e.target.value })
					}
					required
				/>
				<button
					type='submit'
					onClick={validateLogIn}
				>
					Login
				</button>
			</form>
			{reservationData && (
				<div className='admin--reservations'>
					{reservationData.map((reservation) => (
						<div
							className='admin--reservation'
							key={reservation.id}
							data-aos={"flip-up"}
						>
							<p>Name: {reservation.name}</p>
							<p>Email: {reservation.email}</p>
							<p>Phone: {reservation.phone}</p>
							<p>Date: {reservation.date}</p>
							<p>Time: {reservation.time}</p>
							<p>People: {reservation.people}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Admin;
