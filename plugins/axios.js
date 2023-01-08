export default ({ error, $axios, store }, inject) => {
    const axiosWithAuth = $axios.create();
    const axiosNoAuth = $axios.create();

    // axiosWithAuth.onResponse(response => {

    // });

    axiosWithAuth.onRequest(config => {
        const token = store.$auth.strategy?.token?.get();
        if (token) axiosWithAuth.defaults.headers.common["Authorization"] = token;
    });

    axiosWithAuth.onError(res => {
        if (res.response?.status === 500) {
            error({ statusCode: 500, message: 'Internal server error!' });
        } else if (res.response?.status === 401) {
            error({ statusCode: 401, message: 'Unauthorized!' });
        }
    });

    delete axiosNoAuth.defaults.headers.common["Authorization"];
    axiosNoAuth.onError(response => {
        if (res.response?.status === 500) {
            error({ statusCode: 500, message: 'Internal server error!' });
        }
    });

    inject('axiosWithAuth', axiosWithAuth);
    inject('axiosNoAuth', axiosNoAuth);
}
