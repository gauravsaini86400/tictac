
import React from "react";

const Cube = (props) => {
    return(
        <div onClick={props.onClick}
         style={{
            fontSize:"60px",
            color:"red",
            borderRadius:"10px",
            border:"1px solid",
            height:"100px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center" }}
         className="sqaure">
            <h5>{props.value}</h5>
        </div>
    );
};
export default Cube;
