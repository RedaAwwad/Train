/**
 * API config
 */
import Auth from './auth';

export default ({ $axiosWithAuth, $axiosNoAuth }, inject) => {
    const API = {
        Auth: new Auth($axiosWithAuth),
    };

    inject('API', API);
}