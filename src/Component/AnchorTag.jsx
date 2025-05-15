import React from 'react'

const AnchorTag = ({ className, role, icon }) => {
    return (
        <>
            <a
                className={className}
                role={role}
            ><i className={`fab ${icon}`}></i>
            </a>
        </>
    )
}

export default AnchorTag;