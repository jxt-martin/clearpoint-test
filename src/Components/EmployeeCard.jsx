import React, { useRef } from "react";
import styled from "styled-components";

import { useDetectOverflow } from "~hooks";

import { EmployeeBio, EmployeeName, EmployeeCardImage } from "./EmployeeCardComponents";
import { OverflowFade } from "~partial/OverflowFade";

// It's "sort of" an article. It's a block of data about a specific thing, repeated, so somewhat article-ish. Mostly included for demonstration of semantic tagging
const EmployeeCardComponent = styled.article`
    height: 6em;
    overflow: hidden;
    border: 3px solid #999;
    background-color: #fff;
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "image name"
        "image bio";

    &:hover {
        cursor: pointer;
        border: 3px solid #666;
        background-color: #ececec;
    }

    &.active {
        background-color: #feacac;
    }
`;

const StyledEmployeeCardImage = styled(EmployeeCardImage)`
    border-right: 3px solid #999;
`;

const EmployeeCard = ({ employee: emp, onClick, active = false }) => {
    const refs = {
        wrapper: useRef(null),
        content: useRef(null)
    };

    const hasOverflow = useDetectOverflow(refs.wrapper, refs.content);

    return (
        <EmployeeCardComponent ref={refs.wrapper} onClick={onClick} className={`${active ? "active" : "inactive"}`}>
            <StyledEmployeeCardImage image={emp.avatar} />
            <EmployeeName>
                {emp.firstName} {emp.lastName}
            </EmployeeName>
            <EmployeeBio ref={refs.content}>
                {emp.bio}
                {hasOverflow && <OverflowFade />}
            </EmployeeBio>
        </EmployeeCardComponent>
    );
};

export default EmployeeCard;
