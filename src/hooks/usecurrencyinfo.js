import { useEffect, useState } from "react";

// Custom hook to fetch currency info
function usecurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch currency data
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    return data;
}

export default usecurrencyinfo;