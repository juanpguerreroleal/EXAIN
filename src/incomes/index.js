import React from "react";
import AddButton from "../shared/AddButton";
class Incomes extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true, incomes: [], message: ""};
    }
    componentDidMount(){
        fetch("https://testapp2.free.beeceptor.com/incomes") //Fake API
        .then(response => response.json())
        .then((result) => {
            //console.log(result);
            var msg = result.incomes.length > 0 ? "" : "No hay ningun registro.";
            this.setState({incomes: result.incomes, isLoading: false, message: msg}, ()=>{
            });
        },
        (error)=>{
            //console.log(error);
            this.setState({incomes: [], isLoading: false, message:"Ocurrio un error conectandose al servicio"});
        });
    }
    render(){
        if(this.state.isLoading){
            return (
                <div>
                    <br/>
                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>);
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4">Incomes</h1>
                        </div>
                        <div className="col-12">
                            {this.state.incomes.length === 0 ? (<p>{this.state.message}</p>):null}
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <tbody>
                                    {this.state.incomes.map((item, index)=>{
                                        return (
                                        <tr key={index}>
                                            <td width="40%">
                                                {item.Name}
                                            </td>
                                            <td width="40%" className="income">
                                                - $ {item.Total}
                                            </td>
                                            <td width="20%">
                                                
                                            </td>
                                        </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <AddButton value="/incomes/add"/>
                </div>
                );
        }
    }
}
export default Incomes;