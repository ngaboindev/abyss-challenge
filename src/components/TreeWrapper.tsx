import React, { useState } from 'react';
import DraggableDiv from './DraggableDiv';

type Node = {
  value: string;
  children: Node[];
  isEdit: boolean;
};

const Tree: React.FC = () => {
  const [root, setRoot] = useState<Node>({
    value: 'Category',
    children: [],
    isEdit: false,
  });

  const addNode = (parent: Node) => {
    const newNode: Node = {
      value: '',
      children: [],
      isEdit: true,
    };
    parent.children.push(newNode);
    setRoot({ ...root });
  };

  const deleteNode = (parent: Node, index: number) => {
    parent.children.splice(index, 1);
    setRoot({ ...root });
  };

  const editNode = (node: Node, value: string) => {
    node.value = value;
    node.isEdit = false;
    setRoot({ ...root });
  };

  const toggleEdit = (node: Node) => {
    node.isEdit = !node.isEdit;
    setRoot({ ...root });
  };

  const handleChange = (
    node: Node,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    node.value = event.target.value;
    setRoot({ ...root });
  };

  const renderTree = (
    node: Node,
    parent: Node | null = null,
    index: number = 0,
    isFirstParent: boolean = true,
    level: number = 0
  ) => {
    // Define the background colors based on the level
    let backgroundColor = '';
    if (level === 1) {
      backgroundColor = '#FFAD81';
    } else if (level === 2) {
      backgroundColor = '#1EBEE4';
    } else {
      backgroundColor = '#B7C5CE';
    }

    return (
      <li key={index}>
        <div className="main-category">
          <div
            className="main-category-container"
            style={{
              backgroundColor: isFirstParent ? 'white ' : backgroundColor,
              color: !isFirstParent ? 'white ' : 'black',
            }}
          >
            {node.isEdit ? (
              <input
                type="text"
                autoFocus
                value={node.value}
                onChange={(event) => handleChange(node, event)}
                className="tree-input"
              />
            ) : (
              <div className="category-item">{node.value}</div>
            )}
          </div>
          <div className="category-buttons row">
            {!node.isEdit ? (
              <>
                {!isFirstParent && (
                  <button
                    className="small_rounded_button"
                    onClick={() => toggleEdit(node)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </button>
                )}
                <button
                  className="small_rounded_button"
                  onClick={() => addNode(node)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </>
            ) : (
              !isFirstParent && (
                <>
                  <button
                    className="small_rounded_button"
                    onClick={() => editNode(node, node.value)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </button>
                  <button
                    className="small_rounded_button"
                    onClick={() => toggleEdit(node)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </>
              )
            )}
            {!isFirstParent && (
              <button
                className="small_rounded_button bg-danger"
                onClick={() => deleteNode(parent!, index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {node.children.length > 0 && (
          <ul>
            {node.children.map((child, idx) =>
              renderTree(child, node, idx, false, level + 1)
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* @ts-ignore */}
      <DraggableDiv>
        <div className="container">
          <div className="row" id="tree-wrapper">
            <div className="tree">
              <ul>{renderTree(root, null, 0, true)}</ul>
            </div>
          </div>
        </div>
      </DraggableDiv>
    </>
  );
};

export default Tree;
