import { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="m-2 px-4 py-2 rounded bg-blue-500 text-white disabled:cursor-default disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;