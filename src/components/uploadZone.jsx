import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

function Upload({ setJsonData }) {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const data = JSON.parse(reader.result);
                    setJsonData(data.invoice);
                } catch (error) {
                    console.error("Error parsing JSON file:", error);
                }
            };
            reader.readAsText(file);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/json": [".json"],
        },
        maxFiles: 1,
    });

    return (
        <div className="print:hidden" {...getRootProps()}>
            <input {...getInputProps()} />

            {isDragActive ? (
                <button
                    type="button"
                    className="relative mt-2 block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-zinc-500" />
                    <span className="mt-2 block text-sm font-medium text-zinc-500">
                        Drag the file here
                    </span>
                </button>
            ) : (
                <button
                    type="button"
                    className="relative mt-2 block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-zinc-500" />
                    <span className="mt-2 block text-sm font-medium text-zinc-500">
                        Import new json invoice
                    </span>
                </button>
            )}
        </div>
    );
}

export default Upload;
