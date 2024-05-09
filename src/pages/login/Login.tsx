import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  // Hook para navegação
  let navigate = useNavigate();

  // Estado local para armazenar os dados do formulário de login
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  // Contexto de autenticação para acessar informações e funções relacionadas à autenticação
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  // Efeito para redirecionar para a página de home se o usuário já estiver logado
  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario]);

  // Função para atualizar o estado do formulário conforme os campos são preenchidos
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    setUsuarioLogin({

      ...usuarioLogin, // operador de espalhamento (...)


      [e.target.name]: e.target.value
    });


  }

  // Função para lidar com a submissão do formulário de login
  function realizarLogin(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); // Evitar o comportamento padrão do formulário
    handleLogin(usuarioLogin); // Chamar a função de login do contexto de autenticação


  }

  return (
    <>
      {/* Layout da página de login */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={realizarLogin}>
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          {/* Campos de entrada para usuário e senha */}
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          {/* Botão de login */}
          <button type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
            {/* Renderizar um spinner se isLoading for verdadeiro, senão, renderizar "Entrar" */}
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> : <span>Entrar</span>}
          </button>
          {/* Link para página de cadastro */}
          <hr className="border-slate-800 w-full" />
          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
