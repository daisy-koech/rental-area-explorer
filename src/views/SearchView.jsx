import AreaSearchForm from "../components/AreaSearchForm";
import "./SearchView.css";

function SearchView({ location, setLocation }) {
  return (
    <div className="search-view">
      <div className="search-hero">

        <h1>Explore a Kenyan Area</h1>

        <p className="search-description"><em>Find a Kenyan neighbourhood and explore what's nearby.</em></p>

        <AreaSearchForm setLocation={setLocation} />

        {location && (
          <div className="location-result">
            <p className="location-label">Selected area</p>

            <h2>{location.areaName}</h2>

            <p className="location-message">
              Location found. Explore the map and nearby amenities.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default SearchView;

