import featureImage from "@/assets/img/feature-bg.jpg";

export default function FeatureSection(){
    return (
        <div className="feature-area gray-bg section-padding">
    <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4">
                <div className="section-title">
                    <div className="heading-animation">
                        <h2>Nuestros <br/> Valores <br/> <span><i className="las la-arrow-down mt-20"></i></span></h2>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-lg-8">
                <div className="feature-bg-wrap">
                    <img src={featureImage} alt="" style={{height: 'auto'}}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Diseño sostenible</h4>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Honestidad e integridad</h4>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Diseño innovador</h4>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Atención al detalle</h4>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Equipo con experiencia</h4>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                <div className="single-feature-item">
                    <div className="feature-icon">
                        <i className="las la-arrow-right"></i>
                    </div>
                    <h4>Trabajo de calidad</h4>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}