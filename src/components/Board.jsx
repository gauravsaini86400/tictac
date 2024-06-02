import React, { useState } from "react";
import Cube from "./Cube";

const Board = () =>{
  const [state, setState] = useState(Array(9).fill(null));

  const [isXturn,setIsXturn] = useState(true); 
  
  const winnerCheck = () =>{
    const winningCondition = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let logic of winningCondition){
        const [a, b, c] = logic;
        if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
          // return true;
          return state[a];
        }
    }
    return false;
}
  const isWin = winnerCheck();
  
  const handleClick = (index) => {
    const copystate = [...state];
    copystate[index] = isXturn ? "X" : "O"  ;
    setState(copystate);
    setIsXturn(!isXturn);
   };
   const winner = winnerCheck()
   console.log(winner);


 return (
  <div className="container-row">

{winner?<>{winner} has won  <button>Play Again</button></>:<>
    
        <div className="board-row">
        <Cube onClick={()=>handleClick(0)} value={state[0]}/>
        <Cube onClick={()=>handleClick(1)}  value={state[1]}/>
        <Cube onClick={()=>handleClick(2)}  value={state[2]}/></div>

        <div className="board-row">
        <Cube onClick={()=>handleClick(3)}  value={state[3]}/>
        <Cube onClick={()=>handleClick(4)}  value={state[4]}/>
        <Cube onClick={()=>handleClick(5)}  value={state[5]}/>
        </div>

        <div className="board-row">
        <Cube onClick={()=>handleClick(6)}  value={state[6]}/>
        <Cube onClick={()=>handleClick(7)}  value={state[7]}/>
        <Cube onClick={()=>handleClick(8)}  value={state[8]}/>
        </div></>}
         </div>  
         
  );
};
export default Board;
