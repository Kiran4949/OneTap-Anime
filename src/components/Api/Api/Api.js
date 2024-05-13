import { useEffect, useMemo } from "react";
import axios from "axios";

const Api = ({ url, onDataFetch }) => {
  const fetchData = useMemo(
    () => async () => {
      try {
        const response = await axios.get(url);
        onDataFetch(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        onDataFetch([]);
      }
    },
    [url, onDataFetch]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return null; // Since this component doesn't render anything directly
};

export default Api;
