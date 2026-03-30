function Button({ className, children }) {
  return (
    <button 
      type="button" 
      className={`cursor-pointer w-full max-w-100 h-14 rounded-[28px] inset-shadow-[0_-3px_rgba(0,0,0,0.15)] 
      text-white font-semibold text-[20px] leading-base tracking-[0.5px] ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;