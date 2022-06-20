import { connector } from "../connector";

const posts = {
    get: async (offset = 0, count = 100) => {
        const path = 'posts.get';
        return await connector.get(path, { offset, count });
    },

    getByRiverId: async (river_id, offset = 0, count = 100) => {
        const path = 'posts.getByRiverId';
        return await connector.get(path, { river_id, offset, count });
    }
}

export default posts;