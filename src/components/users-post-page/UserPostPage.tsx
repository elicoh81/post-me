import React, { useState } from 'react';
import PostInputCard from '../post-input-card/PostInputCard';
import PostsBoard from '../posts-board/PostBoard';
import Users from '../users/users';


export default function UserPostPage() {
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    return (
        <div>
            <Users />
            <PostsBoard setSelectedPost={setSelectedPost} />
            <PostInputCard selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
        </div>
    );
}