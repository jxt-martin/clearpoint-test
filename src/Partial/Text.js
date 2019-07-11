import styled from "styled-components";

export const Text = styled.p`
    margin-top: 0;
`;

export const BoldText = styled(Text)`
    font-weight: ${props => props.weight || 700};
`;
