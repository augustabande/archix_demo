import { Link } from 'react-router-dom';

export default function HeroSectionTwo() {
    return (
        <div id="home-1" className="hero-area">
            <div className="hero-area-banner">
                <div className="hero-area-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="section-title">
                                    <div className="heading-animation">
                                        <h1>Trasforma tu<br/>espacio con RS Walls.</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 text-md-end">
                                <div className="service-info">
                                    <div className="heading-animation">
                                        <p>Since 1995</p>
                                        <h4>Architecture</h4>
                                        <h4>Interior</h4>
                                        <h4>Landscape</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-xl-5 col-xl-7 offset-md-4 col-md-6 text-lg-end">
                                <div className="p-animation">
                                    <p>Bienvenido a RS Walls, una firma de arquitectura y diseño de interiores que ofrece un servicio integral para cada etapa de tu proyecto.
</p>
                                </div>
                                <Link to="/about" className="theme-btn mt-20">Start a Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}