import { FC, InputHTMLAttributes, RefAttributes, forwardRef } from 'react'

export type TInputProps = InputHTMLAttributes<HTMLInputElement>

const Input: FC<TInputProps & RefAttributes<HTMLInputElement>> = forwardRef(
  function InputPrimitive({ className, type = 'text', ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        className={`border border-slate-500 rounded px-2 ${className}`}
        {...props}
      />
    )
  }
)

export default Input
