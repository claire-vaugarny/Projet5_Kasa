import '../styles/Header.css'

function Header() {
    return (
        <header className="header">

            <div id='logoHeader'>
                <img src="../src/assets/logoHeader-K.svg" alt="Kasa logo"></img>
                <img src="../src/assets/logoHeader-house.svg" alt="Kasa logo"></img>
                <img src="../src/assets/logoHeader-s.svg" alt="Kasa logo"></img>
                <img src="../src/assets/logoHeader-a.svg" alt="Kasa logo"></img>
            </div>

            <nav>
                <ul>
                <li> <a href='#'>Accueil</a> </li>
                <li> <a href='#'>A Propos</a> </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header