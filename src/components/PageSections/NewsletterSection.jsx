export default function NewsletterSection() {
    return (
        <div className="newsletter-section">
            <div className="container">
                <div className="row newsletter-inner gray-bg align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Mantente al día <br/> con RS Walls <span><i
                                    className="las la-arrow-right"></i></span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="newsletter-content">
                            <p>Regístrate a nuestro boletín para estar al tanto de nuestros últimos proyectos, ideas de diseño y noticias del sector. </p>
                            <div className="subscribed-form">
                                <form>
                                    <input type="text" placeholder="Escribe tu correo electrónico"/>
                                    <input className="bordered-btn" type="submit" value="Registrarse"/>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}