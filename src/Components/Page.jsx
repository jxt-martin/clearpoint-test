import React from "react";

import { CompanyData, EmployeeData } from "~data/Context";

function Page({ state, children }) {
    return (
        <CompanyData.Provider value={state.companyInfo}>
            <EmployeeData.Provider value={state.employees}>{children}</EmployeeData.Provider>
        </CompanyData.Provider>
    );
}

export default Page;
