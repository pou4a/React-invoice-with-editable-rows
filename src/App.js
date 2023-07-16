import "./App.css";
import React from "react";
import Upload from "./components/uploadZone";
import Table from "./components/table";
import useFetchInvoice from "./api/Invoice";

function App() {
    const { invoiceData, isLoading, error } = useFetchInvoice();

    if (isLoading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Server connection problem, please check back later.</>;
    }
    return (
        <>
            <Table data={invoiceData} />
            <Upload />
        </>
    );
}

export default App;
