"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";

// --- Button Component Types ---
interface ButtonProps {
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  id?: string;
  'data-testid'?: string;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

// --- Button Component ---
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      borderRadius = "1.75rem",
      children,
      containerClassName,
      borderClassName,
      duration,
      className,
      onClick,
      disabled,
      type = "button",
      style,
      ...rest
    },
    ref
  ) => {
    const buttonStyle = {
      borderRadius,
      ...style,
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...rest}
        className={cn(
          "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
          containerClassName
        )}
        style={buttonStyle}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(
                "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
                borderClassName
              )}
            />
          </MovingBorder>
        </div>

        <div
          className={cn(
            "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
            className
          )}
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          {children}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

// --- Link Button Component (for when you need an anchor) ---
interface LinkButtonProps {
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      borderRadius = "1.75rem",
      children,
      containerClassName,
      borderClassName,
      duration,
      className,
      href,
      target,
      rel,
      style,
      onClick,
      ...rest
    },
    ref
  ) => {
    const linkStyle = {
      borderRadius,
      ...style,
    };

    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...rest}
        className={cn(
          "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1 inline-block",
          containerClassName
        )}
        style={linkStyle}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(
                "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
                borderClassName
              )}
            />
          </MovingBorder>
        </div>

        <div
          className={cn(
            "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
            className
          )}
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          {children}
        </div>
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";

// --- Moving Border Types ---
interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
}

// --- Moving Border Component ---
export const MovingBorder: React.FC<MovingBorderProps> = ({
  children,
  duration = 2000,
  rx,
  ry,
  className,
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={cn("absolute h-full w-full", className)}
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

