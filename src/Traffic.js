import React, {useState} from 'react';



export const Traffic = () => {
    const [color, setColor] = useState("");

    return (<div className="main">
        <h1>Traffic Light With React</h1>
        <h3>Click on the Traffic Lights</h3>
        <div className="contenedor"></div>
        <div className="traffic-light">
            <div onClick={() => setColor("red")} className={"light red " +((color === "red") ? "glow" : "light red")}></div>
            <div onClick={() => setColor("yellow")} className={"light yellow " +((color === "yellow") ? "glow" : "light yellow")}></div>
            <div onClick={() => setColor("green")} className={"light green " +((color === "green") ? "glow" : "light green")}></div>
        </div>
            </div>
    );
};
export default Traffic;
