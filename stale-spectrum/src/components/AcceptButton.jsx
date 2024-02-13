import { useState } from 'react'

export default function AcceptButton() {
    const [AcceptSize, setAcceptSize] = useState(100);
    const [DeclineSize, setDeclineSize] = useState(100);
    const [AcceptHidden, setAcceptHidden] = useState(true);

    return (
        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center", width: "100%", flexDirection: "column"}}>
            <button onClick={() => {setAcceptHidden(false)}} style={{fontSize: (AcceptSize / 10).toString() + "rem", backgroundColor: 'green', width: AcceptSize.toString() + "%", height: AcceptSize.toString() + "%" }}>Yes</button>
            {DeclineSize > 0?<button onClick={() => {setAcceptSize(AcceptSize + 5);setDeclineSize(DeclineSize - 5)}} style={{fontSize: (DeclineSize / 10).toString() + "rem", backgroundColor: 'red', width: DeclineSize.toString() + "%", height: DeclineSize.toString() + "%" }}>No</button>:<p></p>}
            {AcceptHidden? <p></p> : <p>Yay!</p>}
        </div>
    )
}