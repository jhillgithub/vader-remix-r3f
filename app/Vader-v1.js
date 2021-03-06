/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/vader-v1.glb')
  // useFrame(() => (group.current.rotation.y += 0.004))

  return (
    <group ref={group} {...props} dispose={null}>
            <Sound url="/vader.mp3" />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={26.09}>
            <mesh
              geometry={nodes['default_04_-_Default_0'].geometry}
              material={nodes['default_04_-_Default_0'].material}
              >

              </mesh>
            <mesh geometry={nodes['default001_02_-_Default55_0'].geometry} material={materials['02_-_Default55.001']} />
            <mesh geometry={nodes.default002_default_0.geometry} material={nodes.default002_default_0.material} />
            <mesh geometry={nodes.default003_default_0.geometry} material={nodes.default003_default_0.material} />
            <mesh geometry={nodes['default004_03_-_Default_0'].geometry} material={materials['03_-_Default.001']} />
            <mesh geometry={nodes['default005_02_-_Default_0'].geometry} material={materials['02_-_Default.001']} />
            <mesh geometry={nodes.default006_default_0.geometry} material={nodes.default006_default_0.material} />
            <mesh geometry={nodes.default007_default_0.geometry} material={nodes.default007_default_0.material} />
            <mesh geometry={nodes.default008_default_0.geometry} material={nodes.default008_default_0.material} />
            <mesh geometry={nodes.default009_default_0.geometry} material={nodes.default009_default_0.material} />
            <mesh
              geometry={nodes['default011_04_-_Default_0'].geometry}
              material={nodes['default011_04_-_Default_0'].material}
            />
            <mesh geometry={nodes.default010_default_0.geometry} material={nodes.default010_default_0.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vader-v1.glb')


function Sound({ url }) {
  const sound = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, url);
  useEffect(() => {
    sound.current.setBuffer(buffer);
    sound.current.setRefDistance(.1);
    sound.current.setLoop(true);
    sound.current.play(3);
    camera.add(listener);
    return () => camera.remove(listener);
  }, []);
  return <positionalAudio ref={sound} args={[listener]} />;
}