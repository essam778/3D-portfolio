import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const EarthModel = React.memo(() => {
  try {
    const { scene } = useGLTF(
      "./planet/scene.gltf",
      undefined,
      (loader) => {
        const dracoLoader = new DRACOLoader();
        loader.setDRACOLoader(dracoLoader);
      }
    );

    return (
      <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />
    );
  } catch (error) {
    console.error("Error loading Earth model:", error);
    return null;
  }
});

EarthModel.displayName = "EarthModel";

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<CanvasLoader />}>
        <EarthModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
