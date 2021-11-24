const mb = require('mountebank');
const settings = require('./settings');
const helloService = require('./hello-service');

const mbServerInstance = mb.create({
    port: settings.port,
    pidfile: '../mb.pid',
    logfile: '../mb.log',
    protofile: '../protofile.json',
    ipWhitelist: ['*']
});

mbServerInstance.then(function () {
    const body = { "userId": 1, "id": 10, "title": "ABC", "body": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices" };

    //helloService.helloWorld();
    helloService.getPost();
    helloService.getAllPost();
    helloService.addPost();
    helloService.putPost();
    helloService.patchPost();
    helloService.deletePost();
});