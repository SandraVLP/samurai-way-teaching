import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { S } from './Navigation_styles'

export const Navigation = () => {
    return (
        <nav className='nav' style={{flexShrink: '0', maxWidth: '200px', width: '100%'}}>
            <S.StyledUl>
                <S.StyledLi>
                    <S.StyledLink to='/profile'>Profile</S.StyledLink>
                </S.StyledLi>
                <S.StyledLi><S.StyledLink to='/dialogs'>Messages</S.StyledLink> </S.StyledLi>
                <S.StyledLi><S.StyledLink to='/news'>News</S.StyledLink> </S.StyledLi>
                <S.StyledLi><S.StyledLink to='/music'>Music</S.StyledLink> </S.StyledLi>
                <S.StyledLi><S.StyledLink to='/settings'>Settings</S.StyledLink> </S.StyledLi>
            </S.StyledUl>
        </nav>
    )
}
