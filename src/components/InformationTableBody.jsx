function InformationTableBody({ data }) {
    return (
        <tr>
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
                                    {data.email ? data.email : "Company email"}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default InformationTableBody;
