import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CustumHttpGet(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const FetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.statusText !== "OK") {
        throw new Error("Not 200");
      }
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return { loading, data, error };
}
