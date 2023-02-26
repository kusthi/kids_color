import { useContext } from 'react';
import { inputClassNameContext } from './Contexts';
import { textTypeContext } from './Contexts';

export default function Input({ placeholder, value, onInput }) {
  const className = useContext(inputClassNameContext);
  const type = useContext(textTypeContext);

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onInput}
    />
  );
}
