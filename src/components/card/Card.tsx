import React from 'react';
import './Card.css'

export default function Card({ children, width, height, handleDelete }:
    { children: any, width?: number, height?: number, handleDelete: () => void }) {

    return (
        <div className='card-fram' style={{ width: width ? `${width}px` : "220px", height: height ? `${height}px` : "165px" }}>
            <svg onClick={handleDelete} width="15" height="15" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.17616" y1="45.2026" x2="43.7026" y2="2.67612" stroke="black" strokeWidth={3} />
                <line x1="3.06066" y1="1.93934" x2="45.5871" y2="44.4658" stroke="black" strokeWidth={3} />
            </svg>
            {children}
        </div>
    );
}