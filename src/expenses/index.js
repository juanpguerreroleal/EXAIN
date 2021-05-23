import React from "react";
import AddButton from "../shared/AddButton";
class Expenses extends React.Component{
    constructor(props){
        super(props)
        this.state = {expenses:[], isLoading:true, message: ""};
    }
    componentDidMount(){
        fetch("https://testapp2.free.beeceptor.com/expenses") //Fake API
        .then(response => response.json())
        .then((result) => {
            var msg = result.expenses.length > 0 ? "" : "There's not a single expense entry.";
            this.setState({expenses: result.expenses, isLoading: false, message: msg}, ()=>{
            });
        },
        (error)=>{
            this.setState({expenses: [], isLoading: false, message:"Something went wrong"});
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
        }else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4">Expenses</h1>
                        </div>
                        <div className="col-12">
                            {this.state.expenses.length === 0 ? (<p>{this.state.message}</p>):null}
                            <div className="table-responsive">
                            <table className="table table-hover">
                                <tbody>
                                    {this.state.expenses.map((item, index)=>{
                                        return (
                                        <tr key={index}>
                                            <td width="40%">
                                                {item.Name}
                                            </td>
                                            <td width="40%" className="expense">
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
                    <AddButton value="/expenses/add"/>
                </div>
            );   
        }
    }
}
export default Expenses;