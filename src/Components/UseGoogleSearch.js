import apiKey from "./Keys";
import { useEffect, useState } from "react";

const ContextKey = "c1f3b70a21b28fe2d";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${ContextKey}&q=${term}
        `)
                .then(response => response.json())
                .then(result => setData(result))
        }
        fetchData();
    }, [term])
    return { data };
}
export default useGoogleSearch;