// import Image from 'next/image'
"use client";

import { ButtonProps } from "@/types";

const Button = ({ title, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default Button;
