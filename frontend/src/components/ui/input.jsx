import { twMerge } from "tailwind-merge"

const Input = ({className, placeholder, maxLength, ...props}) => {
  return (
    <input 
      type="text"
      placeholder={placeholder}
      maxLength={maxLength} 
      className={twMerge("p-2 w-full outline-none text placeholder:text-secondary text-white", className)}
      {...props}
    />
  )
}

export default Input
