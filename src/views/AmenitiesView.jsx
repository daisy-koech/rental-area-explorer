import { useEffect, useState } from "react";
import AmenityCard from "../components/AmenityCard";
import "./AmenitiesView.css";

function transformAmenity(amenity) {
  let type = "other";

  if (amenity.tags?.amenity === "school") {
    type = "school";
  } else if (amenity.tags?.amenity === "hospital") {
    type = "hospital";
  } else if (amenity.tags?.amenity === "marketplace") {
    type = "market";
  } else if (
    amenity.tags?.amenity === "bus_station" ||
    amenity.tags?.amenity === "taxi"
  ) {
    type = "transport";
  } else if (amenity.tags?.shop === "mall") {
    type = "mall";
  }

  const latitude =
    amenity.lat ?? amenity.center?.lat;
  const longitude =
    amenity.lon ?? amenity.center?.lon;
  return {
    name: amenity.tags?.name || "Unnamed amenity",
    type,
    latitude,
    longitude,
  };
}

function AmenitiesView({ location }) {
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) {
      return;
    }

    async function fetchAmenities() {
      setLoading(true);

      const query = `
        [out:json];
        (
          nwr(around:3000,${location.latitude},${location.longitude})[amenity=school];
          nwr(around:3000,${location.latitude},${location.longitude})[amenity=hospital];
          nwr(around:3000,${location.latitude},${location.longitude})[amenity=marketplace];
          nwr(around:3000,${location.latitude},${location.longitude})[amenity=bus_station];
          nwr(around:3000,${location.latitude},${location.longitude})[amenity=taxi];
          nwr(around:3000,${location.latitude},${location.longitude})[shop=mall];
        );
        out center;
      `;

      try {
        const response = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: "data=" + encodeURIComponent(query),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch amenities.");
        }

        const data = await response.json();
        console.log("Overpass response:", data);

        const transformedAmenities = data.elements.map(
          transformAmenity
        );
        setAmenities(transformedAmenities);
      } catch (error) {
        console.error("Amenities search failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAmenities();
  },[location]);

  if (!location) {
    return (
      <div className="amenities-view">
        <h1>Amenities</h1>
        <p>Search for an area first.</p>
      </div>
    );
  }

  return (
    <div className="amenities-view">
      <h1>Amenities</h1>
      <p>Showing amenities near {location.areaName}</p>

      {loading && <p>Loading amenities...</p>}

      {!loading && amenities.length === 0 && (
        <p>No amenities found.</p>
      )}

      {!loading && amenities.length > 0 && (
        <div className="amenities-list">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={`${amenity.type}-${index}`}
              amenity={amenity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AmenitiesView;

