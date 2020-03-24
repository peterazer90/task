import React from 'react';
import './App.css';
import Main from './Templates/Main';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignOut from "./Modules/Sign-Out";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/sign-out'} component={SignOut}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
