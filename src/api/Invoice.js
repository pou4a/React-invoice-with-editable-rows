import { useEffect, useState } from "react";
import axios from "axios";

const useFetchInvoice = () => {
    const [invoiceData, setInvoiceData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3003/invoice"
                );
                setInvoiceData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInvoice();
    }, []);

    return { invoiceData, isLoading, error };
};

export default useFetchInvoice;
