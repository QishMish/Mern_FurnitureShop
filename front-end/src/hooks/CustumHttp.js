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
      if(response.data.products){
        setData(response.data.products);
      }
      else{
        setData(response.data)
      }
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, [url]);

  return { loading, data, error };
}
