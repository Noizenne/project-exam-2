import React from 'react'
import { load } from "../storage";

async function UpdateData(url, body) {
    const token = load("token");
	try {
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
            body: JSON.stringify(body),
		});
		return response.status;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default UpdateData