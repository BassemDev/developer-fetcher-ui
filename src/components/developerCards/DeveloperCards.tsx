import React from "react";
import styled from "styled-components";

import { splitArryToChunk } from "./helpers";
import { DeveloperCard } from "./DeveloperCard";
import { DeveloperDetail } from "../../api/types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    margin-bottom: 45px;
`;

interface Props {
    developerDetailList: DeveloperDetail[];
}

export const DeveloperCards: React.FunctionComponent<Props> = ({developerDetailList}) => {
    const arrays = splitArryToChunk(developerDetailList, 3);
    return (
      <Wrapper>
        {
            arrays.map((array: DeveloperDetail[], index) => {
                return (
                    <Row key={index}>
                        {array.map((val: DeveloperDetail, index) =>
                         <DeveloperCard
                            username={val.username}
                            key={index}
                            name={val.name}
                            bio={val.bio}
                            link={val.twitter}
                            img={val.profile_picture}
                        />   
                        )}
                    </Row>   
                )
            })
        }
      </Wrapper>  
    );
}