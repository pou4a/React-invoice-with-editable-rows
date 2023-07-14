function Table({ data }) {
    const totalPrice = data.lineItems
        ? data.lineItems.reduce((total, item) => total + item.price, 0)
        : 0;

    const vat = totalPrice * 0.19;

    if (!data) {
        return <>Loading...</>;
    }
    return (
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

                {data.lineItems
                    ? data.lineItems.map((item, key) => (
                          <tr key={key}>
                              <td className="whitespace-wrap py-4 pl-4 pr-3 text-md  text-zinc-600 sm:pl-6 w-1/2">
                                  {item.description}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-md text-zinc-600 w-1/4">
                                  {item.price + " EUR"}
                              </td>
                          </tr>
                      ))
                    : ""}

                <tr>
                    <td></td>
                    <td className="border-t-2">
                        Total: {totalPrice.toFixed(2)} EUR
                    </td>
                </tr>
                <tr className="border-t-2">
                    <td></td>
                    <td>VAT (19%): {vat.toFixed(2)} EUR</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
