import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/app/RootReducer';
import { deleteUser, User } from '../../redux/features/main/MainReducerSlice';
import Card from '../card/card';
import './Users.css';
import { useNavigate } from "react-router-dom";

export default function Users() {
    const users: User[] = useSelector((state: RootState) => state.mainReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleMapNavigation(e: Event, long: number, lat: number) {
        e.stopPropagation();
        navigate(`map?long=${long}&lat=${lat}`, { replace: true });
    }

    return (
        <div className='users'>
            {users.map((u: User) => (
                <div key={`user-${u.id}`} onClick={() => navigate(`/?userId=${u.id}`, { replace: true })}>
                    <Card handleDelete={() => dispatch(deleteUser(u.id))}>
                        <div className='card-body'>
                            <div>{u.fullName}</div>
                            <div>{u.email}</div>
                            <div className='user-coordinates' onClick={(e: any) => handleMapNavigation(e, u.coordinates.long, u.coordinates.lat)}
                            >{u.coordinates.lat} {u.coordinates.long}</div>
                            <div>{u.companyName}</div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}