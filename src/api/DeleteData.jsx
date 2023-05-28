import { load } from "../storage";

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

export default DeleteData;
