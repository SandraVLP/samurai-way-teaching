// @flow
import * as React from 'react';
import avatar from "../../assets/images/avatar.svg";
import {FlexWrapper} from "../../components/FlexWrapper";
import { Sh } from './Header_styles';

export const Header = () => {
    return (
        <Sh.Header className="header">
                <FlexWrapper alignItems={'center'} justifyContent={'flex-end'} gap={'20px'}>
                    <span>Hello, Jo!</span>
                    <Sh.Image src={avatar} alt="avatar" />
                </FlexWrapper>
        </Sh.Header>
    );
};

