import './Banner.css'

function Banner({ pageType }) {  // Utilise la destructuration pour récupérer pageType
    if (pageType === "home-page") {
        return (
            <section className="Banner">
                <img src="../src/assets/bannerAcceuil.webp" alt="paysage de falaises en bord de mer" />
                <p>Chez vous, partout et ailleurs</p>
            </section>
        );
    } else {
        return (
            <section className="Banner">
                <img src="../src/assets/bannerAPropos.webp" alt="paysage de montagne" />
            </section>
        );
    }
}

export default Banner;
