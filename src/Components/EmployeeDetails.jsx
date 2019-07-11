import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";

import { EmployeeBio, EmployeeName, EmployeeCardImage, EmployeeMetaData } from "./EmployeeCardComponents";
import { Text, BoldText } from "~partial/Text";

import { EmployeeData } from "~data/Context";

const employeeSelector = (list, empId) => list.find(el => el.id === empId);

const EmployeeInfoComponent = styled.article`
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 200px auto;
    grid-template-areas:
        "image name"
        "meta bio";
    grid-gap: 10px;
`;

const StyledEmployeeName = styled(EmployeeName)`
    position: relative;
    border-bottom: 2px solid #000;
`;

const EmployeeTitle = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 120%;
`;

const EmployeeInfo = ({ employeeId }) => {
    const emp = employeeSelector(useContext(EmployeeData), employeeId);
    const since = moment(emp.dateJoined);

    return (
        <EmployeeInfoComponent>
            <EmployeeCardImage image={emp.avatar} />
            <StyledEmployeeName>
                <EmployeeTitle>
                    {emp.firstName} {emp.lastName}
                </EmployeeTitle>
            </StyledEmployeeName>
            <EmployeeBio>{emp.bio}</EmployeeBio>
            <EmployeeMetaData>
                <BoldText weight={800}>{emp.jobTitle}</BoldText>
                <Text>Age: {emp.age}</Text>
                <Text>{since.year()}</Text>
            </EmployeeMetaData>
        </EmployeeInfoComponent>
    );
};

export default EmployeeInfo;
