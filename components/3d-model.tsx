"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { MacBookPro } from "./3d-macbook-pro";

export default function Model() {
	const isMobile = useIsMobile();
	return (
		<Canvas camera={{ position: [0, 0, -30], fov: 0.5, near: 1 }} className="cursor-grab active:cursor-grabbing">
			{!isMobile && <OrbitControls enableZoom={false} />}
			<directionalLight intensity={0.5} position={[-5, -5, -5]} />
			<directionalLight intensity={0.5} position={[5, -5, -5]} />
			<directionalLight intensity={0.5} position={[-5, -5, 5]} />
			<directionalLight intensity={0.5} position={[5, -5, 5]} />
			<directionalLight intensity={0.5} position={[-5, 5, 5]} />
			<directionalLight intensity={0.5} position={[5, 5, 5]} />
			<Float floatIntensity={0.5} floatingRange={[-0.01, 0.01]} rotationIntensity={0.5} speed={1}>
				<Suspense>
					<MacBookPro />
				</Suspense>
			</Float>
		</Canvas>
	);
}
