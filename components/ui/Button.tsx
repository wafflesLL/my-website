interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  padding?: number; // padding in px
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  padding = 4, // default 16px
  onClick,
  ...props
}) => {
  return (
    <button
      className={`border-[7px] border-[#00D9FF] font-montserrat text-7xl text-white hover:shadow-[0_0_20px_#00D9FF] rounded-[30px] margin ${className}`}
      style={{ paddingLeft: padding, paddingRight: padding, paddingTop: padding, paddingBottom: padding }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
