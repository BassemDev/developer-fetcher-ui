import React, { FormEventHandler } from 'react';
import styled from 'styled-components';

import { INPUT_DEFAULT_PLACEHOLDER } from '../../constants/input';

const SearchButton = styled.button`
    padding: 17px;
    margin-left: -1px;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border: none;
    
    background: #01e8ff;
    font-size: 14px;
    font-weight: 550;
    cursor: pointer;
`;

const Input = styled.input`
    padding: 17px;

    border: none;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;

    background: #2e3030;
    font-size: 15px;
    color: white;
`;

const Wrapper = styled.form`
    margin-bottom: 20px;
`;

const SearchResultLabel = styled.h5`
    color: grey;
    text-decoration: underline;
`;

interface Props {
    searchTerm: string;
    totalCount: number;
    handleFormSubmit: FormEventHandler<HTMLFormElement>;
    name: string;
    placeholder?: string;
}

export const DeveloperSearch: React.FunctionComponent<Props> = ({handleFormSubmit, placeholder = INPUT_DEFAULT_PLACEHOLDER.SEARCH, name, searchTerm, totalCount }) => {
    return (
        <Wrapper onSubmit={handleFormSubmit}>
            <Input
                type="text"
                name={name}
                placeholder={placeholder} 
            />
            <SearchButton type="submit">Search</SearchButton>
            <br />
            {searchTerm && <SearchResultLabel>Found {totalCount} for the term: <i>{searchTerm}</i></SearchResultLabel>}
        </Wrapper>
    )
}