import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function LineItem({ lineItemId, item, editableInputHandle }) {
    return (
        <tr
            onClick={() => editableInputHandle(lineItemId)}
            className="hover:bg-slate-100 cursor-pointer group"
        >
            <td className="whitespace-wrap py-4 pl-4 pr-3 text-md font-medium text-zinc-600 sm:pl-6 w-1/2">
                <div className="flex items-center">
                    <span className="mr-2 hidden group-hover:inline-block">
                        <PencilSquareIcon className="h-6 w-6 text-zinc-500" />
                    </span>
                    <p>{item.description}</p>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-md text-zinc-600 w-1/4">
                {item.price + " EUR"}
            </td>
        </tr>
    );
}

export default LineItem;
