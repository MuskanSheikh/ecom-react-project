import React from 'react'

const Button = ({ className, type, id, icon, onClick, content }) => {
    return (
        <>
            <button className={className} type={type} id={id} data-mdb-ripple-color="dark" onClick={onClick}>
                {icon ? (
                    <i className={`fas ${icon}`}></i>
                ) : (
                    content
                )}
            </button>
        </>
    )
}

export default Button;