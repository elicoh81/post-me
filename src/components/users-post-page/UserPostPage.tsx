import React from 'react';
import PostsBoard from '../posts-board/PostBoard';
import Users from '../users/users';


export default function UserPostPage() {

    return (
        <div>
            <Users />
            <PostsBoard />
        </div>
    );
}