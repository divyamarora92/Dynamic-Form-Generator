// DynamicForm.js
import React, { useState } from "react";
import FormConfigure from "./FormConfigure";
import FormPreview from "./FormPreview";
import "./DynamicFormGenerator.css";

const DynamicFormGenerator = () => {
  const [fields, setFields] = useState([]);
  const [values, setValues] = useState({});

  return (
    <div className="dynamicFormContainer">
      <FormConfigure
        fields={fields}
        setFields={setFields}
        setValues={setValues}
      />
      <FormPreview fields={fields} values={values} setValues={setValues} />
    </div>
  );
};

export default DynamicFormGenerator;
