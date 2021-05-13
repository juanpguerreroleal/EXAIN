import React from "react";
class Dashboard extends React.Component{
    render(){
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            Chart
                        </div>
                        <div className="card-footer">
                            Expenses
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            Chart
                        </div>
                        <div className="card-footer">
                            Incomes
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            Chart
                        </div>
                        <div className="card-footer">
                            Balance
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
        );
    }
}
export default Dashboard;