import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contacto</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:miguel.astorga.diaz@gmail.com" data-cursor="disable">
                miguel.astorga.diaz@gmail.com
              </a>
            </p>
            <h4>Teléfono</h4>
            <p>
              <a href="tel:+56974003341" data-cursor="disable">
                +56 9 7400 3341
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Redes sociales</h4>
            <a
              href="https://github.com/miguel242003"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
<a
              href="https://www.instagram.com/migueloscar2411/?hl=es"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Diseñado y Desarrollado <br /> por <span>Miguel Astorga</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
