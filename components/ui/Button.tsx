// components/ui/Button.tsx
import * as React from "react";

type Common = {
  padding?: number;          // px
  className?: string;
  children?: React.ReactNode;
};

// Anchor variant
type AnchorProps = Common &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
    href: string;
  };

// Native button variant
type NativeButtonProps = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
  };

type ButtonProps = AnchorProps | NativeButtonProps;

export const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      padding = 4,
      ...rest
    } = props as ButtonProps & { padding?: number };

    const base =
      "border-[7px] border-[#00D9FF] font-montserrat text-7xl text-white " +
      "hover:shadow-[0_0_20px_#00D9FF] rounded-[30px] margin";

    const style = {
      paddingLeft: padding,
      paddingRight: padding,
      paddingTop: padding,
      paddingBottom: padding,
    } as const;

    if ("as" in props && props.as === "a") {
      const aProps = rest as Omit<AnchorProps, "padding">;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`${base} ${className}`}
          style={style}
          {...aProps}
        >
          {children}
        </a>
      );
    }

    const btnProps = rest as Omit<NativeButtonProps, "padding">;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={`${base} ${className}`}
        style={style}
        {...btnProps}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

