function AmenitiesView({ location }) {
    if (!location) {
      return (
        <div>
          <h1>Amenities</h1>
  
          <p>Search for an area first.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1>Amenities</h1>
  
        <p>
          Showing amenities near {location.areaName}
        </p>
  
        <p>
          Latitude: {location.latitude}
        </p>
  
        <p>
          Longitude: {location.longitude}
        </p>
      </div>
    );
  }
  
  export default AmenitiesView;