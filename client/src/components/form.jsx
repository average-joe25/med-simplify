import React from "react";
function Form(props){
    return <div className="forms">
                <textarea rows="18" 
                cols="62" 
                value={props.text} 
                placeholder={props.placeholder} 
                onChange={(event)=>props.edit(event.target.value)}/>
    </div>;
}
export default Form;