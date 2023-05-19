/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

type DropdownProps = {
  active: string;
  list: string[];
  getDropdownValue: (item: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  active,
  list,
  getDropdownValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {active} %
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {list.map((item) => (
            <a onClick={() => getDropdownValue(item)} href="#" key={item}>
              {item} %
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
