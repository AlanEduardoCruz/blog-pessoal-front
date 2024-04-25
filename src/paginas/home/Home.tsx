// Importa a biblioteca react para utilizar componentes react
import React from "react";
// Importa arquivo estilos
import "./Home.css";

import homeLogo from"../../assets/home.jpg"

// Função criada para retornar um elemento h1 com texto "home"
function Home() {
  return (
    <>
      <h1 className="titulo">Home</h1> 
      
      <img
        src={homeLogo}
        alt="Imagem Tela Inicial"
        className="img"
      />
    </>
  );
}

export default Home; // Exporta o componente para ser utilizado em outras partes do codigo
