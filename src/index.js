import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './resources/css/app.css';
import Routes from './Routes';

const App = () => {
    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes/>
        </HashRouter>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));



