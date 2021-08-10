import {useEffect, useRef} from 'react'
export default function VectorDrawer(){
    const containerRef = useRef();
    useEffect(()=>{
        const elem = containerRef.current;
        //let canvasChildren = containerRef.current.children;
        let cell;
        let k = 16;
        for(let i = 0; i < 17 ; i++){
            for(let j = 0 ; j < 25 ; j++){
                cell = document.createElement("p");
                cell.setAttribute("class","cell");
                cell.innerHTML = ".";
                elem.appendChild(cell);
                if(j === 0){
                    cell.innerHTML = i+k;
                    cell.style.color = "red";
                    cell.style.fontWeight = "normal";
                    k-=2;
                }
                if(i === 16){
                    cell.innerHTML = j;
                    cell.style.color = "red";
                    cell.style.fontWeight = "normal";
                    
                }
            }
        }
    });
    return(
        <div className="main">
            <div className="canvas">
                <div className="grid-border" ref={containerRef}></div>
            </div>
            <div className="control-container">
                <p className="from">From:</p>
                <label className="from-x">x:</label>
                <input type="number" className="from-x-input" />
                <label className="from-y">y:</label>
                <input type="number" className="from-y-input" />

                <p className="to">To:</p>
                <label className="to-x">x:</label>
                <input type="number" className="to-x-input" />
                <label className="to-y">y:</label>
                <input type="number" className="to-y-input" />

                <button className="btn">Draw</button>
            </div>
        </div>
    )
}