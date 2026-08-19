function AmenitiesView({ location }) {
    return (
      <div>
        <h1>Amenities</h1>
  
        {location ? (
          <p>
            Searching for amenities near{" "}
            {location.areaName}.
          </p>
        ) : (
          <p>Search for an area first.</p>
        )}
      </div>
    );
  }
  

export default AmenitiesView;

