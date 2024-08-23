import React, { useState } from "react";
import "./FormPreview.css";

const FormPreview = ({ fields, values, setValues }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !values[field.id]) {
        newErrors[field.id] = `${field.label} is required.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValueChange = (id, value) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setValues({});
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="previewSection">
      <h2>Preview</h2>
      <form>
        {fields.map((field) => (
          <div key={field.id} className="formField">
            <label>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                value={values[field.id] || ""}
                onChange={(e) => handleValueChange(field.id, e.target.value)}
              />
            )}
            {field.type === "textarea" && (
              <textarea
                value={values[field.id] || ""}
                onChange={(e) => handleValueChange(field.id, e.target.value)}
              />
            )}
            {field.type === "select" && (
              <select
                value={values[field.id] || ""}
                onChange={(e) => handleValueChange(field.id, e.target.value)}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type === "checkbox" && (
              <>
                {field.options.map((option, idx) => (
                  <label key={idx}>
                    <input
                      type="checkbox"
                      value={option}
                      checked={values[field.id]?.includes(option) || false}
                      onChange={(e) => {
                        const newValue = e.target.checked
                          ? [...(values[field.id] || []), option]
                          : (values[field.id] || []).filter(
                              (val) => val !== option
                            );
                        handleValueChange(field.id, newValue);
                      }}
                    />{" "}
                    {option}
                  </label>
                ))}
              </>
            )}
            {field.type === "radio" && (
              <>
                {field.options.map((option, idx) => (
                  <label key={idx}>
                    <input
                      type="radio"
                      name={field.id}
                      value={option}
                      checked={values[field.id] === option}
                      onChange={(e) =>
                        handleValueChange(field.id, e.target.value)
                      }
                    />{" "}
                    {option}
                  </label>
                ))}
              </>
            )}
            {errors[field.id] && (
              <p className="error-message">{errors[field.id]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={fields.length === 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
