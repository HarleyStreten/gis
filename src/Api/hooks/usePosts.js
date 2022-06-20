import { useEffect, useState } from "react";
import api from "../api";

function usePosts(offset = 0, count = 100) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        api.posts.get(offset, count).then(result => {
            if (result.status) {
                setPosts(result.response);
            }
        })
    }, [count, offset]);

    return posts;
}

export default usePosts;