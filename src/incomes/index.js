import React from "react";
import AddButton from "../shared/AddButton";
class Incomes extends React.Component{
    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Incomes</h1>
                </div>
                <div className="col-12">
                    <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td width="40%">
                                    Test
                                </td>
                                <td width="40%" className="income">
                                    + $12,000.00
                                </td>
                                <td width="20%">
                                    
                                </td>
                            </tr>
                            <tr>
                                <td width="40%">
                                    Test 2
                                </td>
                                <td width="40%" className="income">
                                    + $1,000.00
                                </td>
                                <td width="20%">
                                    
                                </td>
                            </tr>
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
export default Incomes;