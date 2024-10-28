import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError('Failed to fetch', error)
            } finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [endpoint]);
    return {data, loading, error};
};

export default useFetch