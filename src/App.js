import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
