import "./App.css";
import FormState from "./context/formData/FormState";
import DynamicFormGenerator from "./components/DynamicFormGenerator";

function App() {
  return (
    <div className="App">
      <FormState>
      <DynamicFormGenerator/>
      </FormState>
    </div>
  );
}

export default App;
