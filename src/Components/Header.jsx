// Libraries
import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";

// Components
import { FlexBox } from "~partial/Flex";

// Context/Data/etc
import { CompanyData } from "~data/Context";
import { Frame } from "~containers";

// Styled
const PageHeader = styled.header`
    display: flex;
`;

const PageTitle = styled.h1``;

const CompanyMotto = styled.h2``;

const Header = () => {
    const companyInfo = useContext(CompanyData);
    const est = moment(companyInfo.companyEst);

    return (
        <PageHeader>
            <Frame>
                <FlexBox flex={2} container direction={"column"} distribute={"space-between"} alignment={"flex-end"}>
                    <FlexBox flex={2}>
                        <PageTitle>{companyInfo.companyName}</PageTitle>
                    </FlexBox>
                    <FlexBox flex={1}>
                        <CompanyMotto>{companyInfo.companyMotto}</CompanyMotto>
                    </FlexBox>
                </FlexBox>
                <FlexBox flex={1}>Since {est.year()}</FlexBox>
            </Frame>
        </PageHeader>
    );
};

export default Header;
