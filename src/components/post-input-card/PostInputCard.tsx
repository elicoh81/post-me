import React, { useEffect, useRef, useState } from 'react';
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
    const titleRef = useRef<any>(null);
    const bodyRef = useRef<any>(null);

    useEffect(() => {
        if (selectedPost !== null) {
            setAnimationClass('animation-up');
            setTitle(post!.title);
            setBody(post!.body);
            titleRef.current?.focus();
        } else {
            if (animationClass !== '') {
                setAnimationClass('animation-down');
            }
        }
    }, [selectedPost, animationClass, post]);

    function handleSave() {
        if (title.split(' ').join('') === '' || body.split(' ').join('') === '') {
            alert('Title and Body cannot be empty!');
        } else {
            dispatch(editPost({ ...post!, title, body }));
            setSelectedPost(null);
        }
    };

    function handleTitleKeyPress(event: any) {
        if (event.key === 'Enter') {
            bodyRef!.current.focus();
        }
    }
    function handleBodyKeyPress(event: any) {
        if (event.key === 'Enter') {
            titleRef!.current.focus();
        }
    }

    return (
        <div>
            {animationClass === 'animation-up' && <div onClick={() => setSelectedPost(null)} className='blocking-frame'></div>}
            <div className={`post-input-card ${animationClass}`} >
                <input
                    className='post-input-title'
                    ref={titleRef} placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyPress={handleTitleKeyPress}
                ></input>
                <textarea
                    className='post-input-body'
                    placeholder='Body'
                    value={body} onChange={(e) => setBody(e.target.value)}
                    ref={bodyRef}
                    onKeyPress={handleBodyKeyPress}
                ></textarea>
                <div className='post-input-buttons'>
                    <input type="submit" value="Save" onClick={handleSave} />
                    <input type="submit" value="cancel" onClick={() => setSelectedPost(null)} />
                </div>
            </div>
        </div>
    );
}