export default function VectorDrawer(){
    return(
        <div className="main">
            <div className="canvas"></div>
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