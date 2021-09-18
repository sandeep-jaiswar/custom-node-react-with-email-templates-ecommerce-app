import React, { useRef } from 'react'

function Card(props) {
    const {children, customClass , title} = props;
    const ref = useRef(null);
    return (
        <div ref={ref} className={`lib-card ${customClass}`}>
            {title && <div className='title' style={{maxWidth : `${ref?.current?.clientWidth / 16 || 17.25}rem`}}>{title}</div>}
            {children}
        </div>
    )
}

export default Card;
