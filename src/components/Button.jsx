import { useState } from "react";

const Button = ({
  text,
  customStyles,
  isIcon,
  icon,
  purpleBorder,
  background,
  isShadow,
}) => {
  const backgroudnStyle = "bg-gradient-to-l bg-purple-400 from-purple-800";

  return (
    <button
      className={`  w-[190px] flex border  items-center justify-center px-2 py-3 rounded-full gap-3 ${customStyles} ${
        purpleBorder && `border-purple-600 border `
      } ${background && backgroudnStyle}   ${
        isShadow && `hover:shadow-purple-500 shadow-lg`
      }`}
    >
      {isIcon && <img src={icon} alt="icon" className="w-5" />}

      {text}
    </button>
  );
};

export default Button;

//
