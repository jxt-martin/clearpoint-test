import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import { usePortal } from "~hooks";

const ModalPortal = ({ id, children }) => {
    useEffect(() => {
        const root = document.getElementById("modalroot");
        root.style.display = "block";

        return () => {
            root.style.display = "none";
        };
    });

    return usePortal(children, "modalroot", id);
};

const FullScreenCss = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
`;

const ModalBackdrop = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    ${FullScreenCss}
    z-index: 0;
`;

const ModalContent = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 4px;
    max-width: 80%;
    max-height: 80%;
    z-index: 1;

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
        border: 0;
        padding: 12px;
        border-radius: 0px;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
    }
`;

/**
 * From past experience, certain SEO teams like to track how a user closes a modal window,
 * this can be useful to know if the backdrop was clicked by accident so they can plan
 * changes to the design to reduce this chance.
 * One solution I implemented before was to simply include a new parameter in the close process
 * which tracks how the modal was closed which can then be relayed to something like Google Analytics.
 */
const Modal = ({ onRequestClose, allowEscape = true, children }) => {
    useEffect(() => {
        const handleKeyPress = e => {
            if (e.key === "Escape" || e.keyCode === 27) {
                onRequestClose("escape");
            }
        };

        if (allowEscape) window.addEventListener("keydown", handleKeyPress);

        return () => {
            if (allowEscape) window.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <ModalPortal id="ModalWrapper">
            <ModalBackdrop id="ModalBackdrop" onClick={() => onRequestClose("backdrop")} />
            <ModalContent id="ModalContent">{children}</ModalContent>
        </ModalPortal>
    );
};

export default Modal;
