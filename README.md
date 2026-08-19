# Rental Area Explorer
- A React-based web application that helps users explore Kenyan neighbourhoods and discover nearby amenities such as schools, hospitals, markets, malls, and public transport locations.
- The application allows a user to search for an area in Kenya, view the selected location on an interactive map, and explore nearby amenities using location data from OpenStreetMap services.

## Overview
Finding a suitable area to rent can involve more than simply looking at available properties. The surrounding neighbourhood and access to everyday services can also be important when deciding where to live.
**Rental Area Explorer** was developed to provide a simple way to explore a Kenyan neighbourhood and understand what is available nearby.

The application currently focuses on three main areas:
1. **Search** - search for a Kenyan neighbourhood or area.
2. **Map** - view the searched location on an interactive map.
3. **Amenities** - explore nearby amenities around the selected location.

The application is currently a frontend-focused project. Future phases can expand it into a full-stack rental platform with features such as user accounts, rental listings, and personalised user functionality.

## Features
### Area Search
Users can enter the name of a Kenyan neighbourhood or area into the search form.
The application sends the search request to the Nominatim geocoding service and retrieves the location information.
The search is restricted to Kenya by adding `Kenya` to the user's search query.

For example:
```text
Elgon View
```

is searched as:

```text
Elgon View, Kenya
```

The application then stores the returned area name and geographic coordinates.
The coordinates are used internally by the application but are not displayed as raw latitude and longitude values in the user interface.

### Loading State

While the application is communicating with the search service, the search button changes from:

```text
Search
```

to:

```text
Searching...
```

The button is also disabled during the request to prevent repeated submissions while the search is in progress.

### Interactive Map
After an area has been successfully searched, the Map page uses the returned coordinates to position an interactive Leaflet map.

The map includes:
- OpenStreetMap map tiles
- A marker for the searched location
- A popup containing the area name
- Automatic positioning based on the searched coordinates

The application uses React Leaflet to integrate Leaflet into the React application.

### Nearby Amenities
The Amenities page displays locations near the searched area.

The application currently supports categories including:
- Schools
- Hospitals
- Markets
- Malls / Shopping Centres
- Public Transport locations

Amenities are displayed as cards containing:
- An icon
- The amenity name
- The amenity type
The interface uses Lucide icons to visually distinguish the different amenity categories.

### Shared Location State
The selected location is stored in the main `App` component.
This allows the same searched location to be shared between the:
- Search view
- Map view
- Amenities view

For example, after searching for an area, the user can navigate to the Map page without having to search for the area again.

### Client-Side Routing
React Router is used to provide navigation between the application's main views.
The current routes are:

```text
/             Search
/map          Map
/amenities    Amenities
```

The navigation bar provides links to each of these views.

### Responsive Interface
The application includes responsive styling so that the interface can adapt to smaller screens.
Responsive styling is applied to areas including:
- Navigation
- Search form
- Map
- Amenity cards
- Overall page spacing

The application is designed to remain usable on both desktop and mobile-sized screens.

## Technologies Used
### React
The application is built using React.
React is used to create reusable components and manage application state.

### Vite
Vite is used as the development environment and build tool for the React application.

### React Router
React Router is used to handle navigation between the application's views.

Current routes include:
```text
/ 
/map
/amenities
```

### React Leaflet
React Leaflet is used to integrate Leaflet maps into the React application.
It provides React components for:
- Map containers
- Tile layers
- Markers
- Popups

### Leaflet
Leaflet provides the underlying interactive mapping functionality.
The Leaflet stylesheet is imported in `main.jsx`:

```jsx
import "leaflet/dist/leaflet.css";
```
- This provides the required styling for Leaflet's map interface and controls.

### OpenStreetMap
OpenStreetMap provides the map data displayed in the application.
The application uses OpenStreetMap tiles for the interactive map.

### Nominatim
Nominatim is used for geocoding.
It converts a user's area search into geographic information that the application can use to position the map.
The current search request follows this structure:

```text
https://nominatim.openstreetmap.org/search
```

The request includes:

```text
q
format=json
```

The user's search is combined with `Kenya` before being sent to Nominatim.

### Overpass API
The Overpass API is used to retrieve OpenStreetMap data for nearby amenities.

### Lucide React
Lucide React provides the icons used throughout the amenities interface.
Different amenity types are associated with different icons to make the cards easier to identify visually.

## Project Structure
```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── AreaSearchForm.jsx
│   ├── AreaSearchForm.css
│   ├── AmenityCard.jsx
│   └── AmenityCard.css
│
├── views/
│   ├── SearchView.jsx
│   ├── SearchView.css
│   ├── MapView.jsx
│   ├── MapView.css
│   ├── AmenitiesView.jsx
│   └── AmenitiesView.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Components
The "components" folder contains reusable interface components.

#### Navbar
Provides the main application navigation.

#### AreaSearchForm
Contains the search input and handles communication with Nominatim.

#### AmenityCard
Displays an individual nearby amenity with its name, category, and icon.


### Views
The "views" folder contains the main pages of the application.

#### SearchView
Provides the application's landing page and search experience.

#### MapView
Displays the searched location on a Leaflet map.

#### AmenitiesView
Displays nearby amenities around the selected location.

### CSS Organisation
```text
index.css
```
- Contains global styles such as:
  - Page background
  - Default font
  - Box sizing
  - Basic element behaviour

```text
App.css
```
- Controls the overall application content layout.

```text
Navbar.css
```
- Controls the navigation bar.

```text
SearchView.css
```
- Controls the search landing page.

```text
AreaSearchForm.css
```
- Controls the search input and button.

```text
MapView.css
```
- Controls the map page and map container.

```text
AmenitiesView.css
```
- Controls the amenities page layout.

```text
AmenityCard.css
```
- Controls individual amenity cards.

This separation makes the styling easier to maintain and modify.

## Installation
### 1. Clone the repository

Clone the project from GitHub:

```bash
git clone https://github.com/daisy-koech/rental-area-explorer
```

### 2. Navigate into the cloned project directory

### 3. Install dependencies
Run:
```bash
npm install
```
- This installs the dependencies listed in `package.json`.

## Running the Application
Start the Vite development server:
```bash
npm run dev
```
Open the provided URL in a browser.


## Using the Application
### Step 1 - Search for an area
Open the Search page.

Enter a Kenyan neighbourhood or area, for example:
```text
Elgon View
```

Click **Search**.
The application will query Nominatim and retrieve the location.

### Step 2 - View the map
After a successful search, select **Map** from the navigation bar.
The application will display the selected location on an interactive map.
A marker will indicate the searched location.
Clicking the marker displays a popup containing the area name.

### Step 3 - Explore amenities
Select **Amenities** from the navigation bar.
The application will retrieve and display nearby amenities around the searched location.

The availability and accuracy of individual amenities depend on the OpenStreetMap data available for the selected area.

## Error and Empty States
The application includes basic handling for situations where a location has not yet been selected.
For example, if a user opens the Map page before searching for an area, the application displays:

```text
Map

Search for an area first.
```

Similarly, the Amenities page asks the user to search for an area first if no location has been selected.
The search also handles failed network requests by catching the error and logging the failure to the browser console.

## Data Sources
This project relies on publicly available OpenStreetMap services.

### Nominatim
Used for searching and geocoding locations.
```text
https://nominatim.openstreetmap.org/
```

### OpenStreetMap
Used for map tiles and geographic map data.

```text
https://www.openstreetmap.org/
```

### Overpass API
Used to query OpenStreetMap data for nearby amenities.

```text
https://overpass-api.de/
```

## API Key
The current application does not rquire an API key for its Nominatim, OpenStreetMap, or Overpass functionality.
The application communicates directly with publicly available OpenStreetMap services.

## Development Workflow
The project was developed using Git branches so that individual features could be developed separately before being merged into the main branch.

Examples of feature branches used during development include:
```text
feature-navbar
feature-search
feature-map
feature-amenities
feature-phase1-styling
feature-documentation
```

Each feature was developed and tested before being merged into `main`.

## Future Development
The current project can be expanded in future phases.
Possible future improvements include:

### Full-Stack Architecture
Introduce a backend and database to store application data rather than relying entirely on external geographic services.

### User Accounts
Allow users to:
- Create accounts
- Log in
- Log out
- Manage personal information

### Rental Listings
The application could eventually include actual rental properties with information such as:
- Property name
- Location
- Rent
- Number of bedrooms
- Property images
- Description
- Amenities
- Contact information

