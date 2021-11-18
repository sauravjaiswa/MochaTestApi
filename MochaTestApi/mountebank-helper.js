var hippie = require('hippie');
const settings = require('./settings');

function postImposter(body) {
    const url = `http://localhost:${settings.port}/imposters`;

    return hippie()
        .header("Content-Type", "application/json")
        .json()
        .post(url)
        .body(JSON.stringify(body))
        .end(function (err, res, body) {
            if (err) throw err;
            process.exit(0);
        });
    //return fetch(url, {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify(body)
    //});
}

module.exports = { postImposter };