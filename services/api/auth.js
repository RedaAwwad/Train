import { formatError } from '@/utils';

export default class Auth {
    constructor(SERVICE) {
        this.SERVICE = SERVICE;
    }

    async login(data) {
        const url = 'login';

        return await new Promise(async (resolve, reject) => {
            try {
                const response = await this.SERVICE.post(url, data);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }

    async register(data) {
        const url = 'register';

        return await new Promise(async (resolve, reject) => {
            try {
                const response = await this.SERVICE.post(url, data);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }

    async me() {
        const url = 'profile';

        return await new Promise(async (resolve, reject) => {
            try {
                const response = await this.SERVICE.get(url);

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }
}