import { FormikValues } from "formik";
import React from "react";

type Props = {
  value: string;
  designs: string;
  handleClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button = ({ value, designs, handleClick, type }: Props) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-blue-500 py-1.5 px-4 text-white ${designs}`}
    >
      {value}
    </button>
  );
};

export default Button;
