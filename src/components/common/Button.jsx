import { sans } from '@/app/font';

/**
 * A reusable button component
 *
 * Props:
 * - `children`: The text to display on the button
 * - `type`: The type of the button
 * - `variant`: The variant of the button
 * - `disabled`: Whether the button is disabled
 * - `handleClick`: The function to call when the button is clicked
 *
 * Variants:
 * - `primary`: A primary button
 * - `secondary`: A secondary button
 */
const Button = ({ children, onClick, className, outline, disabled }) => {
  return (
    <button
      className={[
        className,
        sans.className,
        outline ? 'btn-outline' : 'btn',
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
// Path: src/components/common/Button.jsx
