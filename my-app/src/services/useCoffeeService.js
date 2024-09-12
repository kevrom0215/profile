import { useEffect, useState } from "react";

const useCoffeeService = () => {
  const [data, setData] = useState(null);   // Stores fetched coffee data
  const [error, setError] = useState(null); // Stores error message if fetch fails
  const [loading, setLoading] = useState(true); // Indicates whether data is still loading

  const getData = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      if (!resp.ok) {
        throw new Error("Failed to fetch coffee data");
      }
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); // Set loading to false once fetch is complete
    }
  };

  useEffect(() => {
    getData(); // Trigger data fetch on component mount
  }, []);

  // Return the current state values from the hook
  return { data, error, loading };
};

export default useCoffeeService;
