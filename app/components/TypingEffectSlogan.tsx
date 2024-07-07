// app/components/TypingEffect.tsx

'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffect: React.FC = () => {
  return (
    <h2 className="text-2xl font-bold mb-4">
      Let 
      <span className="text-pink-500 font-extrabold"> Elio       
      </span> 
      <Typewriter
          words={[' help u prep and outsmart your chess opponent overnight!']}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
     
    </h2>
  );
};

export default TypingEffect;
