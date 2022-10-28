import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from '../pages/index/index';
import Details from '../pages/details/details';
import Insert from '../pages/insert/insert';
import Update from '../pages/update/update';
import Delete from '../pages/delete/delete';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Index} />
            <Route path = "/produto/:id" component={Details} />
            <Route path = "/criarproduto" component={Insert} />
            <Route path = "/editarproduto/:id" component={Update} />
            <Route path = "/deletarproduto/:id" component={Delete} />
        </Switch>
    </BrowserRouter>
)

export default Routes;