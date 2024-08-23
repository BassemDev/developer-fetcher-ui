import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Header } from '../header/Header';
import { DeveloperSearch } from '../developerSearch/DeveloperSearch';
import { DeveloperCards } from '../developerCards/DeveloperCards';
import { DeveloperDetail } from '../../api/types';
import { getAdvocates } from '../../api/advocateAPI';

const NotFound = styled.p`
  color: white;
`;

export const App = () => {
  const [searhTerm, setSearchTerm] = useState<string>("");
  const [developerList, setDeveloperList] = useState<DeveloperDetail[]>([]);

  useEffect(() => {
    findDeveloperList();
  }, []);

  const findDeveloperList = async (q?: string) => {
    const data = await getAdvocates(q);
    setDeveloperList(data);
  }

  const handleSearchForAdvocate = async (e: FormEvent) => {
    // Disable loading the 
    e.preventDefault();
    //@ts-ignore
    const inputValue = e.target.searchTerm.value
    setSearchTerm(inputValue);
    findDeveloperList(inputValue);
  }

  if (developerList.length === 0) {
    return <NotFound>There is no software developer</NotFound>
  }
  
  return (
    <>
      <Header text={`Search ${developerList.length} developer advocates found by @BassemDev webscraper and the Twitter API`} />
      <DeveloperSearch 
        totalCount={developerList.length}
        searchTerm={searhTerm}
        handleFormSubmit={handleSearchForAdvocate}
        placeholder='Search advocates...'
        name="searchTerm"
      />
      <DeveloperCards developerDetailList={developerList} />
    </>
  );
}
