import React from 'react';
import './Card.css'

export default function Card({ children, width, height }: { children: any, width?: number, height?: number }) {

    return (
        <div className='card-fram' style={{ width: width ? `${width}px` : "220px", height: height ? `${height}px` : "150px" }}>
            <div className='delete-card' />
            {children}
        </div>
    );
}