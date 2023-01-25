import { formatError } from '@/utils';

export default class Dashboard {
    constructor(http) {
        this.$http = http;
    }

    getAll() {
        const url = 'panel/dashboard/kpi?dashboard_type=all';

        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.$http.get(url);
                console.log({ response });

                return resolve(response.data);
            } catch (error) {
                return reject(formatError(error));
            }
        });
    }
}