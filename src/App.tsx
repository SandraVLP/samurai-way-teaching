import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Navigation} from "./layout/sections/Navigation/Navigation";
import {Profile} from "./layout/sections/Profile/Profile";
import styled from "styled-components";


function App() {
    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Navigation/>
                <Profile/>
            </ContentWrapper>
        </div>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`