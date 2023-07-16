import React, { useState, useEffect } from "react";

function Table({ data }) {
    const [editIcon, setEditIcon] = useState([]);
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

    const editIconHandle = (key) => {
        setEditIcon((prevRow) => {
            const rowIcon = [...prevRow];
            rowIcon[key] = !rowIcon[key];
            return rowIcon;
        });
    };

    useEffect(() => {
        setCellData(data.lineItems);
    }, []);

    const calculateTotalPrice = () => {
        if (cellData) {
            return cellData.reduce((total, item) => total + item.price, 0);
        }
        return 0;
    };

    const totalPrice = calculateTotalPrice();
    const vat = totalPrice * 0.19;

    if (!data) {
        return <>Loading...</>;
    }

    return (
        <>
            <table className="min-w-full divide-y divide-zinc-300">
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="cai_logo.svg"
                                                className="w-full max-w-[300px] ml-[-40px]"
                                                alt="logo"
                                            />
                                        </td>

                                        <td>
                                            <p className="text-md text-zinc-600">
                                                Invoice #:
                                                {data.id
                                                    ? data.id
                                                    : "Invoice Number"}
                                            </p>
                                            <p className="text-md text-zinc-600">
                                                Created:{" "}
                                                {data.createdAt
                                                    ? data.createdAt
                                                    : "Date"}
                                            </p>
                                            <p className="text-md text-zinc-600">
                                                Due:{" "}
                                                {data.dueAt
                                                    ? data.dueAt
                                                    : "Due Date"}
                                            </p>
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
                                            <p className="text-md text-zinc-600">
                                                {data.address
                                                    ? data.address
                                                    : "address line #1"}
                                            </p>
                                            <p className="text-md text-zinc-600">
                                                {data.address2
                                                    ? data.address2
                                                    : "address line #2"}
                                            </p>
                                        </td>

                                        <td>
                                            <p className="text-md text-zinc-600">
                                                {data.company
                                                    ? data.company
                                                    : "Company name"}
                                            </p>
                                            <p className="text-md text-zinc-600">
                                                {data.fullName
                                                    ? data.fullName
                                                    : "Client fullName"}
                                            </p>
                                            <p className="text-md text-zinc-600">
                                                {data.email
                                                    ? data.email
                                                    : "Company email"}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr className="bg-zinc-300">
                        <th
                            scope="col"
                            className="py-1.5 pl-2 text-left text-md font-bold text-zinc-600 "
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
                                      <tr
                                          key={key}
                                          onMouseOverCapture={() =>
                                              editIconHandle(key)
                                          }
                                          onMouseOut={() => editIconHandle(key)}
                                          onClick={() =>
                                              editableInputHandle(key)
                                          }
                                          className={`${
                                              editIcon[key] && "bg-slate-100"
                                          }`}
                                      >
                                          <td
                                              className={`whitespace-wrap py-4 pl-4 pr-3 text-md font-medium text-zinc-600 sm:pl-6 w-1/2`}
                                          >
                                              <div
                                                  style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                  }}
                                              >
                                                  {editIcon[key] && (
                                                      <span className="mr-2">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              strokeWidth={1.5}
                                                              stroke="currentColor"
                                                              className="w-6 h-6"
                                                          >
                                                              <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                              />
                                                          </svg>
                                                      </span>
                                                  )}
                                                  <p style={{ margin: "0" }}>
                                                      {item.description}
                                                  </p>
                                              </div>
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-md text-zinc-600 w-1/4">
                                              {item.price + " EUR"}
                                          </td>
                                      </tr>
                                  );
                              } else {
                                  return (
                                      <tr
                                          key={key}
                                          className={`${
                                              editIcon[key] && "bg-green-100"
                                          }`}
                                      >
                                          <td
                                              className={`whitespace-wrap py-4 pl-4 pr-3 text-md font-medium text-zinc-600 sm:pl-6 w-1/2`}
                                          >
                                              <div
                                                  style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                  }}
                                              >
                                                  {editableRow[key] && (
                                                      <button
                                                          onClick={() => {
                                                              editableInputHandle(
                                                                  key
                                                              );
                                                              editIconHandle(
                                                                  key
                                                              );
                                                          }}
                                                          className="mr-2"
                                                      >
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              strokeWidth={1.5}
                                                              stroke="green"
                                                              className="w-8 h-8"
                                                          >
                                                              <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                              />
                                                          </svg>
                                                      </button>
                                                  )}
                                                  <input
                                                      type="text"
                                                      defaultValue={
                                                          item.description
                                                      }
                                                      onChange={(e) =>
                                                          inputOnChnage(
                                                              e.target.value,
                                                              key,
                                                              "description"
                                                          )
                                                      }
                                                      className="border border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md px-3 py-2 w-full"
                                                  />
                                              </div>
                                          </td>
                                          <td className="whitespace-nowrap px-3 py-4 text-md text-zinc-600 w-full flex">
                                              <input
                                                  type="number"
                                                  className="border border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md px-3 py-2 w-full"
                                                  defaultValue={item.price}
                                                  onChange={(e) =>
                                                      inputOnChnage(
                                                          e.target.value,
                                                          key,
                                                          "price"
                                                      )
                                                  }
                                              />
                                              <span className="text-gray-500 p-2">
                                                  EUR
                                              </span>
                                          </td>
                                      </tr>
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

            <div className="mt-4 border-2 p-4">
                <button className="bg-green-400 mr-2 text-white px-4 py-2 rounded">
                    Print
                </button>

                <button className="bg-blue-900 text-white px-4 py-2 rounded">
                    Import invoice
                </button>
            </div>
        </>
    );
}

export default Table;
