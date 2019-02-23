import React, { useEffect } from 'react';

const handleMouseMove = ({ clientX, clientY }) => {
  console.log('MOVING MOUSE');
  console.info({
    clientX,
    clientY,
  });
};

const Demo = () => {
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log('UNMOUNTED!');
    };
  });

  return <div children={'I am the demo component'} />;
};

export default Demo;
