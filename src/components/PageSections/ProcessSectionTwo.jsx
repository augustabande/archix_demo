import processImage1 from "@/assets/img/process/1.jpg";
import processImage2 from "@/assets/img/process/2.jpg";
import processImage3 from "@/assets/img/process/3.jpg";

export default function ProcessSectionTwo() {
    return (
        <div className="process-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 d-flex">
                        <div className="process-img-wrap">
                            <div className="process-img-1">
                                <img src={processImage1} alt=""/>
                            </div>
                            <div className="process-img-2">
                                <img src={processImage2} alt=""/>
                            </div>
                            <div className="process-img-3">
                                <img src={processImage3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="process-content-wrap">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>¿Cómo trabajamos?</h2>
                                </div>
                            </div>
                            <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-buttons" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            <span>01.</span>Consulta inicial
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Analizamos tus ideas, necesidades y expectativas. Nuestro equipo te asesora sobre las mejores opciones para tu proyecto, combinando funcionalidad, estética y sostenibilidad.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            <span>02.</span>Diseño arquitectónico
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Creamos propuestas personalizadas con un enfoque innovador, incluyendo planos arquitectónicos, selección de materiales y diseño de interiores a medida.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            <span>03.</span>Desarrollo y supervisión
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Coordinamos y supervisamos cada etapa del proceso constructivo, asegurando el cumplimiento de los estándares de calidad y eficiencia energética, especialmente con el sistema Xpanel.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                            <span>04.</span>Entrega llave en mano
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Entregamos proyectos listos para habitar, cuidando cada detalle: desde instalaciones eléctricas y fontanería hasta acabados como carpintería, pavimentos, techos o baños.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}