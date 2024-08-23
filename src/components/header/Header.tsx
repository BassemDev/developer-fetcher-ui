import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h3`
    margin-top: 0;

    color: white;
    font-weight: 700;
    font-size: 30px;
`;

interface Props {
    text: string;
}

export const Header: React.FC<Props> = ({ text }) => {
    return (
        <HeaderTitle>{text}</HeaderTitle>
    );
}