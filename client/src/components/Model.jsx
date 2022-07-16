import React from "react"
import Form from "./form"
import Submit from "./submit"
function Model(){
    var [orgdata,edit]=React.useState("");
    var [newdata,update]=React.useState("");
    function getdata(){
        const data={data: orgdata};
        console.log(data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(data)
        };
        fetch("/data",requestOptions).then(response => {return response.json()}).then(data => update(data.value));
    }
    return (<section className="model" > 
        <div classNames="container">
            <div className="row">
                <div className="col-12 col-md-5 forms"><Form placeholder="Enter the Medical Absract HERE....." text={orgdata} edit={edit}/></div>
                <div className="col-12 col-md-2  forms"><Submit getdata={getdata}/></div>
                <div className="col-12 col-md-5 forms"><Form text={newdata} edit={update}/></div>
            </div>
        </div>
    </section>);
}
export default Model;