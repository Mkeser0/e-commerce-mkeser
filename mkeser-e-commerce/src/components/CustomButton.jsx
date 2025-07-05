import React from "react";

export default function CustomButton({ text, bgColor = "#23A6F0", onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[24px] text-white rounded-md w-[221px] h-[62px]"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
}
