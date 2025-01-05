import React from 'react';
import { MainTitle } from './components/MainTitle';
import { DescBox } from './components/DescBox';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/attachments/1005004943725449247/1325498147362967664/image_27.webp?ex=677c01d8&is=677ab058&hm=bada33236b3385fa498403885b8f5abd69afdb5b98f22c0aed09e9f42d7ee79a&')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay with slight dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <MainTitle />
        <DescBox />
      </div>
    </div>
  );
}

export default App;