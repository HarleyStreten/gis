import { useEffect, useState } from "react";
import api from "../api";

// Хук для проверки: авторизаован ли пользователь
function useAuth() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        api.auth.checkAccessToken().then(({status, response}) => {
            if (!status) return;
            setIsAuthorized(response?.result);
        })
    }, []);

    return isAuthorized;
}

export default useAuth;