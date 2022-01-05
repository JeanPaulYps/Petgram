import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

const List = styled.ul`
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    ${props => props.fixed && css`
    {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
    }
    `}
    padding: 0;
    scrollbar-width: none;  
    ${fadeIn()}
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Item = styled.li`
    padding: 0 8px;
`;

export { List, Item };
