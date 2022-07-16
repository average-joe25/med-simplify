import React from "react"
import Form from "./form"
import Submit from "./submit";
function Model(){
    return (<section className="model" > 
        <div classNames="container">
            <div className="row">
                <div className="col-12 col-md-5 forms"><Form placeholder="Enter the Medical Absract HERE....."/></div>
                <div className="col-12 col-md-2  forms"><Submit/></div>
                <div className="col-12 col-md-5 forms"><Form/></div>
            </div>
        </div>
    </section>);
}
export default Model;