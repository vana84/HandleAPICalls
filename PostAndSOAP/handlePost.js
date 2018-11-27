const axios = require('axios');
let url = 'https://jsonplaceholder.typicode.com';
axios({
    method: 'post',
    url: url + '/posts',
    headers: {
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=utf-8'
    },
    data: {
        title: 'foo',
        body: 'bar',
        userID: 1
    }
}).then(function (resp) {
    let data = {
        statusCode: resp.status,
        id: resp.data.id
    };
    console.log('Post call Result:', data);
}).catch(function (error) {
    console.log(error);
});