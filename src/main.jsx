import { createRoot } from "react-dom/client";
// корневой css файл проекта
import "./index.css";
import App from "./App.jsx";

// код в тегах ниже будет отображаться в div с id root на странице
createRoot(document.getElementById("root")).render(
  <>
    {/* вызов компонента App */}
    <App />    
  </>
);
