import { connector } from "../connector";

const Forecast = {
    init: async (post_id, date_start, date_end, use_meteodata) => {
        const path = 'forecast.init';
        return await connector.get(path, { post_id, date_start, date_end, use_meteodata })
    },

    getByStartDate: async (post_ids, date_start) => {
        const path = 'forecast.getByStartDate';
        post_ids = post_ids.join(',');

        return await connector.get(path, { post_ids, date_start });
    },

    getStatus: async forecast_id => {
        const path = 'forecast.getStatus';
        return await connector.get(path, { forecast_id });
    },

    getById: async forecast_id => {
        const path = 'forecast.getById';
        return await connector.get(path, { forecast_id });
    },

    getLast: async () => {
        const path = 'forecast.getLast';
        return await connector.get(path, {});
    },

    getLastForPost: async post_id => {
        const path = 'forecast.getLastForPost';
        return await connector.get(path, { post_id });
    },

    getLastForPosts: async post_ids => {
        const path = 'forecast.getLastForPosts';
        post_ids = post_ids.join(',');

        return await connector.get(path, { post_ids });
    },

    queueAll: async (date_start, date_end, use_meteodata) => {
        const path = 'forecast.queueAll';
        return await connector.post(path, { date_start, date_end, use_meteodata });
    }
}

export default Forecast;