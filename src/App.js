import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';
import { Switch,Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
