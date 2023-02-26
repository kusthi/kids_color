import './styles.css';
import { useState } from 'react';
import Header from './Header';
import ColorPicker from './ColorPicker';
import AddColor from './AddColor';
import tinycolor from 'tinycolor2';

export default function App() {
  const [bgColors, setBgColors] = useState({
    'Pearl White': '#FBFCF8',
    Black: '#000',
  });
  const [bgColorKey, setBgColorKey] = useState('Pearl White');
  const bgColor = bgColors[bgColorKey];
  const isLightBg = tinycolor(bgColor).isLight();

  return (
    <div
      className="App"
      style={{
        backgroundColor: bgColor,
        color: isLightBg === true ? '#000' : '#F5F5F5',
      }}>
      <Header />
      <ColorPicker
        bgColors={bgColors}
        setBgColors={setBgColors}
        setBgColorKey={setBgColorKey}
        isLightBg={isLightBg}
        isOnlyDropDown={false}
      />
      <AddColor
        bgColors={bgColors}
        setBgColors={setBgColors}
        isLightBg={isLightBg}
      />
      <ColorPicker
        bgColors={bgColors}
        setBgColors={setBgColors}
        setBgColorKey={setBgColorKey}
        isLightBg={isLightBg}
        isOnlyDropDown={true}
      />
    </div>
  );
}
