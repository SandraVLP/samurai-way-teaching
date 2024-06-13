import * as React from "react";
import { Profile } from "./layout/sections/Profile/Profile";
import styled from "styled-components";
import { Sh } from "./layout/header/Header_styles";
import { FlexWrapper } from "./components/FlexWrapper";
import avatar from "./assets/images/avatar.svg";
import { Sn } from "./layout/sections/Navigation/Navigation_styles";

function AppStart() {
  return (
    <div>
      <Sh.Header className="header">
        <FlexWrapper
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={"20px"}
        >
          <span>Hello, Jo!</span>
          <Sh.Image src={avatar} alt="avatar" />
        </FlexWrapper>
      </Sh.Header>
      <ContentWrapper>
        <Sn.Nav>
          <Sn.Ul>
            <Sn.Li>
              <Sn.Link to="/profile">Profile</Sn.Link>
            </Sn.Li>
            <Sn.Li>
              <Sn.Link to="/dialogs">Messages</Sn.Link>
            </Sn.Li>
            <Sn.Li>
              <Sn.Link to="/news">News</Sn.Link>
            </Sn.Li>
            <Sn.Li>
              <Sn.Link to="/music">Music</Sn.Link>
            </Sn.Li>
            <Sn.Li>
              <Sn.Link to="/settings">Settings</Sn.Link>
            </Sn.Li>
          </Sn.Ul>
        </Sn.Nav>
        <Profile />
      </ContentWrapper>
    </div>
  );
}

export default AppStart;

const ContentWrapper = styled.div`
  display: flex;
`;
