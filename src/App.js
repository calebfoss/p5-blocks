import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const p5methods = require("./p5methods");
p5methods.modules.Foundation = require("./foundation");

function App() {
  const [dragItem, setDragItem] = useState(null);
  return (
    <div className="App">
      <Sketch />
      <MethodSelector setDragItem={setDragItem} />
      {dragItem}
    </div>
  );
}

function Sketch() {
  const [tree, setTree] = useState([
    {
      module: "Foundation",
      name: "function",
      overload: 0,
      params: ["setup", undefined],
      children: [],
    },
    {
      module: "Foundation",
      name: "function",
      overload: 0,
      params: ["draw", undefined],
      children: [],
    },
  ]);
  const setBlock = (idx, newBlock) => {
    const newTree = [...tree.slice(0, idx), newBlock, ...tree.slice(idx + 1)];
    setTree(newTree);
  };
  const removeBlock = (idx) => {
    const newTree = [...tree.slice(0, idx), ...tree.slice(idx + 1)];
    setTree(newTree);
  };
  return (
    <div className="Sketch">
      {tree.map((block, i) => (
        <Block
          block={block}
          key={`Sketch_${i}`}
          setBlock={(newBlock) => setBlock(i, newBlock)}
          removeBlock={() => removeBlock(i)}
        />
      ))}
    </div>
  );
}

function Block(props) {
  const { module, name, overload, params, children } = props.block;
  const handleParamChange = (idx, val) => {
    const newParams = [...params.slice(0, idx), val, ...params.slice(idx + 1)];
    const newBlock = { ...props.block, ...{ params: newParams } };
    props.setBlock(newBlock);
  };
  return (
    <div className="Block">
      <h1>{name}</h1>
      <button onClick={props.removeBlock}>X</button>
      {p5methods.modules[module].methods[name].overloads[overload]?.map(
        (param, i) => (
          <div key={`Block_${i}`}>
            {param.name}
            <input
              type="text"
              value={params[i]}
              onChange={(e) => handleParamChange(i, e.target.value)}
            />
          </div>
        )
      )}
    </div>
  );
}

function DragItem(props) {
  const [[top, left], setPosition] = useState([props.startY, props.startX]);
  document.onmouseup = () => {
    props.setDragItem(null);
    document.onmousemove = null;
  };
  document.onmousemove = (e) => {
    e.preventDefault();
    setPosition([e.clientY, e.clientX]);
  };
  return (
    <div className="Drag-Item" style={{ top, left }}>
      <h2>{props.method}</h2>
    </div>
  );
}

function MethodSelector(props) {
  return (
    <div className="Method-Selector">
      {Object.keys(p5methods.modules).map((module) => (
        <div className="Module" key={module}>
          <h2>{module}</h2>
          <div className="Methods">
            {Object.keys(p5methods.modules[module].methods).map((method) => (
              <div
                key={method}
                onMouseDown={(e) => {
                  props.setDragItem(
                    <DragItem
                      method={method}
                      setDragItem={props.setDragItem}
                      startX={e.clientX}
                      startY={e.clientY}
                    />
                  );
                }}
              >
                <h3>{method}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
