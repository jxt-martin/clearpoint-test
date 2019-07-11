import styled, { css } from "styled-components";

const flexContainer = css`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.distribute || "initial"};
    align-content: ${props => props.alignment || "initial"};
`;

export const FlexBox = styled.div`
    flex: ${props => props.flex || 1};

    ${props => props.container && flexContainer}
`;
