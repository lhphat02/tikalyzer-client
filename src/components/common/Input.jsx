import { sans } from '@/app/font';

/**
 * A reusable input component
 *
 * Props:
 * - `placeholder`: The placeholder text for the input field
 * - `value`: The value of the input field
 * - `type`: The type of the input field
 */

const Input = ({
  placeholder = 'Input',
  type = 'text',
  value,
  handleInputChange,
}) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="">
      <input
        className={`${sans.className} block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm appearance-none text-prim-text-light focus:outline-none focus:ring-prim-1 focus:border-prim-1`}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
