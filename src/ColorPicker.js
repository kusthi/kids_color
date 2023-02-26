import { useState } from 'react';
import Button from './Button';

export default function ColorPicker({
  bgColors,
  setBgColors,
  setBgColorKey,
  isLightBg,
  isOnlyDropDown,
}) {
  const [colorKeyToRemove, setColorKeyToRemove] = useState(
    Object.keys(bgColors)[0]
  );
  const isOnlyOneColor = Object.keys(bgColors).length === 1;

  return (
    <div
      className={
        isOnlyDropDown
          ? 'color-picker-container remove-color-container'
          : 'color-picker-container'
      }>
      {!isOnlyDropDown ? (
        <label htmlFor="color-picker">{'Pick a color:'}</label>
      ) : null}
      <select
        className={
          isLightBg === true
            ? 'decor-btn-input docor-border'
            : 'decor-btn-input'
        }
        name="color-picker"
        id="color-picker"
        onChange={
          !isOnlyDropDown
            ? (e) => setBgColorKey(e.target.value)
            : (e) => setColorKeyToRemove(e.target.value)
        }>
        {Object.keys(bgColors).map((bgColorKey) => (
          <option key={bgColorKey}>{bgColorKey}</option>
        ))}
      </select>
      {isOnlyDropDown ? (
        <Button
          isDisable={isOnlyOneColor}
          isLightBg={isLightBg}
          btnText="Remove"
          onCLickEventHandler={(e) =>
            onRemoveColor(
              colorKeyToRemove,
              bgColors,
              setBgColors,
              setColorKeyToRemove,
              setBgColorKey
            )
          }
        />
      ) : null}
    </div>
  );
}

function onRemoveColor(
  colorKey,
  bgColors,
  setBgColors,
  setColorKeyToRemove,
  setBgColorKey
) {
  let clonedBgColors = { ...bgColors };
  delete clonedBgColors[colorKey];
  const defaultColor = Object.keys(clonedBgColors)[0];
  setBgColors(clonedBgColors);
  setColorKeyToRemove(defaultColor);
  setBgColorKey((bgColorKey) =>
    colorKey === bgColorKey ? defaultColor : bgColorKey
  );
}
