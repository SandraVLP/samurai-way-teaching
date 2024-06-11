import styled from 'styled-components';
import {CSSProperties} from 'react';

type FlexWrapperPropsType = {
    flexDirection?: CSSProperties['flexDirection']
    justifyContent?: CSSProperties['justifyContent']
    alignItems?: CSSProperties['alignItems']
    flexWrap?: CSSProperties['flexWrap']
    gap?: CSSProperties['gap']
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  gap: ${props => props.gap || undefined};
`
