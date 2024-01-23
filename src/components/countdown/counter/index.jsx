import React from 'react'
import './style.css'

const Counter = ({ title, number }) => {
    return (
        <div className="contagem">
            <p className='counter-number'>{number}</p>
            <h3 className='counter-text'>{title}</h3>
        </div>
    )
}

export default Counter