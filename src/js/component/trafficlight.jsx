import React, {useState, useEffect } from "react"; 
import "../../styles/trafficlight.css"; 

const Trafficlight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);

    return <>
    <div className="container">
        <div className="row d-flex">
            <div className="col align-item-center">
                <div className={!redOn ? "red" : "red on" }
                 onClick={
                    () => {setRedOn(!redOn) 
                        setGreenOn(false) 
                        setYellowOn(false)}
                    }></div>

                <div className={!yellowOn ? "yellow" : "yellow on" }
                 onClick={
                    () => {setYellowOn(!yellowOn) 
                        setGreenOn(false) 
                        setRedOn(false)
                    }}></div>

                <div className={!greenOn ? "green" : "green on" }
                 onClick={
                    () => {setGreenOn(!greenOn)
                        setRedOn(false)
                        setYellowOn(false)}
                        }></div>
            </div>
        </div>
    </div>
    </>


}
export default Trafficlight; 