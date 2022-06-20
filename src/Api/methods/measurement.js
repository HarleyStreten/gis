import { connector } from "../connector";

const Measurement = {
    add: async (post_id, param_code, date, water_level, description, air_temp,
                atmosphere_pressure, wind_speed, show_thickness, rainfall) => {
        const path = 'measurement.add';
        return await connector.post(path, { post_id, param_code, date, water_level, 
                        description, air_temp, atmosphere_pressure, wind_speed, show_thickness, rainfall});
    }
}

export default Measurement;