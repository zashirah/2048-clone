import React, { useState } from "react";
import "./PlayingSurface.css";
import runUp from "./runUp.js"

function PlayingSurface() {
  const [tileValue00, updateTileValue00] = useState(4);
  const [tileValue01, updateTileValue01] = useState(null);
  const [tileValue02, updateTileValue02] = useState(null);
  const [tileValue03, updateTileValue03] = useState(null);
  const [tileValue10, updateTileValue10] = useState(2);
  const [tileValue11, updateTileValue11] = useState(null);
  const [tileValue12, updateTileValue12] = useState(null);
  const [tileValue13, updateTileValue13] = useState(null);
  const [tileValue20, updateTileValue20] = useState(4);
  const [tileValue21, updateTileValue21] = useState(null);
  const [tileValue22, updateTileValue22] = useState(null);
  const [tileValue23, updateTileValue23] = useState(null);
  const [tileValue30, updateTileValue30] = useState(null);
  const [tileValue31, updateTileValue31] = useState(null);
  const [tileValue32, updateTileValue32] = useState(null);
  const [tileValue33, updateTileValue33] = useState(null);

  return (
    <div>
      <button
        onClick={() => runUp(
          tileValue00,
          tileValue10,
          tileValue20,
          tileValue30,
          updateTileValue00,
          updateTileValue10,
          updateTileValue20,
          updateTileValue30
        )}
      >
        Up
      </button>
      <button>Down</button>
      <button>Left</button>
      <button>Right</button>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#a1a1a1",
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <div className="tile" value={tileValue00}>
          {tileValue00}
        </div>
        <div className="tile" value={tileValue01}>
          {tileValue01}
        </div>
        <div className="tile" value={tileValue02}>
          {tileValue02}
        </div>
        <div className="tile" value={tileValue03}>
          {tileValue03}
        </div>
        <div className="tile" value={tileValue10}>
          {tileValue10}
        </div>
        <div className="tile" value={tileValue11}>
          {tileValue11}
        </div>
        <div className="tile" value={tileValue12}>
          {tileValue12}
        </div>
        <div className="tile" value={tileValue13}>
          {tileValue13}
        </div>
        <div className="tile" value={tileValue20}>
          {tileValue20}
        </div>
        <div className="tile" value={tileValue21}>
          {tileValue21}
        </div>
        <div className="tile" value={tileValue22}>
          {tileValue22}
        </div>
        <div className="tile" value={tileValue23}>
          {tileValue23}
        </div>
        <div className="tile" value={tileValue30}>
          {tileValue30}
        </div>
        <div className="tile" value={tileValue31}>
          {tileValue31}
        </div>
        <div className="tile" value={tileValue32}>
          {tileValue32}
        </div>
        <div className="tile" value={tileValue33}>
          {tileValue33}
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default PlayingSurface;

// <Tile titleValue={tileValue00} value={tileValue00} />
//       <Tile titleValue={tileValue01} value={tileValue01} />
//       <Tile titleValue={tileValue02} value={tileValue02} />
//       <Tile titleValue={tileValue03} value={tileValue03} />
//       <Tile titleValue={tileValue10} value={tileValue10} />
//       <Tile titleValue={tileValue11} value={tileValue11} />
//       <Tile titleValue={tileValue12} value={tileValue12} />
//       <Tile titleValue={tileValue13} value={tileValue13} />
//       <Tile titleValue={tileValue20} value={tileValue20} />
//       <Tile titleValue={tileValue21} value={tileValue21} />
//       <Tile titleValue={tileValue22} value={tileValue22} />
//       <Tile titleValue={tileValue23} value={tileValue23} />
//       <Tile titleValue={tileValue30} value={tileValue30} />
//       <Tile titleValue={tileValue31} value={tileValue31} />
//       <Tile titleValue={tileValue32} value={tileValue32} />
//       <Tile titleValue={tileValue33} value={tileValue33} />

// {numArray1.map((number1) =>
//           numArray2.map((number2) => (
//             <Tile
//               key={`(${number1}, ${number2})`}
//               value={
//                 (number1 === 1 && number2 === 0) ||
//                 (number1 === 2 && number2 === 0)
//                   ? 2
//                   : null
//               }
//             />
//           ))
//         )}
