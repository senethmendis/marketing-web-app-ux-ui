import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Laptop({ scale, rotation, position }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/asus_tuf_dash_f15_laptop.glb"
  );
  const { actions } = useAnimations(animations, group);

  return (
    <group
      name="RootNode"
      rotation={rotation}
      scale={scale}
      position={position}
    >
      <group
        name="laptop"
        position={[0, 1.74, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group
        name="Armature"
        position={[-5.7, 1.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <group name="Object_6">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="Object_9"
            geometry={nodes.Object_9.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Object_9.skeleton}
          />
          <group
            name="Object_8"
            position={[0, 1.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/asus_tuf_dash_f15_laptop.glb");
