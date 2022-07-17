import React from "react";
function Form(props){
    return <div>
            <form id={props.id}>
                <textarea rows="18" 
                cols="62" 
                value={props.text} 
                placeholder={props.placeholder} 
                onChange={(event)=>props.edit(event.target.value)}/>
            </form>
    </div>;
}
export default Form;