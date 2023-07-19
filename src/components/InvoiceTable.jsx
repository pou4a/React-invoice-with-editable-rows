import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import { calculateTotalPrice } from "../utilities/priceUtils";
import InformationTableBody from "./InformationTableBody";
import LineItem from "./LineItem";
import EditableLineItem from "./EditableLineItem";
import ImportButton from "./ImportButton";
import PrintButton from "./PrintButton";

function Table({ data, handleUploadZone }) {
    const [tableData, setTableData] = useState();
    const [editableRow, setEditableRow] = useState([]);
    const [cellData, setCellData] = useState([]);

    const inputOnChnage = (val, key, property) => {
        const updatedArray = [...cellData];
        updatedArray[key][property] = val;
        setCellData(updatedArray);
    };

    const editableInputHandle = (key) => {
        setEditableRow((prevRow) => {
            const editableRow = [...prevRow];
            editableRow[key] = !editableRow[key];
            return editableRow;
        });
    };

    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        setTableData(data);
        setCellData(data.lineItems);
    }, [data]);

    const totalPrice = calculateTotalPrice(cellData);

    const vat = totalPrice * 0.19;

    if (!tableData) {
        return <>Loading...</>;
    }

    return (
        <>
            <table className="min-w-full divide-y divide-zinc-300">
                <tbody>
                    <TableHeader data={tableData} />
                    <InformationTableBody data={tableData} />

                    <tr className="bg-zinc-300 print:border-b-2">
                        <th
                            scope="col"
                            className="py-1.5 pl-2 text-left text-md font-bold text-zinc-600"
                        >
                            Item
                        </th>

                        <th
                            scope="col"
                            className="py-1.5 pr-2 text-right text-md font-bold text-zinc-600 "
                        >
                            Price
                        </th>
                    </tr>

                    {cellData
                        ? cellData.map((item, key) => {
                              if (!editableRow[key]) {
                                  return (
                                      <LineItem
                                          key={key}
                                          lineItemId={key}
                                          item={item}
                                          editableInputHandle={
                                              editableInputHandle
                                          }
                                      />
                                  );
                              } else {
                                  return (
                                      <EditableLineItem
                                          key={key}
                                          lineItemId={key}
                                          item={item}
                                          editableRow={editableRow}
                                          editableInputHandle={
                                              editableInputHandle
                                          }
                                          inputOnChnage={inputOnChnage}
                                      />
                                  );
                              }
                          })
                        : ""}

                    <tr>
                        <td></td>
                        <td className="border-t-2">Total: {totalPrice} EUR</td>
                    </tr>
                    <tr className="border-t-2">
                        <td></td>
                        <td>VAT (19%): {vat} EUR</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-4 border-2 p-4 print:hidden">
                <PrintButton onClick={handlePrint} />
                <ImportButton onClick={handleUploadZone} />
            </div>
        </>
    );
}

export default Table;
