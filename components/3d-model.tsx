"use client";

// import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MacBookPro } from "./3d-macbook-pro";
import { OrbitControls } from "@react-three/drei";

export default function Model() {
	return (
		<Canvas camera={{ position: [0, 0, -30], fov: 0.5, near: 1 }} className="size-full *:size-full lg:row-start-1">
			<OrbitControls />
			<ambientLight intensity={0.5} />
			<directionalLight />
			{/*<meshBasicMaterial />*/}
			{/*<Environment>
        
      </Environment>*/}
			<Suspense>
				<MacBookPro />
			</Suspense>
		</Canvas>
	);
}
