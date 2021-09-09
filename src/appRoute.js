
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Todo from './components/Todo';




const appRouting = () => {
    return (
        <Router>
            <div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Todo}></Route>
                        <Route exact path="/todo" component={Todo}></Route>
                       
                        
                    </Switch>
                </div>

            </div>

        </Router >
    )
}

export default appRouting;