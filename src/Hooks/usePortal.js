import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const usePortal = (children, portalId, wrapperId) => {
    const element = useRef(document.createElement("div"));

    if (wrapperId) element.current.id = wrapperId;

    useEffect(() => {
        const current = element.current;

        document.getElementById(portalId).appendChild(current);

        return () => document.getElementById(portalId).removeChild(current);
    }, [portalId]);

    return createPortal(children, element.current);
};

export { usePortal };
