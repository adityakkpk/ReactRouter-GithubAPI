import { useEffect, useState } from "react"

export const useGithubInfoLoader = (username) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`, {
            "user-agent": "adityakkpk"
        })
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

    return data;
}