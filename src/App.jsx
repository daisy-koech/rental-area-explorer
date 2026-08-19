import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchView from "./views/SearchView";
import MapView from "./views/MapView";
import AmenitiesView from "./views/AmenitiesView";

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<SearchView />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/amenities" element={<AmenitiesView />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;