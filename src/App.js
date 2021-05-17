import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard';
import {Link, Route, Switch} from 'react-router-dom';
import Expenses from './expenses/index';
import Incomes from './incomes/index';
import AddExpense from './expenses/add';
import AddIncome from './incomes/add';

function App() {
  return (
    <div className="App">
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
        </div>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/expenses/index" component={Expenses}/>
          <Route path="/incomes/index" component={Incomes}/>
          <Route path="/expenses/add" component={AddExpense}/>
          <Route path="/incomes/add" component={AddIncome}/>
        </Switch>
    </div>
  );
}

export default App;
