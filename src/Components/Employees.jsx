// Libraries
import React, { useContext, useState } from "react";
import styled from "styled-components";

// Components
import { Frame } from "~containers";
import EmployeeCard from "./EmployeeCard";
import SortFilterEmployeeList from "./SortFilterEmployeeList";

// Data/context/etc
import { EmployeeData } from "~data/Context";
import Modal, { ModalClose } from "~partial/Modal";

// Lazy load this component because why not, basically just to show understanding of lazy loading and suspense
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
    const [filterText, setFilterText] = useState("");
    const [sortEmployeesBy, setSortEmployeesBy] = useState("firstName");

    const handleRequestClose = method => {
        console.log(method); // Useful for Analytics and Tracking purposes
        setEmployeeDetailsIsOpen(false);
        setSelectedEmployeeId(null);
    };

    const handleChangeSortOrder = sortBy => {
        setSortEmployeesBy(sortBy);
    };

    const handleChangeFilterText = newValue => {
        setFilterText(newValue);
    };

    const filterEmployees = item => {
        if (filterText === "") return true;

        if (
            item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
            `${item.firstName} ${item.lastName}`.toLowerCase().includes(filterText.toLowerCase())
        )
            return true;

        return false;
    };

    const sortEmployees = (a, b) => {
        if (a[sortEmployeesBy] < b[sortEmployeesBy]) {
            return -1;
        }
        if (a[sortEmployeesBy] > b[sortEmployeesBy]) {
            return 1;
        }
        return 0;
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

            <SortFilterEmployeeList
                onChangeSortOrder={handleChangeSortOrder}
                onChangeFilterText={handleChangeFilterText}
            />
            <h3>Our Employees</h3>

            <EmployeeList>
                {empList &&
                    empList
                        .filter(filterEmployees)
                        .sort(sortEmployees)
                        .map(emp => (
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
