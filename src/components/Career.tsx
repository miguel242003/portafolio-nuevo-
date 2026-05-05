import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Mi carrera <span>&</span>
          <br /> experiencia
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desarrollador Web Full Stack</h4>
                <h5>Gisa-nqn (Argentina)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Diseño y desarrollo integral de un sitio web corporativo para administración inmobiliaria. Implementé una arquitectura responsiva y optimizada, gestionando directamente el levantamiento de requerimientos y la entrega final del producto.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cargo en la empresa</h4>
                <h5>Nombre de la empresa</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Descripción de responsabilidades y logros alcanzados durante
              este período en la organización.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cargo en la empresa</h4>
                <h5>Nombre de la empresa</h5>
              </div>
              <h3>HOY</h3>
            </div>
            <p>
              Descripción de responsabilidades y logros alcanzados durante
              este período en la organización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
