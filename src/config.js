import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		"https://simplewholesome.herokuapp.com/api/",
});
