import { connector } from "../connector";

class Post {
    async getById(post_id) {
        const path = '/post.getById';
        return await connector.get(path, { post_id });
    }
}

export default Post;