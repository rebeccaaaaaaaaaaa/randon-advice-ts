import styled from 'styled-components';

export const ButtonStyle = styled.button`
    border: unset;
    background: #08307b;
    padding: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease-in-out;
    font-size: 1rem;

    &:hover {
        background: #2557b5;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
`