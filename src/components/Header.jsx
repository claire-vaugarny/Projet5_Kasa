import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
    return (
        <header className="header">

            <div id='logoHeader'>
                <img id="logoHeaderK" src="../src/assets/logoHeader-K.svg" alt="Kasa logo" />
                <img id="logoHeaderHouse"src="../src/assets/logoHeader-house.svg" alt="Kasa logo" />
                <img id="logoHeaderS"src="../src/assets/logoHeader-s.svg" alt="Kasa logo" />
                <img id="logoHeaderA"src="../src/assets/logoHeader-a.svg" alt="Kasa logo" />
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
