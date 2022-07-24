import React from "react"
import Form from "./form"
import Submit from "./submit"
function Model(){
    const [orgdata,edit]=React.useState("");
    var [newdata,update]=React.useState("");
    function getdata(){;
        const abstractdata={data: orgdata}
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(abstractdata)
        };
        fetch("/data",requestOptions).then(response => {return response.json()}).then(data => update(data.value));
    }
    return (<section className="model" > 
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 col-lg-5 forms"><Form id="userInputData" placeholder="Enter the Medical Absract HERE.....  " text={orgdata} edit={edit}/></div>
                <div className="col-12 col-md-2 col-lg-2  forms"><Submit getdata={getdata}/></div>
                <div className="col-12 col-md-5 col-lg-5 forms"><Form id="serverOutputData" placeholder="NOTE: Due to using free Heroku deployment of api, first call to api may take sometime, Since api goes to sleep after 20 mins of Inactivity."text={newdata} edit={update}/></div>
            </div>
        </div>
    </section>);
}
export default Model;