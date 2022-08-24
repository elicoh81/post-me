import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '../../common-hooks/UseQuery';
import { setPosts, setUsers } from '../../redux/features/main/MainReducerSlice';
import Users from '../users/Users';


export default function UserPostPage() {
    let query = useQuery();
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
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
            dispatch(setPosts(res.data.map((p: any) => ({
                id: p.id,
                userId: p.userId,
                title: p.title,
                body: p.body
            }))));
        });
    }, []);

    let userId = query.get('userId');
    return (
        <div>
            <Users selectedId={userId} />
            <div>Something need to be here according to query</div>
        </div>
    );
}