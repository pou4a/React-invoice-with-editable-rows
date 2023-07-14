import "./App.css";
import React, { useState, useEffect } from "react";
import Upload from "./components/uploadZone";
import Table from "./components/table";

function App() {
    const [invoiceData, setInvoiceData] = useState();
    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = async () => {
        const data = await fetch("http://localhost:3003/inovice");
        const set = await data.json();
        setInvoiceData(set);
    };

    if (!invoiceData) {
        return <>Loading...</>;
    }
    return (
        <>
            <Table data={invoiceData} />
            <Upload />
        </>
    );
}

export default App;
