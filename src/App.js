import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeNavbar from './components/HomeNavbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import AddContact from './pages/AddContact'
import DetailContact from './pages/DetailContact'
import store from "./store/reducers"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HomeNavbar/>
        <Switch>
          <Route exact component={Home} path="/"/>
          <Route component={AddContact} path="/addContact"/>
          <Route component={DetailContact} path="/contact/:id"/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
