import React, { useState } from "react";
import "./FormConfigure.css";

const FormConfigure = ({ fields, setFields, setValues }) => {
  const [formJson, setFormJson] = useState("");

  //1. creates a new field with default values and adds it to the list of fields.
  const addField = () => {
    setFields([
      ...fields,
      { id: Date.now(), label: "", type: "text", options: [], required: false },
    ]);
  };

  //2. removes a field by its ID and updates the form values to remove the corresponding entry.
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    setValues((prevValues) => {
      const newValues = { ...prevValues };
      delete newValues[id];
      return newValues;
    });
  };

  //3. updates a specific field’s property based on user input."
  const handleFieldChange = (id, key, value) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  };
   
  //4. converts the current fields configuration into a JSON string and updates the formJson state.
  const saveFormConfig = () => {
    const json = JSON.stringify(fields, null, 2);
    setFormJson(json);
    alert("Form configuration saved!");
  };

  //5. parses the JSON from formJson and updates the fields and form values accordingly.
  const loadFormConfig = () => {
    try {
      const parsedFields = JSON.parse(formJson);
      setFields(parsedFields);
      const initialValues = {};
      parsedFields.forEach((field) => {
        initialValues[field.id] = field.type === "checkbox" ? [] : "";
      });
      setValues(initialValues);
      alert("Form configuration loaded!");
    } catch (error) {
      alert("Invalid JSON format.");
    }
  };

  return (
    <div className="sectionContainer">
      <div className="configSection">
        <h2>Configure Form Fields</h2>
        <form>
          {fields.map((field) => (
            <div key={field.id} className="formField">
              <label>
                Label:
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) =>
                    handleFieldChange(field.id, "label", e.target.value)
                  }
                  placeholder="Enter field label"
                />
              </label>
              <label>
                Type:
                <select
                  value={field.type}
                  onChange={(e) =>
                    handleFieldChange(field.id, "type", e.target.value)
                  }
                >
                  <option value="text">Text</option>
                  <option value="textarea">Textarea</option>
                  <option value="select">Dropdown</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="radio">Radio</option>
                </select>
              </label>
              {(field.type === "select" ||
                field.type === "checkbox" ||
                field.type === "radio") && (
                <label>
                  Options (comma-separated):
                  <input
                    type="text"
                    value={field.options.join(",")}
                    onChange={(e) =>
                      handleFieldChange(
                        field.id,
                        "options",
                        e.target.value.split(",")
                      )
                    }
                    placeholder="Enter options"
                  />
                </label>
              )}
              <label>
                Required:
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) =>
                    handleFieldChange(field.id, "required", e.target.checked)
                  }
                />
              </label>
              <button type="button" onClick={() => removeField(field.id)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addField}>
            Add Field
          </button>
        </form>
      </div>
      <div className="jsonSection">
        <h2>Form Configuration JSON</h2>
        <textarea
          value={formJson}
          onChange={(e) => setFormJson(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Paste JSON here"
        />
        <button onClick={saveFormConfig}>Save Configuration</button>
        <button onClick={loadFormConfig}>Load Configuration</button>
      </div>
    </div>
  );
};

export default FormConfigure;
