import { useEffect, useState } from "react";
import api from "../api";

function usePost(post_id) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        api.post.getById(post_id).then(result => {
            if (result.status) {
                setPost(result.response);
            }
        });
    }, [post_id]);

    return post;
}

export default usePost;