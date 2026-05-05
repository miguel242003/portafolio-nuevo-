import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>¡Hola! Soy</h2>
            <h1>
              MIGUEL
              <br />
              <span>ASTORGA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Un Creativo</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Ingeniero</div>
              <div className="landing-h2-2">Arquitecto</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full Stack</div>
              <div className="landing-h2-info-1">de Datos</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
