import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App.jsx';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from'./pages/cadastro/video/index.jsx';
import CadastroCategoria from './pages/cadastro/categoria/index.jsx';


const Pagina404 = () => (<div>Error 404</div>)
//ou
//<Route component={() => (<div>Página 404</div>)} />

ReactDOM.render(
  <BrowserRouter>
  <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/cadastro/video" component={CadastroVideo} />
     <Route path="/cadastro/categoria" component={CadastroCategoria} />
     <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);


