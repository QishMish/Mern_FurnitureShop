import { useState, useEffect } from "react";
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
      console.log(response)
      if(response.data){
        setData(response.data);
      }
      else{
        setData(response.data)
      }
      setLoading(false);
      setError(true);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, [url]);

  return { loading, data, error };
}
