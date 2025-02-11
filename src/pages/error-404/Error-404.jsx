import { Link } from 'react-router-dom'
import './error-404.scss'

function Error_404() {
    return (
        <main id="main-Error404">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error_404
