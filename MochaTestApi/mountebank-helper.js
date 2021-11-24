var hippie = require('hippie');
const settings = require('./settings');

function postImposter(body) {
    //console.log(body);
    const url = `http://localhost:${settings.port}/imposters`;

    return hippie()
        //.json()
        .post(url)
        .header('Content-Type', 'application/json')
        .send(JSON.stringify(body))
        .end(function (err, res, body) {
            if (err) throw err;
            console.log(body);

            //process.exit(0);
        });
}

function addService(stubs) {
    const imposter = {
        //imposters: [
            //{
                port: 5001,
                protocol: 'http',
                stubs: stubs
          //  }

        //]
    };

    return postImposter(imposter);
}

module.exports = { addService };