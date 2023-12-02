import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <p>{t("welcome")}</p>
      <p>{i18n.language}</p>
    </div>
  );
}

export default App;
