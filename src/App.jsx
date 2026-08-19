import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchView from "./views/SearchView";
import MapView from "./views/MapView";
import AmenitiesView from "./views/AmenitiesView";

function App() {
  const [location, setLocation] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<SearchView location={location} setLocation={setLocation} />} />
        <Route path="/map" element={<MapView location={location} />} />
        <Route path="/amenities" element={<AmenitiesView location={location} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

