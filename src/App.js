import { Routes, Route } from "react-router-dom";
import './App.css';
import ContactUsPage from "./pages/ContactUsPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactUsPage />} />
      <Route path="/thanks" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
