import { sans } from '@/app/font';
import React, { useState, useRef, useEffect } from 'react';

const TxtBtnDropdown = ({
  label,
  options,
  onSelect,
  isActive,
  dropdownWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClick = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={[
          sans.className,
          'transition-colors hover:text-prim-1 min-w-4',
          isActive ? 'text-prim-1' : 'text-slate-300',
          isOpen ? 'underline underline-offset-2' : '',
        ].join(' ')}
        onClick={toggleDropdown}
      >
        {label}
      </button>
      {isOpen && (
        <ul
          className="absolute right-0 z-50 overflow-hidden bg-white rounded-sm shadow-md top-12"
          style={{ width: dropdownWidth }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="px-5 py-4 cursor-pointer text-prim-1 hover:bg-gray-100"
              onClick={() => handleClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TxtBtnDropdown;
