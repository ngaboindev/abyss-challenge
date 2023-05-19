import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

const zoomValues = [
  '25',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  '125',
  '150',
];

const Header = () => {
  const [zoomValue, setZoomValue] = useState('100');

  const getDropdownValue = (item: React.SetStateAction<string>) => {
    setZoomValue(item);
  };

  const handleZoomIn = () => {
    const currentIndex = zoomValues.indexOf(zoomValue);
    if (currentIndex < zoomValues.length - 1) {
      setZoomValue(zoomValues[currentIndex + 1]);
    }
  };

  const handleZoomOut = () => {
    const currentIndex = zoomValues.indexOf(zoomValue);
    if (currentIndex > 0) {
      setZoomValue(zoomValues[currentIndex - 1]);
    }
  };

  const resetTreeContainerPosition = () => {
    const draggableContainer = document.getElementById(
      'draggable-container'
    ) as any;
    if (draggableContainer) {
      draggableContainer.style.position = 'absolute';
      draggableContainer.style.top = '50%';
      draggableContainer.style.left = '50%';
      draggableContainer.style.transform = 'translate(-50%, -50%)';
    }
  };

  useEffect(() => {
    const zoomElement = document.getElementById('tree-wrapper') as any;
    if (zoomElement && zoomElement.style) {
      zoomElement.style.zoom = `${zoomValue}%`;
    }
  }, [zoomValue]);

  return (
    <div className="container padding-y-8 border-bottom border-b">
      <div className="row items-center justify-between">
        <h3 className="text-xl font-normal">
          Services <span className="badge">0</span>{' '}
        </h3>
        <div className="row gap-6">
          <button className="btn bg-secondary shadow-sm">list view</button>
          <button
            onClick={resetTreeContainerPosition}
            title="center position to center"
            className="btn bg-white shadow-sm"
          >
            <img className="w-6 h-6" src="/images/send.svg" alt="send icon" />
          </button>
          <div className="row zoom-container shadow-sm">
            <button onClick={handleZoomOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <div>
              <Dropdown
                active={zoomValue}
                list={zoomValues}
                getDropdownValue={getDropdownValue}
              />
            </div>
            <button onClick={handleZoomIn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
