import React from 'react';

const TextInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  readOnly,
  onBlur,
  error,
  touched,
  className
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        onBlur={onBlur}
        className={`${className} ${error && touched ? "is-invalid" : ""}`}
        placeholder={placeholder}
        style={{ border: "3px solid #ccc" }}
      />
      {error && touched && <div className="invalid-feedback" style={{
        color: 'red',
        fontSize: '0.875rem',
        marginTop: '4px',
        display: 'block'
      }}>{error}</div>}
    </>
  );
};

export default TextInput;
