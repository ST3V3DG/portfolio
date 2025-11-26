"use client";

import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type { Group, Mesh, MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Object_12: Mesh;
		Object_14: Mesh;
		Object_16: Mesh;
		Object_20: Mesh;
		Object_22: Mesh;
		Object_24: Mesh;
		Object_26: Mesh;
		Object_28: Mesh;
		Object_30: Mesh;
		Object_32: Mesh;
		Object_35: Mesh;
		Object_37: Mesh;
		Object_40: Mesh;
		Object_42: Mesh;
		Object_44: Mesh;
		Object_48: Mesh;
		Object_50: Mesh;
		Object_53: Mesh;
		Object_55: Mesh;
		Object_57: Mesh;
		Object_59: Mesh;
		Object_62: Mesh;
		Object_64: Mesh;
		Object_67: Mesh;
		Object_69: Mesh;
		Object_71: Mesh;
		Object_73: Mesh;
		Object_75: Mesh;
		Object_77: Mesh;
		Object_79: Mesh;
		Object_83: Mesh;
		Object_85: Mesh;
		Object_87: Mesh;
		Object_89: Mesh;
		Object_91: Mesh;
		Object_94: Mesh;
		Object_96: Mesh;
		Object_98: Mesh;
		Object_100: Mesh;
		Object_103: Mesh;
		Object_105: Mesh;
		Object_107: Mesh;
		Object_109: Mesh;
		Object_111: Mesh;
	};
	materials: {
		zNRfbdNyoCOxSDD: MeshStandardMaterial;
		HdeQgqDhVRltuvQ: MeshStandardMaterial;
		MTVWTmEddByGzeA: MeshStandardMaterial;
		gGmExFByNnyrwMm: MeshStandardMaterial;
		GdPtFLZURIXFHzu: MeshStandardMaterial;
		cFRLiGCORrjAihr: MeshStandardMaterial;
		TMkvtqywJDMvuJf: MeshStandardMaterial;
		jgUGvZiSIPFNFGe: MeshStandardMaterial;
		GzMrvkTsmRxvOJz: MeshStandardMaterial;
		IqdrVPEOaZqbHHo: MeshStandardMaterial;
		HzlgDKVNnMxfNgM: MeshStandardMaterial;
		vJOGifqMXcmlCkF: MeshStandardMaterial;
		XvtJEVWVvyDeJRR: MeshStandardMaterial;
		ItKEDAaOJloGKSH: MeshStandardMaterial;
		xEcnbqMzoZoLkIZ: MeshStandardMaterial;
		YMmdfGRsPviDXYd: MeshStandardMaterial;
		kMkIQgtfAZdmtyc: MeshStandardMaterial;
		sqkqSXQCeccDMmm: MeshStandardMaterial;
		utAQarMJnpKrQeb: MeshStandardMaterial;
		waAAeDqzqDLObIi: MeshStandardMaterial;
		quuXrfeUujYrUMo: MeshStandardMaterial;
		WiyOPYJEeiHNVjF: MeshStandardMaterial;
		KtCwfhzYtafEPLg: MeshStandardMaterial;
		uHOYziIuFeQJbIX: MeshStandardMaterial;
		DthpMXUDOFLFvyk: MeshStandardMaterial;
		pKaDkdyuuvylYHt: MeshPhysicalMaterial;
		ZtrFkpzRROyZncn: MeshStandardMaterial;
		HlQwFCAPWzetDQy: MeshPhysicalMaterial;
	};
};

export function MacBookPro() {
	const groupRef = useRef<Group>(null);
	const { nodes, materials } = useGLTF("/3d/macbook_pro_14-inch_m5.glb") as unknown as GLTFResult;

	useGSAP(() => {
		const matchMedia = gsap.matchMedia();

		if (!groupRef.current) {
			return;
		}

		groupRef.current?.position.setY(-0.12);
		groupRef.current.rotation.x = -Math.PI / 10;
		groupRef.current.rotation.y = (7 * Math.PI) / 8;
		// groupRef.current.rotation.z = Math.PI  / 2;

		matchMedia.add("(width < 48rem)", () => {
			groupRef.current?.position.setX(-0.02);
		});

		matchMedia.add("(width >= 48rem and width < 96rem)", () => {
			groupRef.current?.position.setX(-0.08);
		});

		matchMedia.add("(width >= 96rem)", () => {
			groupRef.current?.position.setX(-0.07);
		});
	});

	return (
		<group dispose={null} ref={groupRef}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group
								name="Macbook_Pro_14-inch_with_M5_chip_70"
								rotation={[Math.PI / 2, 0, 0]}
								scale={0.01}
							>
								<group name="waMYZXDBsTMmEKJ_66">
									<group name="aGSRqpYfPawohwC_65">
										<group name="mwiGwYKZgWcRLpA_64">
											<group name="RLwgnNOowTrdeJe_63">
												<group name="nIhhmAXgzOpXafM_62">
													<group name="EhCmdLAMoLoXcIA_43">
														<group name="FvGEnEvuZnIYqyp_6">
															<group name="AQdtiiJfiakvCKx_3">
																<mesh
																	name="Object_12"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_12.geometry}
																	material={materials.zNRfbdNyoCOxSDD}
																/>
															</group>
															<group name="cdsXAgNBwwCPrIE_4">
																<mesh
																	name="Object_14"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_14.geometry}
																	material={materials.HdeQgqDhVRltuvQ}
																/>
															</group>
															<group name="UcEDhfwzyyGMEfj_5">
																<mesh
																	name="Object_16"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_16.geometry}
																	material={materials.HdeQgqDhVRltuvQ}
																/>
															</group>
														</group>
														<group name="IpwuofAPXOMsmPZ_22">
															<group name="fXrcyGzvHNSlBLQ_14">
																<group name="DmUcWNXfiLPcftc_7">
																	<mesh
																		name="Object_20"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_20.geometry}
																		material={materials.MTVWTmEddByGzeA}
																	/>
																</group>
																<group name="ELAWKPIQpGuqYuU_8">
																	<mesh
																		name="Object_22"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_22.geometry}
																		material={materials.gGmExFByNnyrwMm}
																	/>
																</group>
																<group name="FmsrGmNZGtSredn_9">
																	<mesh
																		name="Object_24"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_24.geometry}
																		material={materials.GdPtFLZURIXFHzu}
																	/>
																</group>
																<group name="jbtMEbemwaBHRTw_10">
																	<mesh
																		name="Object_26"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_26.geometry}
																		material={materials.cFRLiGCORrjAihr}
																	/>
																</group>
																<group name="jfSniDGKVWZvpyG_11">
																	<mesh
																		name="Object_28"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_28.geometry}
																		material={materials.MTVWTmEddByGzeA}
																	/>
																</group>
																<group name="lZDBMTdjXPebUMa_12">
																	<mesh
																		name="Object_30"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_30.geometry}
																		material={materials.TMkvtqywJDMvuJf}
																	/>
																</group>
																<group name="ZroMGzfQtHrkgUh_13">
																	<mesh
																		name="Object_32"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_32.geometry}
																		material={materials.jgUGvZiSIPFNFGe}
																	/>
																</group>
															</group>
															<group name="NdoIIpIgKlxPTfz_17">
																<group name="bckGBpxpLXNHmCa_15">
																	<mesh
																		name="Object_35"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_35.geometry}
																		material={materials.GzMrvkTsmRxvOJz}
																	/>
																</group>
																<group name="JXvTyELxHLGtnWp_16">
																	<mesh
																		name="Object_37"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_37.geometry}
																		material={materials.IqdrVPEOaZqbHHo}
																	/>
																</group>
															</group>
															<group name="qqmofOnqPjYsIyG_21">
																<group name="cpUmMDYlGqLEAMt_18">
																	<mesh
																		name="Object_40"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_40.geometry}
																		material={materials.gGmExFByNnyrwMm}
																	/>
																</group>
																<group name="sIzFavpnYbDfLWk_19">
																	<mesh
																		name="Object_42"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_42.geometry}
																		material={materials.IqdrVPEOaZqbHHo}
																	/>
																</group>
																<group name="sonZrhRIQDlQHcy_20">
																	<mesh
																		name="Object_44"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_44.geometry}
																		material={materials.HzlgDKVNnMxfNgM}
																	/>
																</group>
															</group>
														</group>
														<group name="mMyKMaJsxcwrUng_31">
															<group name="bnFlgnXJnnasBEO_25">
																<group name="aBJxhjUzVIkBmJN_23">
																	<mesh
																		name="Object_48"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_48.geometry}
																		material={materials.vJOGifqMXcmlCkF}
																	/>
																</group>
																<group name="mTDvrHXNRqkIrBd_24">
																	<mesh
																		name="Object_50"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_50.geometry}
																		material={materials.XvtJEVWVvyDeJRR}
																	/>
																</group>
															</group>
															<group name="dgOopkNnsSitEyA_27">
																<group name="fVNvUQeYMdbMNOA_26">
																	<mesh
																		name="Object_53"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_53.geometry}
																		material={materials.ItKEDAaOJloGKSH}
																	/>
																</group>
															</group>
															<group name="IJeReHnhQHJFtgB_28">
																<mesh
																	name="Object_55"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_55.geometry}
																	material={materials.xEcnbqMzoZoLkIZ}
																/>
															</group>
															<group name="lzNeOaWQWAReGok_29">
																<mesh
																	name="Object_57"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_57.geometry}
																	material={materials.XvtJEVWVvyDeJRR}
																/>
															</group>
															<group name="WZqbfOdYdlPMpRs_30">
																<mesh
																	name="Object_59"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_59.geometry}
																	material={materials.XvtJEVWVvyDeJRR}
																/>
															</group>
														</group>
														<group name="OucmWDpZOXgCmvo_41">
															<group name="CFihWZPNFpzuzyX_32">
																<mesh
																	name="Object_62"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_62.geometry}
																	material={materials.YMmdfGRsPviDXYd}
																/>
															</group>
															<group name="qbFEMXRbwPWbFTN_33">
																<mesh
																	name="Object_64"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_64.geometry}
																	material={materials.HdeQgqDhVRltuvQ}
																/>
															</group>
															<group name="rbiPrRNIGgpEEwq_39">
																<group name="bzDyZTvUFAEJLcq_34">
																	<mesh
																		name="Object_67"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_67.geometry}
																		material={materials.kMkIQgtfAZdmtyc}
																	/>
																</group>
																<group name="dAVNlHAHYLbkxrB_35">
																	<mesh
																		name="Object_69"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_69.geometry}
																		material={materials.sqkqSXQCeccDMmm}
																	/>
																</group>
																<group name="EBRhBFNqcMTaWWv_36">
																	<mesh
																		name="Object_71"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_71.geometry}
																		material={materials.utAQarMJnpKrQeb}
																	/>
																</group>
																<group name="LsmCMkPRBVEEGpg_37">
																	<mesh
																		name="Object_73"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_73.geometry}
																		material={materials.waAAeDqzqDLObIi}
																	/>
																</group>
																<group name="wyClPAIazRlKQnt_38">
																	<mesh
																		name="Object_75"
																		castShadow
																		receiveShadow
																		geometry={nodes.Object_75.geometry}
																		material={materials.quuXrfeUujYrUMo}
																	/>
																</group>
															</group>
															<group name="WzbwnVztmigkRgn_40">
																<mesh
																	name="Object_77"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_77.geometry}
																	material={materials.WiyOPYJEeiHNVjF}
																/>
															</group>
														</group>
														<group name="rFquJMQWzuecHQa_42">
															<mesh
																name="Object_79"
																castShadow
																receiveShadow
																geometry={nodes.Object_79.geometry}
																material={materials.gGmExFByNnyrwMm}
															/>
														</group>
													</group>
													<group name="RcexTyyhpuJYATQ_61">
														<group name="BKdCktpcxjmcfhA_49">
															<group name="eFpSjyrDhTgtyuf_44">
																<mesh
																	name="Object_83"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_83.geometry}
																	material={materials.KtCwfhzYtafEPLg}
																/>
															</group>
															<group name="LBeBZdkKmrJVhJd_45">
																<mesh
																	name="Object_85"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_85.geometry}
																	material={materials.gGmExFByNnyrwMm}
																/>
															</group>
															<group name="MwJmMcLbTBwQpxl_46">
																<mesh
																	name="Object_87"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_87.geometry}
																	material={materials.uHOYziIuFeQJbIX}
																/>
															</group>
															<group name="OCxZAMeEkQKexHA_47">
																<mesh
																	name="Object_89"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_89.geometry}
																	material={materials.gGmExFByNnyrwMm}
																/>
															</group>
															<group name="XodVrcYKiUPGCmX_48">
																<mesh
																	name="Object_91"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_91.geometry}
																	material={materials.DthpMXUDOFLFvyk}
																/>
															</group>
														</group>
														<group name="fdAtTYoaXvPUisV_54">
															<group name="JNlPAPsywCtwJrd_50">
																<mesh
																	name="Object_94"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_94.geometry}
																	material={materials.vJOGifqMXcmlCkF}
																/>
															</group>
															<group name="KjpcUkkMjGYeXkV_51">
																<mesh
																	name="Object_96"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_96.geometry}
																	material={materials.HdeQgqDhVRltuvQ}
																/>
															</group>
															<group name="UEFeUEhkJPdlgXF_52">
																<mesh
																	name="Object_98"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_98.geometry}
																	material={materials.IqdrVPEOaZqbHHo}
																/>
															</group>
															<group name="xiLiwJHfkqIwaTs_53">
																<mesh
																	name="Object_100"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_100.geometry}
																	material={materials.pKaDkdyuuvylYHt}
																/>
															</group>
														</group>
														<group name="JySHOmMobJSAPQv_59">
															<group name="LQtuXuSGFKsUXjP_55">
																<mesh
																	name="Object_103"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_103.geometry}
																	material={materials.gGmExFByNnyrwMm}
																/>
															</group>
															<group name="nAIWMiVEtSYdjdZ_56">
																<mesh
																	name="Object_105"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_105.geometry}
																	material={materials.ZtrFkpzRROyZncn}
																/>
															</group>
															<group name="tfTbkkzhxqpKRgC_57">
																<mesh
																	name="Object_107"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_107.geometry}
																	material={materials.HlQwFCAPWzetDQy}
																/>
															</group>
															<group name="WyuoVWKMOcOlXJM_58">
																<mesh
																	name="Object_109"
																	castShadow
																	receiveShadow
																	geometry={nodes.Object_109.geometry}
																	material={materials.IqdrVPEOaZqbHHo}
																/>
															</group>
														</group>
														<group name="QSjoCOCzvxPnLpK_60">
															<mesh
																name="Object_111"
																castShadow
																receiveShadow
																geometry={nodes.Object_111.geometry}
																material={materials.gGmExFByNnyrwMm}
															/>
														</group>
													</group>
												</group>
											</group>
										</group>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/3d/macbook_pro_14-inch_m5.glb");
