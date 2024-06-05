import { sans } from '@/app/font';

/**
 * A reusable text button component for links
 *
 * Props:
 * - `href`: The URL to link to
 * - `disabled`: Whether the button is disabled
 * - `customStyle`: Custom styles to apply to the button
 */
const TextButton = ({ children, href, disabled, isActive = false }) => {
  return (
    <a
      className={[
        sans.className,
        'transition-colors hover:text-prim-1',
        isActive ? 'text-prim-1 font-semibold' : 'text-gray-400',
      ].join(' ')}
      disabled={disabled}
      href={href}
    >
      {children}
    </a>
  );
};

export default TextButton;
