import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Navigation} from "./layout/sections/Navigation/Navigation";
import {Profile} from "./layout/sections/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <ContentWrapper>
                <Navigation/>
                <Profile/>
            </ContentWrapper>
        </BrowserRouter>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`