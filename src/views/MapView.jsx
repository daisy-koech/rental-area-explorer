function MapView({ location }) {
    return (
      <div>
        <h1>Map</h1>
  
        {location ? (
          <div>
            <p>Area: {location.areaName}</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Search for an area first.</p>
        )}
      </div>
    );
  }
  
export default MapView;

