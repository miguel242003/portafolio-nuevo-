# CLAUDE.md

## Rol del asistente

Ayudo a desarrollar este sitio portfolio en React + TypeScript con Vite.

## Stack del proyecto

- **Framework:** React 18 + TypeScript 5
- **Build:** Vite 5
- **3D:** Three.js, @react-three/fiber, @react-three/drei, @react-three/cannon, @react-three/rapier
- **Animación:** GSAP 3 (gsap-trial con ScrollTrigger y ScrollSmoother), @gsap/react
- **Estilos:** CSS por componente
- **Íconos:** react-icons
- **Analytics:** @vercel/analytics
- **Linting:** ESLint 9 + typescript-eslint

## Estructura principal

```
src/
  components/     # Secciones del sitio y componentes UI
  components/Character/  # Sistema de personaje 3D (Three.js + DRACO + GLTF)
  components/utils/      # GSAP scroll, text split, efectos iniciales
  context/        # LoadingProvider
  data/           # boneData para modelo 3D
```

## Notas

- El modelo 3D del personaje está cifrado (`character.enc`) y usa compresión DRACO.
- El scroll horizontal del Work section usa ScrollTrigger de GSAP.
- La física del TechStack usa @react-three/cannon y @react-three/rapier.
- Usar `pnpm` para instalar dependencias.

## Skills recomendadas

- **run**: usar para levantar el dev server y verificar en el navegador cualquier cambio de UI, animación GSAP o del personaje 3D antes de marcar la tarea como completa.
- **code-review**: usar antes de commitear cambios no triviales, sobre todo en la lógica de scroll/GSAP o el sistema de personaje 3D.
- **simplify**: usar después de features grandes (carrusel, física con cannon/rapier) para limpiar código sin alterar comportamiento.
- **security-review**: usar si se agregan formularios, endpoints o manejo de datos de usuarios.
- **dataviz**: solo si se agregan gráficos o dashboards al sitio.
