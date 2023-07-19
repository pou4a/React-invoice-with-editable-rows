import "./App.css";
import React, { useState } from "react";
import Upload from "./components/uploadZone";
import Table from "./components/InvoiceTable";
import useFetchInvoice from "./api/Invoice";

function App() {
    const [showUploadZone, setShowUploadZone] = useState(false);
    const [jsonData, setJsonData] = useState({});
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

    const isObjectEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    return (
        <>
            <Table
                data={isObjectEmpty(jsonData) ? invoiceData : jsonData}
                handleUploadZone={handleUploadZone}
            />
            {showUploadZone && <Upload setJsonData={setJsonData} />}
        </>
    );
}

export default App;
