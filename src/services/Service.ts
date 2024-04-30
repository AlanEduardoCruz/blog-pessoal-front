// axios

import axios from "axios";

// conexao Front X Back

const api = axios.create({
  baseURL: "https://blogpessoal-1hpu.onrender.com/",
});

// Services -> Funções que vão realizar as requisições back end.

// Definição da função login, que é assíncrona, utilizando async
export const login = async (url: string, dados: Object, setDados: Function) => {
  // Realiza uma requisição POST para a URL fornecida, com os dados fornecidos
  const resposta = await api.post(url, dados);

  // Chama a função setDados, passando os dados da resposta da requisição
  setDados(resposta.data);
};


export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
