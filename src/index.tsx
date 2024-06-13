import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Theme} from "./styles/Theme";
import {BrowserRouter} from "react-router-dom";
import AppStart from './AppStart';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <AppStart/>
            <GlobalStyles/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);