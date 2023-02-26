import { useState } from 'react';
import Input from './Input';
import { ntc as namedColors } from './NameColor';
import Button from './Button';

export default function AddColor({ bgColors, setBgColors, isLightBg }) {
  const [colorName, setcolorName] = useState('');
  const [hexCode, sethexCode] = useState('');
  const isValidHexCode = (hexCode) => /^#([0-9A-F]{3}){1,2}$/i.test(hexCode);

  return (
    <div className="add-color-btn-container">
      <Input
        placeholder="Color"
        value={colorName}
        onInput={(e) => setcolorName(e.target.value)}
      />
      <Input
        placeholder="Hex Code"
        value={hexCode}
        onInput={(e) => {
          const hexCode = e.target.value;
          const isHexAvailable = Object.values(bgColors).some(
            (value) => value === hexCode
          );
          const assignedColor = Object.keys(bgColors).find(
            (key) => bgColors[key] === hexCode
          );
          sethexCode(hexCode);
          if (colorName === '' && isHexAvailable) {
            setcolorName(assignedColor);
          } else if (isValidHexCode(hexCode)) {
            setcolorName(namedColors.name(hexCode)[1]);
          } else {
            setcolorName('');
          }
        }}
      />
      <Button
        isDisable={!isValidHexCode(hexCode)}
        isLightBg={isLightBg}
        btnText="Add"
        onCLickEventHandler={() => {
          setBgColors({ ...bgColors, [colorName]: hexCode });
          setcolorName('');
          sethexCode('');
        }}
      />
    </div>
  );
}
