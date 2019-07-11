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
const StyledFrame = styled(Frame)`
    background-color: #ddd;
    border-bottom: 2px solid #666;
`;

const PageHeader = styled.header`
    display: flex;
`;

const PageTitle = styled.h1``;

const CompanyMotto = styled.h2``;

const AlignRightFlexBox = styled(FlexBox)`
    text-align: right;
`;

const Header = () => {
    const companyInfo = useContext(CompanyData);
    const est = moment(companyInfo.companyEst);

    return (
        <StyledFrame>
            <PageHeader>
                <FlexBox flex={2} container direction={"column"} distribute={"space-between"} alignment={"flex-end"}>
                    <FlexBox flex={2}>
                        <PageTitle>{companyInfo.companyName}</PageTitle>
                    </FlexBox>
                    <FlexBox flex={1}>
                        <CompanyMotto>{companyInfo.companyMotto}</CompanyMotto>
                    </FlexBox>
                </FlexBox>
                <AlignRightFlexBox flex={1}>Since {est.year()}</AlignRightFlexBox>
            </PageHeader>
        </StyledFrame>
    );
};

export default Header;
