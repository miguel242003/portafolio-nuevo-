import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// ─── COLORES DEL PERSONAJE ────────────────────────────────────────────────────
// Edita aquí los colores de cada parte. Formato: 0xRRGGBB
type MatProps = { color: number; roughness?: number; metalness?: number; emissive?: number; emissiveIntensity?: number; transparent?: boolean; opacity?: number };

const CHARACTER_MATERIALS: Record<string, MatProps> = {
  // --- Piel ---
  "Hand":          { color: 0x8C654E, roughness: 0.7,  metalness: 0.0 },
  "Neck":          { color: 0x8C654E, roughness: 0.7,  metalness: 0.0 },
  "Ear001":        { color: 0x8C654E, roughness: 0.7,  metalness: 0.0 },
  "Plane007":      { color: 0x8C654E, roughness: 0.7,  metalness: 0.0 },

  // --- Rostro ---
  "Eyebrow":       { color: 0x1a1a1a, roughness: 0.9,  metalness: 0.0 },


  // --- Ropa ---
  "BODYSHIRT":     { color: 0x222222, roughness: 0.85, metalness: 0.0 },
  "Pant":          { color: 0x555566, roughness: 0.85, metalness: 0.0 },
  "Shoe":          { color: 0xFFFFFF, roughness: 0.5,  metalness: 0.0 },
  "Sole":          { color: 0xCCCCCC, roughness: 0.6,  metalness: 0.0 },
  "hair":          { color: 0x0d0d0d, roughness: 0.8,  metalness: 0.0 },

  // --- Escritorio ---
  "Cube002":       { color: 0xFFFFFF, roughness: 0.3,  metalness: 0.1 },

  // --- Monitor y Teclado ---
  "screenlight":   { color: 0xFF007F, roughness: 0.1,  metalness: 0.0, emissive: 0xFF007F, emissiveIntensity: 2.0 },
  "Keyboard":      { color: 0x1a1a1a, roughness: 0.7,  metalness: 0.1 },
  "KEYS":          { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "LLAVES003":     { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "LLAVES023":     { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS001":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS002":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS004":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS005":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS006":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS007":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS008":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS009":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS010":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS011":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS012":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS013":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS014":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS015":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS016":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS017":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS018":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS019":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS020":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS021":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS022":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS024":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS025":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS026":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS027":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS028":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS029":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS030":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS031":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS032":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS033":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS034":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS035":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS036":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS037":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS038":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },
  "KEYS039":       { color: 0x2a2a2a, roughness: 0.8,  metalness: 0.0 },

  // --- Ocultar ---
  "Avión":         { color: 0x000000, transparent: true, opacity: 0 },
  "Avión002":      { color: 0x000000, transparent: true, opacity: 0 },
  "Avión003":      { color: 0x000000, transparent: true, opacity: 0 },
  "Avión017":      { color: 0x000000, transparent: true, opacity: 0 },
  "Avión017_1":    { color: 0x000000, transparent: true, opacity: 0 },
  "suelo":         { color: 0x000000, roughness: 1.0,   metalness: 0.0 },
};
// ─────────────────────────────────────────────────────────────────────────────

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      let character: THREE.Object3D;
      loader.load(
        "/models/character.glb",
        async (gltf) => {
          character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);
          const unmapped: string[] = [];
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = true;
              child.receiveShadow = true;
              mesh.frustumCulled = true;
              const props = CHARACTER_MATERIALS[child.name];
              if (props) {
                mesh.material = new THREE.MeshStandardMaterial(props);
              } else {
                unmapped.push(child.name);
              }
            }
          });
          if (unmapped.length) console.log("UNMAPPED MESHES:", unmapped);
          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();
          character!.getObjectByName("footR")!.position.y = 3.36;
          character!.getObjectByName("footL")!.position.y = 3.36;
          dracoLoader.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
