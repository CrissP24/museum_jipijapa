import { Loader, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Experience } from "../components/Experience";
import { Overlay } from "../components/Overlay";
import { usePlay } from "../contexts/play";
import { Suspense, useMemo } from "react";

function SlideShow() {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.2} />
      </EffectComposer>
    ),
    []
  );

const barStyles = {
  backgroundColor: '#abaadd',
}

const containerStyles = {
  backgroundColor: 'gray'

};


  return (
    <div className="slideShow">

      <Canvas>
        <Suspense>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
        </Suspense>
      </Canvas>
      <Loader barStyles={barStyles} containerStyles={containerStyles}  />
      <Overlay />
    </div>
  );
}

export default SlideShow;
