import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import { Bird } from '../models/Bird'
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-16, -6, -23]; 
    let rotation = [0.15,-1,0]
    if(window.innerWidth< 768){
      screenScale = [0.9, 0.9, 0.9];
      
    }else{
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  return (
    <section className='w-full h-screen relative '>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            popup
        </div> */}
        <Canvas className='w-full h-screen bg-transparent'
        camera={{near: 0.1,far:1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={1.5}/>
                <ambientLight intensity={1}/>
                <hemisphereLight skyColor="#FFFF00" groundColor="#000000" intensity={1}/>
               <Bird />
               <Sky />
               <Island position={islandPosition}
               scale={islandScale} rotation={islandRotation}/> 
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home
