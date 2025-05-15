import React from 'react'

const InputRadio = ({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    checked,
    onBlur,
    error,
    touched
}) => {
    return (
        <>
            <div className="form-check form-check-inline">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    onBlur={onBlur}
                    className={`${error && touched ? "is-invalid" : ""}`}
                    placeholder={placeholder}
                    style={{ border: "3px solid #ccc" }}
                />
                {label && <label className='form-check-label' htmlFor={name}>{label}</label>}
            </div>
            {error && touched && <div className="invalid-feedback">{error}</div>}
        </>
    );
}

export default InputRadio;