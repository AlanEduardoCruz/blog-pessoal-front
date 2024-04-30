import React from 'react';
import './App.css';
import Home from './paginas/home/Home'; // Importa o componente Home
import Navbar from './components/NavBar/NavBar'; // Importa o componente Navbar
import Footer from './components/Footer/Footer'; // Importa o componente Footer
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route e Routes de react-router-dom
import Login from './paginas/login/Login'; // Importa o componente Login
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>

      <>
        {/* Define o BrowserRouter como o componente pai para gerenciar as rotas */}
        <BrowserRouter>
          {/* Renderiza o componente Navbar */}
          <Navbar />

          {/* Define uma div com uma classe específica */}
          <div className='min-h-[80vh]'>
            {/* Define as rotas do aplicativo */}
            <Routes>
              {/* Define a rota para a página inicial, renderizando o componente Home */}
              <Route path="/" element={<Home />} />

              {/* Define a rota para a página de login, renderizando o componente Login */}
              <Route path="/login" element={<Login />} />

              {/* Define a rota para a página inicial, renderizando o componente Home */}
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>

          {/* Renderiza o componente Footer */}
          <Footer />
        </BrowserRouter>
      </>









    </AuthProvider>
  );
}

export default App;
