
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Template from './Template/Template';

function App() {
  return (
    <Template>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </BrowserRouter>
    </Template>
  );
}

export default App;
