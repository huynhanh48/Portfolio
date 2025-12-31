import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, OrbitControls, PresentationControls, SpotLight } from '@react-three/drei'
import ModelDesk from "../models/Desk"

export default function Desk() {
    return (
        <div className='inset-0 absolute  z-10' >

            <Canvas camera={{ position: [20, 5, 15], fov: 30, near: 0.1, far: 1000 }} >
                <ambientLight intensity={1} />
                <SpotLight position={[-3, 5, 5]} angle={1} intensity={1} />
                <Suspense fallback={null}>
                    <PresentationControls polar={[0, 0]} azimuth={[-Math.PI / 20, Math.PI / 20]}
                    >
                        <group>
                            <ModelDesk position={[-10, -50, 0]} scale={10} />
                        </group>
                    </PresentationControls>
                </Suspense>


                <Environment resolution={256}>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-15, 10, 15]}
                        scale={5}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[0, -10, 10]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[0, 0, -10]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </Environment>

            </Canvas>
        </div>
    )
}
