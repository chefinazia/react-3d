import React from 'react'
import EarthDayMap from '../../assests/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../assests/textures/8k_earth_clouds.jpg';
import EarthNightMap from '../../assests/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assests/textures/8k_earth_specular_map.jpg';
import EarthNormarlMap from '../../assests/textures/8k_earth_normal_map.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import {OrbitControls,Stars} from '@react-three/drei'
import * as THREE from 'three';

function Earth(props) {

    const [colorMap,normalMap,specularMap,cloudsMap]=useLoader(TextureLoader,[EarthDayMap,EarthNormarlMap,EarthSpecularMap,EarthCloudsMap])
    return (
        <>
            <ambientLight intensity='1'/>
            <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true}/>
            <mesh>
                <sphereGeometry  args={[1.005,32,32]}/>
                <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
                <sphereGeometry args={[1,32,32]}/>
                <meshPhongMaterial specularMap={specularMap}></meshPhongMaterial>
                <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
            </mesh>
        </>
    )
}

export default Earth
