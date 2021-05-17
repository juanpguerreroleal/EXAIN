import React from "react";
import AddButton from "../shared/AddButton";
class Expenses extends React.Component{
    constructor(props){
        super(props)
        this.state = {expenses:[], isLoading:true};
    }
    componentDidMount(){
        fetch("https://testapp2.free.beeceptor.com/expenses") //Fake API
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            this.setState({expenses: result.expenses, isLoading: false}, ()=>{
            });
        },
        (error)=>{
            this.setState({expenses: [], isLoading: false});
        });
    }
    render(){
        if(this.state.isLoading){
            return <p>Loading...</p>;
        }else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4">Expenses</h1>
                        </div>
                        <div className="col-12">
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