
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/dashboard' component={Dashboard} exact/>
      </Switch>
    </div>
  );
};

export default App;
