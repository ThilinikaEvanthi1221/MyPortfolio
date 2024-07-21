import React, { useCallback } from "react";
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const TestParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: '#ffffff' },
            move: { enable: true, speed: 1 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default TestParticles;
