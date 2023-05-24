import { load } from "../storage";

export default async function PostData(url, body) {
  const token = load("token");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
}
