// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Teoria from './pages/Teoria';
import Tips from './pages/Tips';
import Evaluaciones from './pages/Evaluaciones';
import Estadisticas from './pages/Estadisticas';

const App = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teoria" element={<Teoria />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
