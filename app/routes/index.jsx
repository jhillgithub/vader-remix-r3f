import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  OrbitControls,
  Environment,
  Lightformer,
  Float
} from "@react-three/drei";
import * as THREE from 'three';
import Model from "../Vader-v1.js";

export default function Index() {
  return (
    <Canvas camera={{position: [0, .25, 1]}}>
      <color attach="background" args={["#050505"]} />
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.2} />

      <Stars />
      <Suspense fallback={null}>
        <Model scale={3} position={[0, -2.6, 0]}>

        </Model>
      </Suspense>
      <OrbitControls />
      <Environment>
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={2} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
        <Lightformer
          intensity={0.75}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[20, 0.1, 1]}
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[20, 0.5, 1]}
        />
        <Lightformer
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 1, 1]}
        />
        <MovingSpots />
      </Environment>
      <CameraRig />
    </Canvas>
  );
}

function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef()
  useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer key={`light_${i}`} form="circle" intensity={5} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
        ))}
      </group>
    </group>
  )
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0.4, 1.75 + Math.cos(t / 5)), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}