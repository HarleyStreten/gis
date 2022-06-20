import { connector } from "../connector";

const Measurements = {
    get: async (post_id, date_start, date_end) => {
        const path = 'measurements.get';
        return await connector.get(path, { post_id, date_start, date_end });
    },

    getByPostsIds: async (post_ids, date_start, date_end) => {
        const path = 'measurements.getByPostsIds';
        post_ids = post_ids.join(',');

        return await connector.get(path, { post_ids, date_start, date_end });
    }
};

export default Measurements;