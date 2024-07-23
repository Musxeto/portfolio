import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import { Bird } from '../models/Bird';
import { Plane } from '../models/Plane';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [islandProps, setIslandProps] = useState({
    scale: [1, 1, 1],
    position: [-16, -6, -23],
    rotation: [0.15, -1, 0],
  });

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandProps({
        scale: [0.9, 0.9, 0.9],
        position: [-16, -6, -23],
        rotation: [0.15, -1, 0],
      });
    } else {
      setIslandProps({
        scale: [1, 1, 1],
        position: [-16, -6, -23],
        rotation: [0.15, -1, 0],
      });
    }
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition
    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5]
      screenPosition = [0,-1.5,0]
    } else {
     screenScale = [3,3,3]
     screenPosition = [0,-4,-4]
    }
    return [screenScale,screenPosition]
  };

  const [planeScale,planePosition] = adjustPlaneForScreenSize();
  useEffect(() => {
    
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustIslandForScreenSize);
    };
  }, []);

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={1} />
          <hemisphereLight skyColor="#FFFF00" groundColor="#000000" intensity={1} />
          <Bird />
          <Plane 
          planeScale={planeScale}
          planePosition={planePosition}
          isRotating={isRotating}
          rotation={[0,20,0]}
          />
          <Sky />
          <Island
            position={islandProps.position}
            scale={islandProps.scale}
            rotation={islandProps.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
