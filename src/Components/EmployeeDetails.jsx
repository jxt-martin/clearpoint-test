import React, { useContext } from "react";

import { EmployeeData } from "~data/Context";

const employeeSelector = (list, empId) => list.find(el => el.id === empId);

const EmployeeCard = ({ employeeId }) => {
    const emp = employeeSelector(useContext(EmployeeData), employeeId);
    console.log(emp);
    return (
        <div>
            <img src={emp.avatar} alt={`${emp.firstName} ${emp.lastName}`} />
            {emp.firstName} {emp.lastName} <br />
            {emp.bio}
        </div>
    );
};

export default EmployeeCard;
