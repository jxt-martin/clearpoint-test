// Libraries
import React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

// Components
import Page from "~components/Page";
import Header from "~components/Header";
import Employees from "~components/Employees";

// Style/Meta/Data/etc
import { theme } from "./Theme.js";
import "./App.scss";
import data from "~data/sample-data.json";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Page state={data}>
                <Header />
                <Employees />
            </Page>
        </ThemeProvider>
    );
}

export default App;
