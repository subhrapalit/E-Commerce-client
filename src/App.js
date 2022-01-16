
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
