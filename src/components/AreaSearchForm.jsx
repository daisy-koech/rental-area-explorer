import { useState } from "react";
import "./AreaSearchForm.css";

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
        // Add Kenya to the search so the geocoding request focuses on Kenyan locations.
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

      // Save the first matching result so the map and amenities views can use the same location.
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
    <form className="area-search-form" onSubmit={handleSubmit}>
      <label htmlFor="area">Area</label>

      <div className="search-input-group">
        <input
          id="area"
          type="text"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          placeholder="e.g. Elgon View"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}

export default AreaSearchForm;
