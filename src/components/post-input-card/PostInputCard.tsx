import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/app/RootReducer';
import { editPost, Post } from '../../redux/features/main/MainReducerSlice';
import './PostInputCard.css'

export default function PostInputCard({ selectedPost, setSelectedPost }: { selectedPost: number | null, setSelectedPost: (id: number | null) => void }) {
    const [animationClass, setAnimationClass] = useState('');
    const post: Post | undefined = useSelector((state: RootState) => state.mainReducer.posts.find(p => selectedPost && p.id === selectedPost));
    const [title, setTitle] = useState(post ? post.title : '');
    const [body, setBody] = useState(post ? post.body : '');
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedPost !== null) {
            setAnimationClass('animation-up');
            setTitle(post!.title);
            setBody(post!.body);
        } else {
            if (animationClass !== '') {
                setAnimationClass('animation-down');
            }
        }
    }, [selectedPost, animationClass, post]);

    function handleSave() {
        dispatch(editPost({ ...post!, title, body }));
        setSelectedPost(null);
    };

    return (
        <div>
            {animationClass === 'animation-up' && <div onClick={() => setSelectedPost(null)} className='blocking-frame'></div>}
            <div className={`post-input-card ${animationClass}`} >
                <input className='post-input-title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea className='post-input-body' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <div className='post-input-buttons'>
                    <input type="submit" value="Save" onClick={handleSave} />
                    <input type="submit" value="cancel" onClick={() => setSelectedPost(null)} />
                </div>
            </div>
        </div>
    );
}