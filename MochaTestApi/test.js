var hippie = require('hippie');
var baseUrl = 'http://localhost:25518';

/*describe('Github api', function () {
    describe('GET /users/vesln', function () {
        it('should return 200', function () {
            //assert.equal([1, 2, 3].indexOf(4), -1);

            hippie()
                .header("User-Agent", "hippie")
                .json()
                .base('https://api.github.com')
                .get('/users/vesln')
                .expectStatus(200)
                .end(function (err, res, body) {
                    if (err)
                        throw err;
                    process.exit(0);
                });

        });

        it('should return 404', function () {
            //assert.equal([1, 2, 3].indexOf(4), -1);

            hippie()
                .header("User-Agent", "hippie")
                .json()
                .base('https://api.github.com')
                .get('/user/vesln')
                .expectStatus(404)
                .end(function (err, res, body) {
                    if (err)
                        throw err;
                    process.exit(0);
                });

        });
    });
});*/
describe('Mocha API Tests', function () {
    //describe('Fruits Controller', function () {
    //    it('Get All Fruits', function () {
    //        hippie()
    //            .json()
    //            .base(baseUrl)
    //            .get('/api/fruits')
    //            .expectStatus(200)
    //            .end();
    //    });
    //    it('Get Fruit By id', function () {
    //        hippie()
    //            .json()
    //            .base(baseUrl)
    //            .get('/api/fruits/jsdhg')
    //            .expectStatus(200)
    //            .expectBody({
                
    //        })
    //            .end(function (err, res, body) {
    //                if (err) throw err;
    //                console.log(res);
    //                process.exit(0);
    //            });
    //    });
    //});



    describe('Posts Controller', function () {
        //GET
        it('Get All Posts get 200 code', function () {
            hippie()
                .json()
                .base(baseUrl)
                .get('/api')
                .expectStatus(200)
                .end(function (err, res, body) {
                    if (err) throw err;
                    //console.log(res);
                    process.exit(0);
                });
        });

        it.only('Get Post By id get 200 code', function () {
            hippie()
                .json()
                .base(baseUrl)
                .get('/api/1')
                .expectStatus(200)
                .expectBody({
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                })
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });

        it('Get Post By giving wrong id getting 404 code', function () {
            hippie()
                .json()
                .base(baseUrl)
                .get('/api/18736')
                .expectStatus(404)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });


        //POST
        it('Add Post get 201 code', function () {
            var post = {
                userId: 1,
                id: 108,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base(baseUrl)
                .post('/api')
                .send(post)
                .expectStatus(201)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });

        it('Add Post should give error 400 on passing incorrect model', function () {
            var postModel = {
                userId: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base(baseUrl)
                .post('/api')
                .send(postModel)
                .expectStatus(400)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });



        //PUT
        it('Put Post get 202 code', function () {
            var post = {
                userId: 1,
                id: 1,
                title: "sunt",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base(baseUrl)
                .put('/api/1')
                .send(post)
                .expectStatus(202)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });


        it('Put Post should give error 400 on passing incorrect model', function () {
            var post = {
                userId: 1,
                id: "1",
                title: "sunt",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base(baseUrl)
                .put('/api/1')
                .send(post)
                .expectStatus(400)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });


        it('Put Post should give error 404 on passing incorrect id', function () {
            var post = {
                userId: 1,
                id: 1865,
                title: "sunt",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base(baseUrl)
                .put('/api/1865')
                .send(post)
                .expectStatus(404)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });




        //PATCH
        it('Patch Post get 202 code', function () {
            var post = {
                title: "changing"
            };
            hippie()
                .json()
                .base(baseUrl)
                .patch('/api/1')
                .send(post)
                .expectStatus(202)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });


        it('Patch Post should give error 400 by passing incorrect model', function () {
            var post = {
                userId: "89"
            };
            hippie()
                .json()
                .base(baseUrl)
                .patch('/api/1')
                .send(post)
                .expectStatus(400)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });


        it('Patch Post should give error 404 by passing wrong id', function () {
            var post = {
                userId: 89
            };
            hippie()
                .json()
                .base(baseUrl)
                .patch('/api/1972')
                .send(post)
                .expectStatus(404)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });



        //DELETE
        it('Delete Post get 200 code', function () {
            hippie()
                .json()
                .base(baseUrl + '/api/1')
                .method('DELETE')
                .expectStatus(200)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });

        it('Delete Post get 404 code', function () {
            hippie()
                .json()
                .base(baseUrl + '/api/1987')
                .method('DELETE')
                .expectStatus(404)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(body);
                    process.exit(0);
                });
        });



        //it('Hippie test', function () {
        //    hippie()
        //        .header("User-Agent", "hippie")
        //        .json()
        //        .get('https://api.github.com/users/vesln')
        //        .expectStatus(400)
        //        .end(function (err, res, body) {
        //            if (err) throw err;
        //        });
        //});
    });
});