import "./App.css";
import React, { useState } from "react";
import Upload from "./components/uploadZone";
import Table from "./components/InvoiceTable";
import useFetchInvoice from "./api/Invoice";

function App() {
    const [showUploadZone, setShowUploadZone] = useState(false);
    const { invoiceData, isLoading, error } = useFetchInvoice();

    const handleUploadZone = () => {
        setShowUploadZone((prevShowUploadZone) => !prevShowUploadZone);
    };

    if (isLoading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Server connection problem, please check back later.</>;
    }
    return (
        <>
            <Table data={invoiceData} handleUploadZone={handleUploadZone} />
            {showUploadZone && <Upload />}
        </>
    );
}

export default App;
