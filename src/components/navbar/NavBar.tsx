import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
    let navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);

    function logout() {
        handleLogout();
        alert('Usuário deslogado com sucesso');
        navigate('/login');
    }

    return (
        <div className='bg-indigo-900 text-white'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

                <div className='flex items-center'>
                    <button
                        className='md:hidden text-xl mr-4 focus:outline-none'
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16m-7 6h7'
                            />
                        </svg>
                    </button>

                    <div
                        className={`${
                            menuAberto ? 'block' : 'hidden'
                        } md:flex md:items-center md:space-x-4`}
                    >
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <br/>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <br/>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
                        <br/>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <br/>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
