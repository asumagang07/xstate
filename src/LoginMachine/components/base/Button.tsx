import { FC, RefAttributes, forwardRef } from "react";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
  function ButtonPrimitive({ className, type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        className={`bg-blue-500 text-white px-2 rounded ${className}`}
        type={type}
        {...props}
      />
    );
  }
);

export default Button;
