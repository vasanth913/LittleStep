import React from "react";
import ReactDOM from "react-dom";
import App  from './App.js';
import { Provider } from "react-redux";
import store from "src/redux/store";

const reactDomContainer = document.getElementById("react-dom-container");

const index = () => {
    return(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
    )
}

const rootComponent = index();

ReactDOM.render(rootComponent,reactDomContainer);