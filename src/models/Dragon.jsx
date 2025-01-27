import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import dragonScene from '../assets/3d/dragon_flying.glb';

export default function Dragon(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(dragonScene)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="a37ae885434e4cbfb12582fda61a107fabccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group
                  name="Object_4"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup">
                    <mesh
                      name="s__White_Demon"
                      castShadow
                      receiveShadow
                      geometry={nodes.s__White_Demon.geometry}
                      material={materials.s__White_Demon}
                      morphTargetDictionary={nodes.s__White_Demon.morphTargetDictionary}
                      morphTargetInfluences={nodes.s__White_Demon.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_7"
                  position={[4.178, 13.221, 1.344]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_1">
                    <mesh
                      name="shield_knee"
                      castShadow
                      receiveShadow
                      geometry={nodes.shield_knee.geometry}
                      material={materials.shield_knee}
                      morphTargetDictionary={nodes.shield_knee.morphTargetDictionary}
                      morphTargetInfluences={nodes.shield_knee.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_10"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_2">
                    <mesh
                      name="1A"
                      castShadow
                      receiveShadow
                      geometry={nodes['1A'].geometry}
                      material={materials.material}
                      morphTargetDictionary={nodes['1A'].morphTargetDictionary}
                      morphTargetInfluences={nodes['1A'].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_13"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_3">
                    <mesh
                      name="A2"
                      castShadow
                      receiveShadow
                      geometry={nodes.A2.geometry}
                      material={materials.material_3}
                      morphTargetDictionary={nodes.A2.morphTargetDictionary}
                      morphTargetInfluences={nodes.A2.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_16"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_4">
                    <mesh
                      name="Object03"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object03.geometry}
                      material={materials.Object03}
                      morphTargetDictionary={nodes.Object03.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object03.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_19"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_5">
                    <mesh
                      name="Object05"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object05.geometry}
                      material={materials.Object05}
                      morphTargetDictionary={nodes.Object05.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object05.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_22"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_6">
                    <mesh
                      name="Object06"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object06.geometry}
                      material={materials.Object06}
                      morphTargetDictionary={nodes.Object06.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object06.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_25"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_7">
                    <mesh
                      name="Object08"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object08.geometry}
                      material={materials.Object08}
                      morphTargetDictionary={nodes.Object08.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object08.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_28"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_8">
                    <mesh
                      name="Object09"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object09.geometry}
                      material={materials.Object09}
                      morphTargetDictionary={nodes.Object09.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object09.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_31"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_9">
                    <mesh
                      name="Object10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object10.geometry}
                      material={materials.Object10}
                      morphTargetDictionary={nodes.Object10.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object10.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_34"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_10">
                    <mesh
                      name="Object11"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object11.geometry}
                      material={materials.Object11}
                      morphTargetDictionary={nodes.Object11.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object11.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_37"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_11">
                    <mesh
                      name="Object12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object12.geometry}
                      material={materials.Object12}
                      morphTargetDictionary={nodes.Object12.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object12.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_40"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_12">
                    <mesh
                      name="Object13"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object13.geometry}
                      material={materials.Object13}
                      morphTargetDictionary={nodes.Object13.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object13.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_43"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_13">
                    <mesh
                      name="Object15"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object15.geometry}
                      material={materials.Object15}
                      morphTargetDictionary={nodes.Object15.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object15.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_46"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_14">
                    <mesh
                      name="Object16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object16.geometry}
                      material={materials.Object16}
                      morphTargetDictionary={nodes.Object16.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object16.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_49"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_15">
                    <mesh
                      name="Object17"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object17.geometry}
                      material={materials.Object17}
                      morphTargetDictionary={nodes.Object17.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object17.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_52"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_16">
                    <mesh
                      name="Object18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object18.geometry}
                      material={materials.Object18}
                      morphTargetDictionary={nodes.Object18.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object18.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_55"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_17">
                    <mesh
                      name="Object19"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object19.geometry}
                      material={materials.Object19}
                      morphTargetDictionary={nodes.Object19.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object19.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_58"
                  position={[0.743, 0, -37.231]}
                  rotation={[-1.378, 0, 0]}
                  scale={0.7}>
                  <group name="Object_59" position={[0, 44.532, 0]}>
                    <group name="MorphMainGroup_18">
                      <mesh
                        name="yh_rd_long001"
                        castShadow
                        receiveShadow
                        geometry={nodes.yh_rd_long001.geometry}
                        material={materials.yh_rd_long001}
                        morphTargetDictionary={nodes.yh_rd_long001.morphTargetDictionary}
                        morphTargetInfluences={nodes.yh_rd_long001.morphTargetInfluences}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_62"
                  position={[0.743, 0, -37.231]}
                  rotation={[-1.378, 0, 0]}
                  scale={0.7}>
                  <group name="Object_63" position={[-0.242, -42.775, 97.265]}>
                    <group name="MorphMainGroup_19">
                      <mesh
                        name="yh_rd_long001_zuo"
                        castShadow
                        receiveShadow
                        geometry={nodes.yh_rd_long001_zuo.geometry}
                        material={materials.yh_rd_long001_zuo}
                        morphTargetDictionary={nodes.yh_rd_long001_zuo.morphTargetDictionary}
                        morphTargetInfluences={nodes.yh_rd_long001_zuo.morphTargetInfluences}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_66"
                  position={[0.743, 0, -37.231]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_67"
                    position={[-0.743, -37.231, 74.207]}
                    rotation={[-0.445, 0, -1.571]}>
                    <group name="Object_68" scale={0.839} />
                    <group
                      name="Object_69"
                      position={[76.833, -2.04, -8.484]}
                      rotation={[-0.012, 0.375, -0.041]}>
                      <group name="Object_70" scale={0.146} />
                      <group
                        name="Object_71"
                        position={[-0.487, 0, 0]}
                        rotation={[-1.571, 0, -Math.PI / 2]}>
                        <group name="Object_72" scale={[5.616, 13.929, 5.837]} />
                        <group
                          name="Object_73"
                          position={[2.584, -0.004, 0.001]}
                          rotation={[-0.255, 0.001, 0.128]}>
                          <group name="Object_74" scale={5.841} />
                          <group
                            name="Object_75"
                            position={[5.841, -0.005, 0.001]}
                            rotation={[-0.179, 0.105, -0.009]}>
                            <group name="Object_76" scale={5.841} />
                            <group
                              name="Object_77"
                              position={[5.842, -0.002, 0]}
                              rotation={[0, 0, 0.36]}>
                              <group name="Object_78" scale={[2.902, 10.458, 10.056]} />
                              <group
                                name="Object_79"
                                position={[0, 0.002, -1.297]}
                                rotation={[-1.327, -1.205, 1.746]}>
                                <group name="Object_80" scale={[3.802, 7.301, 5.616]} />
                                <group
                                  name="Object_81"
                                  position={[3.802, 0, 0]}
                                  rotation={[0.552, -0.899, 0.338]}>
                                  <group name="Object_82" scale={[8.609, 13.087, 19.374]} />
                                  <group
                                    name="Object_83"
                                    position={[8.609, 0, 0]}
                                    rotation={[0, 0, -0.949]}>
                                    <group name="Object_84" scale={[8.365, 16.512, 19.95]} />
                                    <group
                                      name="Object_85"
                                      position={[8.365, 0, 0]}
                                      rotation={[1.037, -0.313, 0.739]}>
                                      <group name="Object_86" scale={[3.056, 9.649, 5.701]} />
                                      <group
                                        name="Object_87"
                                        position={[2.608, 0.31, 1.312]}
                                        rotation={[1.625, -0.044, 3.063]}>
                                        <group name="Object_88">
                                          <group name="Object_89">
                                            <group name="TimeframeMainGroup">
                                              <group name="Object_91">
                                                <mesh
                                                  name="wpn_axe_88_0"
                                                  castShadow
                                                  receiveShadow
                                                  geometry={nodes.wpn_axe_88_0.geometry}
                                                  material={materials.wpn_axe}
                                                />
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                  <group
                                    name="Object_93"
                                    position={[-1.607, -1.466, 0.271]}
                                    rotation={[3.115, -1.014, -3.048]}>
                                    <group name="TimeframeMainGroup_1">
                                      <group name="Object_95">
                                        <mesh
                                          name="shield_shdr_92_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.shield_shdr_92_0.geometry}
                                          material={materials.shield_shdr}
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
                <group
                  name="Object_97"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_20">
                    <mesh
                      name="Object020"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object020.geometry}
                      material={materials.Object020}
                      morphTargetDictionary={nodes.Object020.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object020.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_100"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_21">
                    <mesh
                      name="Object021"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object021.geometry}
                      material={materials.Object021}
                      morphTargetDictionary={nodes.Object021.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object021.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_103"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_22">
                    <mesh
                      name="Object022"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object022.geometry}
                      material={materials.Object022}
                      morphTargetDictionary={nodes.Object022.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object022.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_106"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_23">
                    <mesh
                      name="Object023"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object023.geometry}
                      material={materials.Object023}
                      morphTargetDictionary={nodes.Object023.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object023.morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Object_109"
                  position={[-0.072, 24.868, 1.246]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="MorphMainGroup_24">
                    <mesh
                      name="Object024"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object024.geometry}
                      material={materials.Object024}
                      morphTargetDictionary={nodes.Object024.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object024.morphTargetInfluences}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dragon_flying.glb')
