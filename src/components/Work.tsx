import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const projects = [
  {
    name: "Desarrollo Full Stack (Gisa-Nqn)",
    category: "Desarrollo de Software",
    tech: "Python, Django, HTML5, CSS3, JavaScript, Tailwind / Bootstrap, MySQL, SQLite, Linux, Nginx, Gunicorn, Git, 2FA (TOTP), Protección CSRF",
    image: "/img/gisa-nqn.png",
  },
  {
    name: "Automatización con n8n y Telegram",
    category: "Automatización y Flujos de Trabajo",
    tech: "n8n, Telegram API, Google Sheets API, JavaScript",
    image: "/img/n8ncostodecocina.jpeg",
  },
  {
    name: "Nombre del proyecto",
    category: "Categoría",
    tech: "Javascript, TypeScript, React, Threejs",
    image: "/images/placeholder.webp",
  },
];

const INTERVAL = 4000;

const Work = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(current);
  const pausedRef = useRef(false);
  currentRef.current = current;

  const goTo = (index: number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 300);
    restartTimer();
  };

  const prev = () =>
    goTo((currentRef.current - 1 + projects.length) % projects.length);

  const next = () =>
    goTo((currentRef.current + 1) % projects.length);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const restartTimer = () => {
    stopTimer();
    if (pausedRef.current) return;
    timerRef.current = setInterval(() => {
      goTo((currentRef.current + 1) % projects.length);
    }, INTERVAL);
  };

  const pauseCarousel = () => {
    pausedRef.current = true;
    stopTimer();
  };

  const resumeCarousel = () => {
    pausedRef.current = false;
    restartTimer();
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const project = projects[current];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mi <span>Trabajo</span>
        </h2>

        <div className={`work-box${fading ? " work-box--fading" : ""}`}>
          <div className="work-info">
            <div className="work-title">
              <h3>0{current + 1}</h3>
              <div>
                <h4>{project.name}</h4>
                <p>{project.category}</p>
              </div>
            </div>
            <h4>Tecnologías y características</h4>
            <p>{project.tech}</p>
          </div>
          <WorkImage
            image={project.image}
            alt={project.name}
            onLightboxOpen={pauseCarousel}
            onLightboxClose={resumeCarousel}
          />
        </div>

        <div className="work-nav">
          <button className="work-nav-btn" onClick={prev} aria-label="Anterior">
            <FaChevronLeft />
          </button>
          <div className="work-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`work-dot${i === current ? " work-dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Proyecto ${i + 1}`}
              />
            ))}
          </div>
          <button className="work-nav-btn" onClick={next} aria-label="Siguiente">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
