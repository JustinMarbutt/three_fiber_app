import { Canvas } from '@react-three/fiber';
import Scene from "./Scene";
import './App.css';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <color attach="background" args={['#222']} />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
