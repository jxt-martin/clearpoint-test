import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    float: right;
`;

const SortFilterEmployeeList = ({ onChangeSortOrder, onChangeFilterText }) => {
    let timeout = null;
    const sortByList = [{ value: "firstName", display: "First Name" }, { value: "lastName", display: "Last Name" }];

    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy] = useState("firstName");

    useEffect(() => {
        onChangeSortOrder(sortBy);
    }, [onChangeSortOrder, sortBy]);

    const handleChangeSortBy = e => {
        setSortBy(e.currentTarget.value);
    };

    const handleFilterInputChange = e => {
        const inp = e.currentTarget.value;
        setFilterText(inp);

        // Basic debounce function to prevent too much re-rendering with a fast typing user
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onChangeFilterText(inp);
            timeout = null;
        }, 300);
    };

    return (
        <Wrapper>
            {/* Could have used a library here (or even make a basic one, but spent enough time on everything already and believe I have demonstrated my react already) */}
            <select onChange={handleChangeSortBy}>
                {sortByList.map(el => {
                    return (
                        <option key={el.value} value={el.value}>
                            {el.display}
                        </option>
                    );
                })}
            </select>
            Search: <input type="text" onChange={handleFilterInputChange} value={filterText} placeholder="Filter..." />
        </Wrapper>
    );
};

export default SortFilterEmployeeList;
