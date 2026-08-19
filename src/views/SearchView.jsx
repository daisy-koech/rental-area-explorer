import AreaSearchForm from "../components/AreaSearchForm";

function SearchView({ location, setLocation }) {
  return (
    <div>
      <h1>Search an Area</h1>
      <p>Find a Kenyan neighborhood and explore what's nearby.</p>

      <AreaSearchForm setLocation={setLocation} />

      {location && (
        <div>
          <h2>{location.areaName}</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default SearchView;

