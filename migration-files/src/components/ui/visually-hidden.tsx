import * as React from "react";

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className="absolute h-px w-px p-0 overflow-hidden whitespace-nowrap border-0"
        style={{
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(100%)",
          margin: "-1px",
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
