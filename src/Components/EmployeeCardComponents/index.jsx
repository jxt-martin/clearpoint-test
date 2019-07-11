import styled from "styled-components";

export const EmployeeCardImage = styled.section`
    grid-area: image;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`;

export const EmployeeName = styled.section`
    grid-area: name;
    font-size: 1.2em;
    font-weight: 700;
    padding: 4px;
`;

export const EmployeeBio = styled.section`
    grid-area: bio;
    position: relative;
    padding: 4px;
    font-size: 0.8em;
    overflow: hidden;
`;

export const EmployeeMetaData = styled.section`
    grid-area: meta;
    text-align: right;
`;
