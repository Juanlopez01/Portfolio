import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";
const BgParticles = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
       loadFull(engine);
    }, []);

    return (
            <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
            />
    );
};
export default BgParticles