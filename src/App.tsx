import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MapPage from './components/map-page/MapPage';

function renderPage() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
            </Route>
            <Route path="map" element={<MapPage />}>
            </Route>
        </Routes>
    );
}


function App() {
    return (
        <Router>
            <div className="App">
                {renderPage()}
            </div>
        </Router>
    );
}

export default App;
