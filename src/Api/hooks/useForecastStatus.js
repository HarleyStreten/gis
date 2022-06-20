import { useState, useRef, useEffect } from "react";
import api from "../api";

// Статусы прогноза, которые означают, что он завершен
const ENDED_STATUSES = [
    "finished", "error"
];

// Интервал проверки
const CHECK_INTERVAL = 5000;

function useForecastStatus(forecast_id) {
    const [status, setStatus] = useState(null);
    const timer = useRef(null);

    useEffect(() => {
        const getStatus = () => {
            api.forecast.getStatus(forecast_id).then(({ status, response }) => {
                if (!status) return; // Если ошибка в ответе API

                setStatus(response?.status);

                if (ENDED_STATUSES.indexOf(response?.status) === -1) {
                    timer.current = setTimeout(getStatus, CHECK_INTERVAL)
                } 
            })
        }

        getStatus();

        return () => {
            clearTimeout(timer.current);
        }
    }, [forecast_id]);

    return status;
}

export default useForecastStatus;