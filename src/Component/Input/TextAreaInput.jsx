import React from 'react'

const TextAreaInput = ({ name, label, placeholder, value, onChange, onBlur, error, touched, rows = 4 }) => {
    return (
        <>

            <label htmlFor={name} className="form-label">{label}</label>
            <textarea
                className={`form-control ${error && touched ? 'is-invalid' : ''}`}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                rows={rows}
            />
            {error && touched && <div className="invalid-feedback">{error}</div>}

        </>
    )
}

export default TextAreaInput;