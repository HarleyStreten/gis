import { connector } from "../connector";

const Auth = {
    direct: async (login, password, return_user) => {
        const path = 'auth.direct';
        return await connector.post(path, { login, password, return_user });
    },

    logout: async () => {
        const path = 'auth.logout';
        return await connector.post(path, {});
    },

    checkAccessToken: async () => {
        const path = 'auth.checkAccessToken';
        return await connector.get(path, {});
    }
}

export default Auth;