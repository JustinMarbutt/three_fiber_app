import { useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
// import { FlyControls } from "@react-three/drei";
import { Boat, LargeIsland, SmallIsland } from "./Models";
import { Tetra, Ball, Box } from "./Shapes";
import Ocean from "./Ocean";
import './App.css';

function Scene() {
  useThree(({camera}) => {
    camera.position.z = -80;
  });

  return (
    <group>
        {/* <FlyControls /> */}
        <OrbitControls  minAzimuthAngle={-3} />
        <Stars saturation={0} count={400} speed={0.5}/>
        <ambientLight intensity={0.15} />
        <directionalLight color="white" position={[-25, 15, -5]} />
        <directionalLight color="white" position={[20, 20, 22]} />
        <directionalLight color="white" position={[35, 0, -5]} />
        <Box />
        <Ball />
        <Tetra />
        <Boat />
        <SmallIsland />
        <LargeIsland />
        <Ocean />
        <Sky />
    </group>
  );
}

export default Scene;
