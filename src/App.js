import "./App.css";
import React, { useState, useEffect } from "react";
import Upload from "./components/Upload";

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

    const logoStyle = {
        width: "100%",
        maxWidth: "300px",
    };

    if (!invoiceData) {
        return <>Loading...</>;
    }
    return (
        <>
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr className="top">
                        <td colSpan="2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="title">
                                            <img
                                                src="cai_logo.svg"
                                                style={logoStyle}
                                                alt="logo"
                                            />
                                        </td>

                                        <td>
                                            Invoice #:
                                            {invoiceData.id
                                                ? invoiceData.id
                                                : "Invoice Number"}
                                            <br />
                                            Created:{" "}
                                            {invoiceData.createdAt
                                                ? invoiceData.createdAt
                                                : "Date"}
                                            <br />
                                            Due:{" "}
                                            {invoiceData.dueAt
                                                ? invoiceData.dueAt
                                                : "Due Date"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr className="information">
                        <td colSpan="2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            {invoiceData.address
                                                ? invoiceData.address
                                                : "address line #1"}
                                            <br />
                                            {invoiceData.address2
                                                ? invoiceData.address2
                                                : "address line #2"}
                                        </td>

                                        <td>
                                            {invoiceData.company
                                                ? invoiceData.company
                                                : "Company name"}
                                            <br />
                                            {invoiceData.fullName
                                                ? invoiceData.fullName
                                                : "Client fullName"}
                                            <br />

                                            {invoiceData.email
                                                ? invoiceData.email
                                                : "Company email"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr className="heading">
                        <td>Item</td>

                        <td>Price</td>
                    </tr>

                    <tr className="item last">
                        <td>Death Star</td>
                        <td>1100,39 EUR</td>
                    </tr>
                    <tr className="item last">
                        <td>Star destroyer</td>
                        <td>399,99 EUR</td>
                    </tr>

                    <tr className="total">
                        <td></td>

                        <td>Total: 1500,38 EUR</td>
                    </tr>
                    <tr className="vat">
                        <td></td>
                        <td>VAT (19%): 285,07 EUR</td>
                    </tr>
                </tbody>
            </table>

            <Upload />
        </>
    );
}

export default App;
