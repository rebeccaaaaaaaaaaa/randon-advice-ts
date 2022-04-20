import styled from 'styled-components';

export const CardWrapper = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 420px;

    @media (max-width: 768px) {
        width: 100%;
    }
`