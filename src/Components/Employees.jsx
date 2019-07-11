// Libraries
import React, { useContext, useState } from "react";
import styled from "styled-components";

// Components
import { Frame } from "~containers";
import EmployeeCard from "./EmployeeCard";

// Data/context/etc
import { EmployeeData } from "~data/Context";
import Modal, { ModalClose } from "~partial/Modal";

const EmployeeDetailsLazy = React.lazy(() => import("./EmployeeDetails"));

const TempLoading = () => <div>Loading...</div>;

// Styled
const EmployeeList = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    grid-gap: 20px;
`;

function Employees() {
    const empList = useContext(EmployeeData);
    const [employeeDetailsIsOpen, setEmployeeDetailsIsOpen] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const handleRequestClose = method => {
        console.log(method); // Useful for Analytics and Tracking purposes
        setEmployeeDetailsIsOpen(false);
        setSelectedEmployeeId(null);
    };

    return (
        <Frame>
            {employeeDetailsIsOpen && (
                <Modal onRequestClose={handleRequestClose}>
                    <ModalClose onClick={handleRequestClose} />
                    <React.Suspense fallback={<TempLoading />}>
                        <EmployeeDetailsLazy employeeId={selectedEmployeeId} />
                    </React.Suspense>
                </Modal>
            )}

            <h3>Our Employees</h3>
            <div>Sort/Filter</div>

            <EmployeeList>
                {empList.map(emp => (
                    <EmployeeCard
                        key={emp.id}
                        employee={emp}
                        active={emp.id === selectedEmployeeId}
                        onClick={() => {
                            setEmployeeDetailsIsOpen(true);
                            setSelectedEmployeeId(emp.id);
                        }}
                    />
                ))}
            </EmployeeList>
        </Frame>
    );
}

export default Employees;
