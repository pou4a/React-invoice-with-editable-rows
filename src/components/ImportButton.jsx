function ImportButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-900 text-white px-4 py-2 rounded"
        >
            Import invoice
        </button>
    );
}

export default ImportButton;
