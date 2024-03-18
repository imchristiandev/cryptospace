import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      var requestOptions = {
        method,
        redirect: "follow",
      };

      fetch(url, requestOptions, body ? body : null)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => setError("error", error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [method, url, body]);

  return { data, loading, error };
};
