import { Loader, Sky } from "@react-three/drei";
import { Suspense } from "react";
import { StandardReality, LostWorld, Model,Physics  } from "spacesvr";

export default function VrShow () {

    const playerProps = {
        speed: 1.25, 
        controls: {
          disableGyro: true, 
        },
      };

      const EnvironmentProps = {
        name: 'MUSEO RA',
      };

    return (
        <div>
        <StandardReality playerProps={playerProps} environmentProps={EnvironmentProps}   >
            <Sky/>
            <ambientLight/>
            <Model
            src="./models/airplane/museumvr.glb" // Replace with the path to your floor model file
            scale={[0.5, 0.5, 0.5]} // Adjust the scale of the floor model as per your needs
            position={[0, 0.3, 0]} // Adjust the position of the floor model to be below the player
            physics={{ type: "Dynamic", mass: 10 }} // Set the physics properties of the floor model to make it static
            />
        </StandardReality>
      </div>
    )
}