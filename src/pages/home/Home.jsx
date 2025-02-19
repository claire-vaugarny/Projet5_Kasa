import './home.scss'
import Banner from '../../components/Banner'
import bannerAcceuil from '../../assets/bannerAcceuil.webp'
import logements from '../../assets/datas.json'
import LogementCard from './LogementCard'

function Home() {
    return (
        <main>
        <div className='homecontainer'>
            <Banner image={bannerAcceuil} title="Chez vous, partout et ailleurs" />
            <section className="logementsList">
                {logements.map((logement) => (
                    <LogementCard key={logement.id} logement={logement} />
                ))}
            </section>
        </div>
        </main>
    );
}

export default Home;
