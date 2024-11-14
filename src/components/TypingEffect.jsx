import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 150; // Speed of typing (ms per character)

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, [text]);

  return <h2 className="text-3xl lg:text-4xl font-semibold">{displayedText}</h2>;
};

export default TypingEffect;
