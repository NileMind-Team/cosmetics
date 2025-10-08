import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en"); // اللغة المشتركة لكل الصفحات

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar بيغير اللغة */}
        <Navbar lang={lang} setLang={setLang} />

        {/* محتوى الصفحات */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
