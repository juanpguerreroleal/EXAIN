import React from "react";
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-react-charts";
class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.expensesData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        this.expensePrimaryxAxis = { valueType: 'Category' };
        this.expenseTooltip = {enable:true};
        this.expenseMarker = { visible: true, width: 10, height: 10 };
    }
    render(){
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <ChartComponent id="expenses_chart" height="300px" primaryXAxis={this.expensePrimaryxAxis} tooltip={this.expenseTooltip}>
                                <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
                                <SeriesCollectionDirective>
                                    <SeriesDirective dataSource={this.expensesData} xName='month' yName='sales' name='Sales' marker={this.expenseMarker}/>
                                </SeriesCollectionDirective>
                            </ChartComponent>
                        </div>
                        <div className="card-footer">
                            Expenses
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <ChartComponent id="incomes_chart" height="300px"/>
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
                            <ChartComponent id="balance_chart" height="300px"/>
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