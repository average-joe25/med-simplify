import { prependOnceListener } from "process";
import React from "react";
function edit(){

}
function Form(props){
    return <div className="forms"><textarea rows="18" cols="62" value="" placeholder={props.placeholder} onChange={edit()}/></div>;
}
export default Form;