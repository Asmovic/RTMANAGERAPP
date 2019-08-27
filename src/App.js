import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyA2eIdlRILqQg76hI6dAbnOQGFB9AnB6pk",
            authDomain: "weather-240914.firebaseapp.com",
            databaseURL: "https://weather-240914.firebaseio.com",
            projectId: "weather-240914",
            storageBucket: "",
            messagingSenderId: "1026357099711",
            appId: "1:1026357099711:web:a82f55cfbdf25626"
        };

        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
export default App;

