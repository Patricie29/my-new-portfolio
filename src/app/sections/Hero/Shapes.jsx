'use client'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Float, Environment } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Shapes() {
    return (
        <div className='row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0'>

            <Canvas className='z-0' shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}>

                <Suspense fallback={null}>
                    <Geometries />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.65}
                        scale={40}
                        blur={1}
                        far={9}
                    />
                    <Environment preset='studio' />
                </Suspense>

            </Canvas>

        </div>
    )
}


function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.4, //rate at which it spins
            geometry: new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(3, 1)), //central gem
        },
        {
            position: [1, -0.75, 4],
            r: 0.4, //rate at which it spins
            geometry: new THREE.WireframeGeometry(new THREE.CapsuleGeometry(0.5, 1.6, 2, 16)), //pill
        },
        {
            position: [-1.4, 2, -4],
            r: 0.6, //rate at which it spins
            geometry: new THREE.WireframeGeometry(new THREE.BoxGeometry(2, 1, 2)), //square
        },
        {
            position: [-0.8, -0.75, 5],
            r: 0.5, //rate at which it spins
            geometry: new THREE.WireframeGeometry(new THREE.TorusGeometry(0.6, 0.25, 10, 3)), //triangle
        },
        {
            position: [1.6, 1.6, -4],
            r: 0.7, //rate at which it spins
            geometry: new THREE.WireframeGeometry(new THREE.OctahedronGeometry(1.5)), //diamond
        },
    ]


    const wireframe = new THREE.WireframeGeometry(geometries[0].geometry);


    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;

    const materials = [
        new THREE.LineBasicMaterial({ color: 0x40E0D0 }), // Classic Turquoise
        new THREE.LineBasicMaterial({ color: 0x20B2AA }), // Light Sea Green
        new THREE.LineBasicMaterial({ color: 0xC5C95C }), // yellow
        new THREE.LineBasicMaterial({ color: 0x008080 }), // Teal (Deep Turquoise)
    ]

    const soundEffects = [
        new Audio('/sounds/knock1.ogg'),
        new Audio('/sounds/knock2.ogg'),
    ]


    return geometries.map(({ position, r, geometry }) => (
        <Geometry
            key={JSON.stringify(position)}
            position={position.map((p) => p * 2)}
            geometry={geometry}
            soundEffects={soundEffects}
            materials={materials}
            r={r}
        />
    ))

}

function Geometry({ r, position, geometry, materials, soundEffects }) {
    const lineRef = useRef()
    const [visible, setVisible] = useState(false)

    const startingMaterial = getRandomMaterial()

    function getRandomMaterial() {
        return gsap.utils.random(materials)
    }

    function handleClick(event) {
        const line = event.object

        gsap.utils.random(soundEffects).play()

        gsap.to(line.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: 'elastic.out(1, 0.3)',
            yoyo: true, //makes it come back to where it started
        })

        line.material = getRandomMaterial()

    }

    const handlePointerOver = () => {
        document.body.style.cursor = 'pointer';
        // Scale up by 2 times
        gsap.to(lineRef.current.scale, {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            ease: 'power2.out'
        });
    };

    const handlePointerOut = () => {
        document.body.style.cursor = 'default';
        // Scale back down to original size
        gsap.to(lineRef.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 2,
            ease: 'power2.out'
        });
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            setVisible(true)
            gsap.from(lineRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
                delay: 0.3
            })
        })

        return () => ctx.revert()  //clean up
    }, [])

    return (
        <group position={position} ref={lineRef}>

            <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
                <lineSegments
                    geometry={geometry}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    visible={visible}
                    material={startingMaterial}
                />
            </Float>

        </group>
    )

}