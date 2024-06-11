// @flow
import * as React from 'react';
import avatar from "../../assets/images/avatar.svg";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Header_styles';

export const Header = () => {
    return (
        <S.Header className="header">
                <FlexWrapper alignItems={'center'} justifyContent={'flex-end'} gap={'20px'}>
                    <span>Hello, Jo!</span>
                    <S.Image src={avatar} alt="avatar" />
                </FlexWrapper>
        </S.Header>
    );
};

