import { useEffect, useState } from "react";
import coffee from '../assets/coffee.jpg'

function CoffeeService() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null); // Add error handling
  const [loading, setLoading] = useState(true); // Add loading state
  const getData = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleImageError = (e) => {
    e.target.src = coffee; // Use absolute path to the default image
  };

  return (
    <>
      <h2 style={{textAlign: "center"}}>Coffee List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data.map((coffee) => (
          <div class="list-item" key={coffee.id} style={{ width: "250px", textAlign: "center" }}>
            <img
              src={coffee.image}
              alt={coffee.title}
              onError={handleImageError} // Handle broken images
              style={{ width: "100%", height: "300px", borderRadius: "10px"}}
            />
            <h2>{coffee.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoffeeService;
