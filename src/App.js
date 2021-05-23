import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Expenses from './expenses/index';
import Incomes from './incomes/index';
import AddExpense from './expenses/add';
import AddIncome from './incomes/add';
import React from 'react';
import Login from './account/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isAuthenticated:false};
  }
  componentDidMount(){
    this.setState({isAuthenticated: false});
  }
  render(){
    return (
      <div className="App">
        {this.state.IsAuthenticated ? (
        <div className="horizontal-nav">
            <div className="horizontal-nav-item">
            <Link to="/dashboard">Home</Link>
            </div>
            <div className="horizontal-nav-item">
            <Link to="/expenses/index">Expenses</Link>
            </div>
            <div className="horizontal-nav-item">
            <Link to="/incomes/index">Incomes</Link>
            </div>
          </div>) : (<Redirect to="/account/login"/>)}
          <Switch>
            <Route exact path="/" render={()=>{
              return (<Redirect to="/dashboard" />);
            }}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/expenses/index" component={Expenses}/>
            <Route path="/incomes/index" component={Incomes}/>
            <Route path="/expenses/add" component={AddExpense}/>
            <Route path="/incomes/add" component={AddIncome}/>
            <Route path="/account/login" component={Login}/>
          </Switch>
      </div>
    );
  }
}

export default App;
