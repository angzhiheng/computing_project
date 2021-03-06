import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reservation from './components/Reservation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              < Home />
            </Route>
            <Route path = "/reservation">
              < Reservation />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
