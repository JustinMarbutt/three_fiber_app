import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Tetra = () => {
  const tetraRef = useRef();

  useFrame(() => {
    tetraRef.current.rotation.y += 0.005;
    tetraRef.current.rotation.x -= 0.005;
  });

  return (
    <mesh ref={tetraRef} position={[-2.5, 2, 0]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * .85} rotation-z={Math.PI * .05}>
      <tetrahedronBufferGeometry/>
      <meshStandardMaterial color="green"  />
    </mesh>
  )
}

const Ball = () => {
    const ballRef = useRef();
    var xSpeed = 0.01;

    useFrame(() => {
        if(xSpeed > 0 && ballRef.current.position.x > 5) {
        xSpeed = xSpeed * -1;
        } else if (xSpeed < 0 && ballRef.current.position.x < -3) {
        xSpeed = xSpeed * -1;
        }
        ballRef.current.position.x += xSpeed;
        ballRef.current.position.z += xSpeed;
    });

    return (
        <mesh ref={ballRef} position={[2,2,0]}>
        <sphereBufferGeometry />
        <meshStandardMaterial color={"red"} />
        </mesh>
    )
}

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
    boxRef.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={boxRef} position={[0,0,0]}  rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};
  

export {
  Ball,
  Tetra,
  Box
};
