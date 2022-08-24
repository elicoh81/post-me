import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/RootReducer';
import { User } from '../../redux/features/main/MainReducerSlice';
import Card from '../card/Card';
import './Users.css';
import { Link } from "react-router-dom";

export default function Users({ selectedId }: { selectedId: string | null }) {

    const users: User[] = useSelector((state: RootState) => state.mainReducer.users);

    return (
        <div className='users'>
            {users.map((u: User) => (
                <Card>
                    <div className='card-body'>
                        <div>{u.fullName}</div>
                        <div>{u.email}</div>
                        <Link to={`map?long=${u.coordinates.long}&lat=${u.coordinates.lat}`}>{u.coordinates.lat} {u.coordinates.long}</Link>
                        <div>{u.companyName}</div>
                    </div>
                </Card>
            ))}
        </div>
    );
}