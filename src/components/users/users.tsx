import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/app/RootReducer';
import { deleteUser, User } from '../../redux/features/main/MainReducerSlice';
import Card from '../card/card';
import './Users.css';
import { Link, useNavigate } from "react-router-dom";

export default function Users() {
    const users: User[] = useSelector((state: RootState) => state.mainReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='users'>
            {users.map((u: User) => (
                <div key={`user-${u.id}`} onClick={() => navigate(`/?userId=${u.id}`, { replace: true })}>
                    <Card handleDelete={() => dispatch(deleteUser(u.id))}>
                        <div className='card-body'>
                            <div>{u.fullName}</div>
                            <div>{u.email}</div>
                            <Link to={`map?long=${u.coordinates.long}&lat=${u.coordinates.lat}`}><div className='user-coordinates' onClick={(e: any) => e.stopPropagation()}
                            >{u.coordinates.lat} {u.coordinates.long}</div></Link>
                            <div>{u.companyName}</div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}