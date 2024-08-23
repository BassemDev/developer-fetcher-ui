import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAdvocateDetails } from "../../api/advocateAPI";
import { DeveloperCard } from "../developerCards/DeveloperCard";
import { DeveloperDetail } from "../../api/types";


const Wrapper = styled.div`
    margin-top: 25px;

    color: white;
`;

export const DeveloperPage: React.FunctionComponent = () => {
    const { id } = useParams();
    const [developerDetails, setDeveloperDetails] = useState<DeveloperDetail>();

    useEffect(() => {
        const fetchDeveloperDetails = async () => {
            if (id) {
                const data = await getAdvocateDetails(id);
                setDeveloperDetails(data);
            } else {
                setDeveloperDetails(undefined);
            }
        }

        fetchDeveloperDetails();
    }, [id]);

    if (!developerDetails) {
        return <p>No result found for this page.</p>
    }

    return (
        <Wrapper>
            <DeveloperCard
                name={developerDetails.name}
                img={developerDetails.profile_picture}
                bio={developerDetails.bio}
                link={developerDetails.twitter}
                username={developerDetails.username}
            />
        </Wrapper>
    );
}