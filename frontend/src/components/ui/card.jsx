import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Card = forwardRef(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn(
        "relative border border-border-dark",
        className // 🔹 Adds the `className` dynamically
      )}
      {...props} // 🔹 Spreads additional props
    />
  )
);

Card.displayName = "Card"; // 🔹 Helps with debugging

export { Card };