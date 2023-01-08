/**
 * API config
 */
import Auth from './Auth';

export default ({ $axiosWithAuth, $axiosNoAuth }, inject) => {
    const API = {
        Auth: new Auth($axiosWithAuth),
    };

    inject('API', API);
}