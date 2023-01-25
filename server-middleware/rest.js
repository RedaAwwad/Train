require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        axios.defaults.baseURL = process.env.API_BASE_URL;
        axios.defaults.headers = { isJwt: true };
        axios.defaults.headers.common = { 'Authorization': `bearer ${process.env.TOKEN}` }
        let url = 'panel/dashboard/kpi';
        let params = null;

        for (const query in req.query) {
            if (!params) {
                params = `?${query}=${req.query[query]}`
            }
            else {
                params = `${params}&${query}=${req.query[query]}`;
            }
        }

        url = url + params;

        const result = await axios.get(url);

        return res.send(result.data);
    } catch (error) {
        console.error({ error: error.response });

        return res.status(500).json({ error: 'Unexpected Error!' })
    }
})

module.exports = app;