import {
  FC,
  RefAttributes,
  SelectHTMLAttributes,
  forwardRef,
  useId
} from 'react'

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: {
    id: string
    value: string
    label: string
  }[]
}

const Select: FC<TSelectProps & RefAttributes<HTMLSelectElement>> = forwardRef(
  function SelectPrimitive({ id, label, options, ...props }, ref) {
    const default_id = useId()
    return (
      <div className='flex flex-col'>
        {label ? <label htmlFor={id ?? default_id}>{label}</label> : null}
        <select id={id ?? default_id} ref={ref} {...props}>
          {options.map(o => (
            <option key={o.id} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default Select
