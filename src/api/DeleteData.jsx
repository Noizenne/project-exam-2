import React from "react";
import { load } from "../storage";
import useApi from "../hooks/useAPI";
import { API_profiles } from "./constants/url";

async function DeleteData(url) {
    
    const token = load("token");
	try {
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.status;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default DeleteData