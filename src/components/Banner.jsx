import './Banner.css'

function Banner({ image, title }) {
    const name = title ? 'bannerHome' : 'bannerAbout';
    return (
        <section className={`banner ${name}`}>
            <img src={image} alt={title ? "paysage de falaise en bord de mer" : "paysage de montagne"} />
            <p>{title}</p>
        </section>
    )
}

export default Banner;
