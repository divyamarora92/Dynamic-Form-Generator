# Dynamic Form Builder

## Overview

The Dynamic Form Builder is a React application that allows users to create, configure, and preview dynamic forms. Users can add various types of form fields, including text inputs, text areas, dropdowns, checkboxes, and radio buttons. The application supports form validation, submission, and JSON configuration management.

## Features

- **Dynamic Field Configuration**: Add, remove, and configure form fields.
- **Field Types**: Support for text input, textarea, dropdown, checkbox, and radio buttons.
- **Form Preview**: Live preview of the form with the ability to submit and validate.
- **JSON Configuration**: Save and load form configurations as JSON data.
- **Field Validation**: Simple validation to ensure required fields are filled.

## Components

### 1. `FormConfigure`

Handles the configuration of form fields. Users can:

- Add new form fields.
- Remove existing fields.
- Specify field properties like label, type, options, and required status.
- Save and load form configurations in JSON format.

### 2. `FormPreview`

Renders the form based on the configuration from `FormConfigure`. Users can:

- Preview the form with all added fields.
- Fill out and submit the form.
- Validate the form fields to ensure required fields are completed.

### 3. `DynamicForm`

The main component that integrates `FormConfigure` and `FormPreview`. It manages the state for form fields and their values, coordinating between the configuration and preview.

## Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/divyamarora92/Dynamic-Form-Generator.git 
```

2. **Install Dependencies: Make sure you have Node.js installed. Then, run:**

```bash
npm install
```

3. **Start the Development Server:**

```bash
npm start
The application will be available at http://localhost:3000.
```

## Usage

1. **Configure Form Fields**:

   - Use the `FormConfigure` section to add new fields, set field properties, and manage the JSON configuration.
   - Click "Add Field" to add a new field. Configure its label, type, options, and whether it is required.

2. **Preview and Submit Form**:

   - Switch to the `FormPreview` section to see a live preview of your form.
   - Fill out the form and click "Submit" to check form validation and submission.

3. **Save and Load Configuration**:
   - Save your form configuration as JSON using the "Save Configuration" button.
   - Load a saved configuration by pasting JSON data into the textarea and clicking "Load Configuration."

