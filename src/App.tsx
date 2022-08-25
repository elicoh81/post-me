import React, { useEffect } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MapPage from './components/map-page/MapPage';
import UserPostPage from './components/users-post-page/UserPostPage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPosts, setUsers } from './redux/features/main/MainReducerSlice';

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
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res: any) => {
            dispatch(setUsers(res.data.map((u: any) => ({
                id: u.id,
                fullName: u.name,
                email: u.email,
                coordinates: { long: u.address.geo.lng, lat: u.address.geo.lat },
                companyName: u.company.name
            }))));
        });
    }, [dispatch]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
            dispatch(setPosts(res.data.map((p: any) => ({
                id: p.id,
                userId: p.userId,
                title: p.title,
                body: p.body
            }))));
        });
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                {renderPage()}
            </div>
        </Router>
    );
}

export default App;
