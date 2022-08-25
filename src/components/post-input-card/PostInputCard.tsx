import React, { useEffect, useState } from 'react';
import './PostInputCard.css'

export default function PostInputCard({ selectedPost, setSelectedPost }: { selectedPost: number | null, setSelectedPost: (id: number | null) => void }) {
    const [animationClass, setAnimationClass] = useState('');
    useEffect(() => {
        console.log('inside before', selectedPost, animationClass);
        if (selectedPost !== null) {
            setAnimationClass('animation-up');
        } else {
            if (animationClass !== '') {
                setAnimationClass('animation-down');
            }
        }
        console.log('inside after', selectedPost, animationClass);
    }, [selectedPost, animationClass]);

    console.log(selectedPost, animationClass);
    return (
        <div>
            {animationClass === 'animation-up' && <div onClick={() => setSelectedPost(null)} className='blocking-frame'></div>}
            <div className={`post-input-card ${animationClass}`} >
            </div>
        </div>
    );
}