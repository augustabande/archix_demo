import aboutImage from "@/assets/img/about/about-1.jpg";
import { Link } from 'react-router-dom';

export default function AboutSectionTwo() {
    return (
        <div className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="about-bg-wrap">
                            <img src={aboutImage} alt="" style={{height: 'auto'}}/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="about-content-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>About <span>/</span> <br/> RS Walls</h2>
                                </div>
                            </div>
                            <div className="heading-animation">
                                <h3>RS Walls es un equipo de arquitectos y diseñadores<br/> de interiores con experiencia</h3>
                            </div>
                            <div className="p-animation">
                                <p>apasionados por crear espacios hermosos, funcionales y sostenibles.
                                Creemos que un buen diseño debe estar al alcance de todos, y trabajamos con dedicación para convertir la visión de cada cliente en una realidad, integrando innovación, calidad y responsabilidad ambiental en cada proyecto.</p>
                            </div>
                            <Link to="/about" className="theme-btn mt-30">Más información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}