import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase } from './firebase';

const App = (props) => {
    return (
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
            <Routes {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})



