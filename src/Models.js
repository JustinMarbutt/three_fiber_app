import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import boatMat from './jboat.mtl';
import boatObj from './jboat.obj';
import islandObj from './island.obj';
import islandMat from './island.mtl';
import islandObj2 from './jisland.obj';
import islandMat2 from './jisland.mtl';
import floatObj from './float.glb';
import GLBModel from  './GLBModel'


function Boat() {
  const boatSkin = useLoader(MTLLoader, boatMat);
  const ship = useLoader(OBJLoader, boatObj, (loader) => {
    boatSkin.preload();
    loader.setMaterials(boatSkin);
  });

  const boatRef = useRef();
  var xRotSpeed = 0.001;

  useFrame(() => {
    if(xRotSpeed > 0 && boatRef.current.rotation.x > .09) {
      xRotSpeed = xRotSpeed * -1;
    } else if (xRotSpeed < 0 && boatRef.current.rotation.x < -.09) {
      xRotSpeed = xRotSpeed * -1;
    }
    boatRef.current.rotation.x += xRotSpeed;
    boatRef.current.rotation.y += xRotSpeed;
  });

  return (
    <primitive
      ref={boatRef}
      object={ship}
      material={boatSkin}
      scale={0.002}
      position={[-20 ,-21.8, -15]}
      rotation-y={2}/>
  );  
}

function LargeIsland() {
  const islandSkin = useLoader(MTLLoader, islandMat);
  const island = useLoader(OBJLoader, islandObj, (loader) => {
    islandSkin.preload();
    loader.setMaterials(islandSkin);
  });

  return (
    <primitive
      object={island}
      matrial={islandSkin}
      scale={0.15}
      rotation-y={3}
      position={[10, -82.5, 0]} />
  );
}

function PinkFloat() {
  return (
    <GLBModel />
  )
}

function SmallIsland() {
    const islandSkin2 = useLoader(MTLLoader, islandMat2);
    const island2 =  useLoader(OBJLoader, islandObj2, (loader) => {
        islandSkin2.preload();
        loader.setMaterials(islandSkin2);
    });

  return (
    <primitive 
      object={island2}
      matrial={islandSkin2}
      scale={0.05}
      rotation-y={0}
      position={[-45, -20, 0]} />
  );
}

export {
  Boat,
  SmallIsland,
  LargeIsland,
  PinkFloat
}
