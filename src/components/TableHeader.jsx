import Logo from "./Logo";

function TableHeader({ data }) {
    return (
        <tr>
            <td colSpan="2">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Logo />
                            </td>

                            <td>
                                <p className="text-md text-zinc-600">
                                    Invoice #:
                                    {data.id ? data.id : "Invoice Number"}
                                </p>
                                <p className="text-md text-zinc-600">
                                    Created:{" "}
                                    {data.createdAt ? data.createdAt : "Date"}
                                </p>
                                <p className="text-md text-zinc-600">
                                    Due: {data.dueAt ? data.dueAt : "Due Date"}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default TableHeader;
