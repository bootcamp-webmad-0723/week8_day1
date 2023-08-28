import { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/theme.context'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { theme, switchTheme, invertedTheme } = useContext(ThemeContext)
    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <Navbar
            bg={invertedTheme}
            data-bs-theme={invertedTheme}
            className='mb-5'
            expand="lg"
        >
            <Container>
                <Link className='navbar-brand'>CoastersApp_</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/galeria'} className='nav-link'>Galería</Link>

                        {
                            loggedUser &&
                            <>
                                <Link to={'/crear'} className='nav-link'>Crear</Link>
                                <Link to={'/perfil'} className='nav-link'>Mi perfil</Link>
                                <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                            </>
                        }

                        {
                            !loggedUser &&
                            <>
                                <Link to={'/registro'} className='nav-link'>Registro</Link>
                                <Link to={'/inicio-sesion'} className='nav-link'>Iniciar sesión</Link>
                            </>
                        }


                    </Nav>
                    <div className="d-flex">
                        <Button variant='primary' size='sm' onClick={switchTheme} style={{ marginRight: 10 }}>Tema {theme === 'dark' ? 'claro' : 'oscuro'}</Button>
                        <span class="navbar-text">¡Hola, {loggedUser ? loggedUser.username : 'invitad@'}!</span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation