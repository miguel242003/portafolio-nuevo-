# Miguel Astorga — Portfolio 🚀

Este repositorio contiene el código fuente de mi sitio portfolio personal, construido con React, TypeScript y Three.js, con un personaje 3D interactivo y animaciones GSAP a lo largo del scroll.

---

## ⚙️ Tech Stack

- **Framework:** React 18 + TypeScript 5
- **Build:** Vite 5
- **3D:** Three.js, @react-three/fiber, @react-three/drei, @react-three/cannon, @react-three/rapier
- **Animación:** GSAP 3 (ScrollTrigger, ScrollSmoother), @gsap/react
- **Estilos:** CSS por componente
- **Íconos:** react-icons
- **Analytics:** @vercel/analytics

## 🧩 Estructura del proyecto

```
src/
  components/            # Secciones del sitio y componentes UI
    Character/           # Personaje 3D (Three.js + DRACO + GLTF, modelo cifrado)
    utils/                # Utilidades de scroll GSAP, text split, efectos iniciales
  context/                # LoadingProvider
  data/                   # Datos del esqueleto/huesos del modelo 3D
```

Secciones principales del sitio: Landing, About, WhatIDo, Career, TechStack, Work, Contact — con navegación (Navbar), cursor custom, íconos sociales y un loader animado.

## 🛠️ Cómo correr el proyecto

Este proyecto usa `pnpm`.

```bash
pnpm install
pnpm dev       # entorno de desarrollo
pnpm build     # build de producción
pnpm preview   # previsualizar el build
pnpm lint      # linting
```

⚠️ Las plugins de GSAP incluidas son versiones trial (`gsap-trial`) y no deben usarse en producción/hosting. Para las plugins oficiales de GSAP Club: https://gsap.com/docs/v3/Installation/

## 🎨 Assets

El avatar 3D original que aparece en mi portfolio en vivo es un asset propio, no incluido públicamente y no reutilizable sin permiso.

## 🙏 Créditos

Este proyecto está basado en el template open-source de [Moncy Yohannan](https://www.moncy.dev), publicado bajo la Personal Portfolio License (PPL) v1.0. Ver [LICENSE](LICENSE) para los términos completos.

## 📄 Licencia

Este proyecto se distribuye bajo la Personal Portfolio License (PPL) v1.0. Ver el archivo [LICENSE](LICENSE) para más detalles.
