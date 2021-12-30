import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    padding: 0;
    scrollbar-width: none;  
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Item = styled.li`
    padding: 0 8px;
`;

export { List, Item };
