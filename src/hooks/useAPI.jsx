// Importing React
import { useEffect, useState } from "react";
import { API_URL } from "../api/constants/url";

const useApi = (endpoint, method, body) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `${API_URL}`;
  

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const token = localStorage.getItem("token");

        const options = await fetch(url + endpoint, {
         method: method,
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
         body: JSON.stringify(body),
        });
        const json = await options.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [endpoint, method, body]);
  return { data, isLoading, isError };
};

export default useApi;
