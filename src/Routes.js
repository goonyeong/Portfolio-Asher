import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from 'Pages/Home';
import Watchup from 'Pages/Watchup';
import Portfolio from 'Pages/Portfolio';
import Tada from 'Pages/Tada';
import Police from 'Pages/Police';

const RouterComponent = () => {
    return(
        <Router>
            <Route path="/" component={Home}></Route>
            <Route path="/watchup" component={Watchup}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/tada" component={Tada}></Route>
            <Route path="/police" component={Police}></Route>
            <Redirect to="/" />
        </Router>
    )
}

export default RouterComponent;