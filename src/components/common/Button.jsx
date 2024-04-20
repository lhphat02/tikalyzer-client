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
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  disabled,
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={[
        sans.className,
        'py-2 px-4 rounded-md font-medium shadow-sm flex items-center justify-center transition-colors gap-2',
        variant === 'primary' && 'bg-prim-1 text-white hover:bg-prim-2',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-700 hover:bg-gray-300',
        disabled && 'opacity-50 cursor-not-allowed bg-gray-200',
      ].join(' ')}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
