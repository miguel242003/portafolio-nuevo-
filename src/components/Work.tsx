import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef, useEffect } from "react";

const Work = () => {
  const workFlexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const workFlex = workFlexRef.current!;
    const workSection = workFlex.closest(".work-section") as HTMLElement;

    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let maxDrag = 0;
    let animId = 0;
    let velocity = 0;
    let lastX = 0;

    const calcMax = () => {
      const boxes = Array.from(
        workFlex.querySelectorAll<HTMLElement>(".work-box")
      );
      const totalWidth = boxes.reduce((sum, b) => sum + b.offsetWidth, 0);
      maxDrag = Math.max(0, totalWidth - workSection.clientWidth);
    };

    calcMax();
    window.addEventListener("resize", calcMax);

    const clamp = (v: number) => Math.min(0, Math.max(-maxDrag, v));

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX - currentX;
      lastX = e.clientX;
      velocity = 0;
      cancelAnimationFrame(animId);
      workFlex.style.transition = "none";
      workSection.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      velocity = e.clientX - lastX;
      lastX = e.clientX;
      currentX = clamp(e.clientX - startX);
      workFlex.style.transform = `translateX(${currentX}px)`;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      workSection.style.cursor = "";
      document.body.style.userSelect = "";

      const applyInertia = () => {
        velocity *= 0.92;
        if (Math.abs(velocity) < 0.5) return;
        currentX = clamp(currentX + velocity);
        workFlex.style.transform = `translateX(${currentX}px)`;
        animId = requestAnimationFrame(applyInertia);
      };
      applyInertia();
    };

    workFlex.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      workFlex.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", calcMax);
      cancelAnimationFrame(animId);
    };
  }, []);

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
    ...Array(4).fill({
      name: "Nombre del proyecto",
      category: "Categoría",
      tech: "Javascript, TypeScript, React, Threejs",
      image: "/images/placeholder.webp",
    }),
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Mi <span>Trabajo</span>
        </h2>
        <div className="work-flex" ref={workFlexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tecnologías y características</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
