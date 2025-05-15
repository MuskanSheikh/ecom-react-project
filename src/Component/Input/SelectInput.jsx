import React from 'react'

const SelectInput = ({label, name, value, onChange, onBlur, error, touched, options}) => {
  return (
    <>
    <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`form-control ${error && touched ? 'is-invalid' : ''}`}
            >
                {options && options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && touched && <div className="invalid-feedback">{error}</div>}
        </div>
    </>
  )
}

export default SelectInput;