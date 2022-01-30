import { useContext, useState } from "react";
import axios from "axios";
import "./Write.css";
import { Context } from "../../Context/Context";

export default function Write() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		axios.post("/posts");
	};
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<form
				className="writeForm"
				onSubmit={handleSubmit}
			>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
					/>
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell Your Story..."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}
