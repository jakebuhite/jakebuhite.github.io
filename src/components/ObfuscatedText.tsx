import React, { useEffect, useState } from 'react';

const ObfuscatedText: React.FC = () => {
  const [obfuscatedText, setObfuscatedText] = useState('');
  const [originalText] = useState('Jake Buhite');

  const getRandom = (len: number): string => {
    return new Array(len + 1).join('2');
  };

  const Gen = () => {
    const length = originalText.length;
    return getRandom(length);
  };

  const parser = (NUarray: string[]) => {
    let counter = 0;
    const OGarray = originalText.split('');

    NUarray = NUarray.map((value, index) => {
      if (value === '0' || value === OGarray[index] || isNaN(Number(value))) {
        return OGarray[index];
      } else {
        return String(Math.round(Math.random() * 9));
      }
    });

    if (NUarray.join('') === OGarray.join('')) { return true; }

    counter += 1;
    return NUarray.join('');
  };

  const Genletters = (stringToChange: string): string => {
    const stringArray = stringToChange.split('');
    const result = parser(stringArray);
    return result === true ? originalText : result as string;
  };

  useEffect(() => {
    let genNum = Gen();
    setObfuscatedText(genNum);

    const interval = setInterval(() => {
      genNum = Genletters(genNum);
      setObfuscatedText(genNum);

      if (genNum === originalText) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [originalText]);

  return <h1>{obfuscatedText}</h1>;
};

export default ObfuscatedText;