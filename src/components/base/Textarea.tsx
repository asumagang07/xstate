import { FC, RefAttributes, TextareaHTMLAttributes, forwardRef } from 'react'

export type TTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: FC<TTextAreaProps & RefAttributes<HTMLTextAreaElement>> =
  forwardRef(function TextAreaPrimitive(
    { cols = 30, rows = 10, className, ...props },
    ref
  ) {
    return (
      <textarea
        ref={ref}
        cols={cols}
        rows={rows}
        className={`border border-slate-500 rounded px-2 ${className}`}
        {...props}
      />
    )
  })

export default TextArea
