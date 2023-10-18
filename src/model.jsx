import React, { useEffect, useRef } from 'react';
import 'aframe';

const model = () => {
  const cameraRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key === 'ArrowUp') {
        // Move forward when the 'Up' arrow key is pressed
        cameraRef.current.object3D.translateZ(-0.1);
      } else if (key === 'ArrowDown') {
        // Move backward when the 'Down' arrow key is pressed
        cameraRef.current.object3D.translateZ(0.1);
      } else if (key === 'ArrowLeft') {
        // Rotate left when the 'Left' arrow key is pressed
        cameraRef.current.object3D.rotateY(0.1);
      } else if (key === 'ArrowRight') {
        // Rotate right when the 'Right' arrow key is pressed
        cameraRef.current.object3D.rotateY(-0.1);
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="model">
      <a-scene>
        <a-sky color="#6EBAA7"></a-sky>

        {/* 3D Model */}
        <a-entity
          ref={cameraRef}
          gltf-model="https://puvanesh07.github.io/Interaktive_Files/building.glb"
          scale="0.5 0.5 0.5"
          position="0 1 -5"
          rotation="0 180 0"
        ></a-entity>

        {/* Camera with Mouse Orbit Controls */}
        <a-entity camera orbit-controls look-controls wasd-controls position="0 1.6 0"></a-entity>
      </a-scene>
    </div>
  );
};

export default model;
