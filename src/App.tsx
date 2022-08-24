import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MapPage from './components/map-page/MapPage';
import UserPostPage from './components/users-post-page/UserPostPage';

function renderPage() {
    return (
        <Routes>
            <Route path="/" element={<UserPostPage />}>
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
