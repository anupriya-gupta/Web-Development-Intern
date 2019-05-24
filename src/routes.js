import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";

import App from './containers/App';
import welcome from './containers/welcome/welcome';
import main from './containers/main/main';
import result from './containers/result/result';

export default (
    <HashRouter>
        <App>
            <Switch>
                <Route exact path="/" component={welcome} />
                <Route exact path="/main" component={main} />
                <Route exact path="/result" component={result} />
            </Switch>
        </App>
    </HashRouter>
);