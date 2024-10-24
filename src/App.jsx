import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive Into", text2:"What You Love"},
    {text1:"Indulge", text2:"Your Passions"},
    {text1:"Give In To", text2:"Your Passions"}
  ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
      setInterval(() => {
        setHeroCount(count => {return count===2 ? 0: count +1})
      }, 3000);
    },[])
  return (
    <div>
      <Background 
      playStatus= {playStatus} 
      heroCount= {heroCount}
      />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
      />
    </div>
  )
}

export default App;