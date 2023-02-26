export default function Button({
  isDisable,
  isLightBg,
  btnText,
  onCLickEventHandler,
}) {
  return (
    <button
      disabled={isDisable}
      style={{
        color: isDisable ? '#808080' : isLightBg ? '#F5F5F5' : '#000',
      }}
      className={
        isLightBg === true
          ? 'btn-decor decor-black-btn'
          : 'btn-decor decor-white-btn'
      }
      onClick={onCLickEventHandler}>
      {btnText}
    </button>
  );
}
