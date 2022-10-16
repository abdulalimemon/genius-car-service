import { useEffect, useState } from "react";

const useServiceDetail = serviceID => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceID])
    return [service]

};

export default useServiceDetail;