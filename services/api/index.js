/**
 * API config
 */
import Auth from './auth';
import Dashboard from './dashboard';

// axios
import axios from 'axios';

class API {
    constructor(http) {
        this.$http = http;
    }

    initServices() {
        this.Auth = new Auth(this.$http);
        this.Dashboard = new Dashboard(this.$http);
    }
}

export default ({ $axiosWithAuth, $axiosNoAuth }, inject) => {
    const $axios = axios.create({
        baseURL: process.env.API_BASE_URL,
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    });
    const ApiServices = new API($axios);

    // $axios.get(`${process.env.API_BASE_URL}panel/dashboard/kpi?dashboard_type=all`)
    //     .then(res => console.log(res))

    ApiServices.initServices();

    inject('API', ApiServices);
}