import React from "react";
import InputField from "../shared/InputField";
import SaveButton from "../shared/SaveButton";

class AddIncome extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: "", quantity: 0};
    }
    setInputValue(input){
        let newState = this.state;
        switch(input.name){
            case "Nombre":
                newState.name = input.value;
                break;
            case "Cantidad":
                newState.quantity = input.value;
                break;
            default:
                break;
        }
        this.setState(newState);
    }
    handleSubmit = (e) => {
        var data = new FormData(e.target);
        console.log(data);
        e.preventDefault();
        //API call
    }
    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setInputValue({ name: name, value: value});
    }
    render(){
        return (
            <div className="add">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4">Add income</h1>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                <InputField
                                    label="Nombre"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={this.state.nombre}
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                <InputField
                                    label="Cantidad"
                                    onChange={this.handleChange}
                                    type="number"
                                    value={this.state.nombre}
                                />
                            </div>
                        </div>
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                <SaveButton/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
    };
}
export default AddIncome;