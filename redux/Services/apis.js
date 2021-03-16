import apisauce from 'apisauce';
import config from '../../config/url_config';


export const rootApi = apisauce.create({
    baseURL: config.API_URL,
    headers: {
        'Cache-Control': 'no-cache',
        'locale': "en"
    },
});

export const CashRoot = apisauce.create({
    baseURL: config.CASHBEEZ_URL,
    headers: {
        'Cache-Control': 'no-cache',
        'locale': "en"
    },
})

export const Fetch_store_api = (url) => {
    const res = rootApi.get(`${config.API_URL + url}`)
    //console.log("Saga DAta", res)
    return res;
}

export const Request_store_api = (url) => {
    const res = CashRoot.get(url)
    //console.log("Saga DAta", res)
    return res;
}

export const Request_filter_api = (url, body, header) => {
    const res = rootApi.post(url, body, {})
    return res;
}

export const user_auth_api = (url, body, header) => {
    return new Promise((resolve, reject) => {
        const res = rootApi.get(config.API_URL + '/auth/csrf-token').then((data) => {
            if (data.ok) {
                let res_body = {
                    ...body,
                    _token: data.data
                };
                resolve(rootApi.post(config.API_URL + '/' + url, res_body, {}))
            }
            // console.log("token", res);
        });
    })
}


export const UserFBLOgin = (token) => {
    return new Promise((resolve, reject) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token)
            .then((res) => {
                return resolve(res.json());
            }).catch((e) => {
                console.log("Error:", e);

            });
    });
}

    // return rootApi.get(config.API_URL + '/auth/csrf-token').then((data) => {
    //     if (data.ok) {
    //         let res_body = {
    //             ...body,
    //             _token: data.data
    //         };
    //         const tmp = rootApi.post(config.API_URL + '/' + url, res_body, {}).then((datas) => {
    //             console.log("data :", datas.data.data);
    //             return datas;
    //         });
    //         return tmp;
    //     }
    // });


    // console.log("data", response);
    // return response;
