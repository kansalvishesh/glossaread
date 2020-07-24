import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './container/login';

const app = (

        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
