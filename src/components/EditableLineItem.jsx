import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function EditableLineItem({
    lineItemId,
    item,
    editableRow,
    editableInputHandle,
    inputOnChnage,
}) {
    return (
        <tr key={lineItemId} className="bg-green-100">
            <td className="whitespace-wrap py-4 pl-4 pr-3 text-md font-medium text-zinc-600 sm:pl-6 w-1/2">
                <div className="flex items-center">
                    {editableRow[lineItemId] && (
                        <button
                            onClick={() => editableInputHandle(lineItemId)}
                            className="mr-2"
                        >
                            <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        </button>
                    )}
                    <input
                        type="text"
                        defaultValue={item.description}
                        onChange={(e) =>
                            inputOnChnage(
                                e.target.value,
                                lineItemId,
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
                        inputOnChnage(e.target.value, lineItemId, "price")
                    }
                />
                <span className="text-gray-500 p-2">EUR</span>
            </td>
        </tr>
    );
}

export default EditableLineItem;
