import { useEffect, useState } from "react"

let isLoading = true;

const useGithubInfoLoader = (username) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`, {
            "user-agent": "adityakkpk"
        })
        .then(res => res.json())
        .then(res => setData(res))
        isLoading = false;
    }, [])

    return data;
}

export {isLoading, useGithubInfoLoader}