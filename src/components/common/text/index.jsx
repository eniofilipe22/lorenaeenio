import React from 'react'
import './style.css'

const Text = ({text, strong}) => {
    return (
        <div>
            <p className='text'>{text}</p>
            <p className='text strong'>{strong}</p>
        </div>
    )
}

export default Text