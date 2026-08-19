import { useState } from "react";

function AreaSearchForm({ setLocation }) {
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!area.trim()) {
      return;
    }
    setLoading(true);

    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        area + ", Kenya"
      )}&format=json`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong while searching.");
      }
      const data = await response.json();
      console.log("Nominatim response:", data);

      if (data.length === 0) {
        console.log("Area not found.");
        return;
      }
      const result = data[0];

      setLocation({
        areaName: result.display_name,
        latitude: Number(result.lat),
        longitude: Number(result.lon),
      });

    } catch (error) {
      console.error("Search failed:", error);

    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="area">Area</label>

      <input
        id="area"
        type="text"
        value={area}
        onChange={(event) => setArea(event.target.value)}
        placeholder="Elgon View"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default AreaSearchForm;

