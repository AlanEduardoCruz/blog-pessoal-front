import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

// Tipando o contexto, declarando as informações que o contexto armazenará
interface AuthContextProps {
    usuario: UsuarioLogin // Informações do usuário logado
    handleLogout(): void // Função para realizar logout
    handleLogin(usuario: UsuarioLogin): Promise<void> // Função para realizar login
    isLoading: boolean // Indicador de carregamento
}

interface AuthProviderProps {
    children: ReactNode // Componentes filhos
}

// Construção inicial do contexto de armazenamento
export const AuthContext = createContext({} as AuthContextProps)

// Função que gerencia o contexto de armazenamento
export function AuthProvider({ children }: AuthProviderProps) {

    // Criando um estado para o usuário
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    // Estado para indicar se está carregando
    const [isLoading, setIsLoading] = useState(false)

    // Função assíncrona para lidar com o login do usuário
    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true) // Indicar que está carregando
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario) // Chamada para serviço de login
            alert("Usuário logado com sucesso")
            setIsLoading(false) // Parar de carregar após o login ser bem-sucedido
        } catch (error) {
            console.log(error) // Log de erro
            alert("Dados do usuário inconsistentes")
            setIsLoading(false) // Parar de carregar em caso de erro
        }
    }

    // Função para realizar logout
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    // Retornar o provedor de contexto com os valores e funções necessárias
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
