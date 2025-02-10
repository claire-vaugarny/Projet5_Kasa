import { NavLink } from 'react-router-dom'
import './styles/Header.css'

function Header() {
    return (
        <header className="header">

            <div id='logoHeader'>
                <img src="../src/assets/logoHeader-K.svg" alt="Kasa logo" />
                <img src="../src/assets/logoHeader-house.svg" alt="Kasa logo" />
                <img src="../src/assets/logoHeader-s.svg" alt="Kasa logo" />
                <img src="../src/assets/logoHeader-a.svg" alt="Kasa logo" />
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
