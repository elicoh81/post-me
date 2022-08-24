import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/app/RootReducer';
import { deleteUser, User } from '../../redux/features/main/MainReducerSlice';
import Card from '../card/card';
import './Users.css';
import { Link } from "react-router-dom";

export default function Users() {
    const users: User[] = useSelector((state: RootState) => state.mainReducer.users);
    const dispatch = useDispatch();

    return (
        <div className='users'>
            {users.map((u: User) => (
                <Link to={`/?userId=${u.id}`} style={{ textDecoration: 'none' }}>
                    <Card handleDelete={() => dispatch(deleteUser(u.id))}>
                        <div className='card-body'>
                            <div>{u.fullName}</div>
                            <div>{u.email}</div>
                            <Link to={`map?long=${u.coordinates.long}&lat=${u.coordinates.lat}`}>{u.coordinates.lat} {u.coordinates.long}</Link>
                            <div>{u.companyName}</div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
}