import React, { useRef } from 'react';

type DraggableDivProps = {
  children: React.ReactNode;
};

const DraggableDiv: React.FC<DraggableDivProps> = ({ children }) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  const dragMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const elmnt = draggableRef.current;
    if (elmnt) {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;

      // @ts-ignore

      function elementDrag(e: MouseEvent) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // @ts-ignore
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        // @ts-ignore
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }

      // @ts-ignore
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  };

  return (
    <div
      ref={draggableRef}
      id="draggable-container"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        id="mydivheader"
        style={{ cursor: 'move' }}
        onMouseDown={dragMouseDown}
      >
        {children}
      </div>
    </div>
  );
};

export default DraggableDiv;
