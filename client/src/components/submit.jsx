import React from "react";
function Submit(props){
    return <div id="button" >
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={props.getdata}>Organize</button>
    </div>
}
export default Submit;