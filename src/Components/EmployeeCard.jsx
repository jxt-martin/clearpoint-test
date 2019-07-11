import React from "react";
import styled from "styled-components";

// It's "sort of" an article. It's a block of data about a specific thing, repeated, so somewhat article-ish. Mostly included for demonstration of semantic tagging
const EmployeeCardComponent = styled.article`
    height: 5em;
    overflow: hidden;
    border: 2px solid #999;

    img {
        border-right: 3px solid #999;
    }
`;

const EmployeeCard = ({ employee: emp, onClick }) => {
    return (
        <EmployeeCardComponent onClick={onClick}>
            <img src={emp.avatar} alt={`${emp.firstName} ${emp.lastName}`} />
            {emp.firstName} {emp.lastName} <br />
            {emp.bio}
        </EmployeeCardComponent>
    );
};

export default EmployeeCard;
