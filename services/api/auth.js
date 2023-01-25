import { formatError } from '@/utils';

export default class Auth {
    constructor($http) {
        this.$http = $http;
    }

    login(data) {
        const url = 'login';

        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$http.post(url, data);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }

    register(data) {
        const url = 'register';

        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$http.post(url, data);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }

    me() {
        const url = 'profile';

        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$http.get(url);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }
}