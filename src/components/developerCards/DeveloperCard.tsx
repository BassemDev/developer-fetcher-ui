import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATHS } from "../../constants/routes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 33%;

    word-break: break-word;
`;

const Panel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 20px;
`;

const Description = styled.div`
    color: white;
`;

const ProfileImg = styled.img`
    margin-right: 20px;

    border-radius: 50%;
    border: 1.5px solid #01e8ff;
    background: white;
    
    width: 55px;
    height: 55px;
`;

const HashTag = styled.span`
    font-size: 14px;
    color: #01e8ff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Name = styled.strong`
    margin-bottom: 8px;
    color: white;
`;

const ShortInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

interface Props {
    username: string;
    name: string;
    img: string;
    bio: string;
    link: string;
}

export const DeveloperCard: React.FunctionComponent<Props> = ({name, img, bio, link, username}) => {
    const handleUserNameClick = () => {
        window.open(link, '_blank');
    }

    return (
        <Wrapper>
            <StyledLink to={ROUTE_PATHS.ADVOCATE_PAGE.replace(":id", username)}>
                <Panel>
                    <ProfileImg
                        src={img}
                        title="developer image"
                        alt="missing image"
                    />
                    <ShortInfo>
                        <Name>{name}</Name>
                        <HashTag onClick={handleUserNameClick}>@{username}</HashTag>
                    </ShortInfo>
                </Panel>
                <Description>{bio}</Description>
            </StyledLink>
        </Wrapper>
    )
}