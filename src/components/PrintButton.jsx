function PrintButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-green-400 mr-2 text-white px-4 py-2 rounded"
        >
            Print
        </button>
    );
}

export default PrintButton;
