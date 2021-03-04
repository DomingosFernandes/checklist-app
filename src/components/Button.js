import React from 'react'

const Button = ({onClick,text}) => {
    return (
        <button onClick={onClick} className="add-btn" >{text}</button>
    )
}
export default Button
