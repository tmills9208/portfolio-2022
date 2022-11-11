/* eslint-disable prettier/prettier */
import React from 'react'
import { Canvas, mesh } from '@react-three/fiber'
import dynamic from 'next/dynamic'

function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 20]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  )
}

function ThreeCanvas() {
  return (
    <div className="h-60 w-80 lg:h-full lg:w-full">
      <Canvas className="bg-black" shadows camera={{ position: [-6, 7, 7] }}>
        <Floor />
      </Canvas>
    </div>
  )
}

export default ThreeCanvas
