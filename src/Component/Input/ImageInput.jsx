import React from 'react'

const ImageInput = ({ name, label, onChange, onBlur, error, touched }) => {
    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type="file"
                name={name}
                id={name}
                accept="image/*"
                className={`form-control ${error && touched ? 'is-invalid' : ''}`}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && touched && <div className="invalid-feedback">{error}</div>}
        </>
    )
}

export default ImageInput;