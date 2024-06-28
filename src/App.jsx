import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from './components/Background/Background';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';



const App = () => {
  const heroData = [
    { text1: "Revolutionary", text2: "Utility" },
    { text1: "Innovative", text2: "Strength" },
    { text1: "Streamlined", text2: "Elegance" },
    { text1: "Cyber", text2: "Dream" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      {!playStatus && (
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      )}
    </div>
  );
};

export default App;
