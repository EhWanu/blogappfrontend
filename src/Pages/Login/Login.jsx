import "./Login.css";

export default function Login() {
	return (
		<div className="login">
			<form className="loginForm">
				<label>Email</label>
				<input
					type="text"
					placeholder="Enter Your Email... "
				/>
				<label>Password</label>
				<input
					type="text"
					placeholder="Enter Your Password... "
				/>
				<button className="loginButton">
					Login
				</button>
				<button className="loginRegisterButton">
					Register
				</button>
			</form>
		</div>
	);
}
