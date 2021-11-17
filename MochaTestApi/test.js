var hippie = require('hippie');
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
    describe('Fruits Controller', function () {
        it('Get All Fruits', function () {
            hippie()
                .json()
                .base('https://localhost:44337')
                .get('/api/fruits')
                .expectStatus(200)
                .end();
        });
        it('Get Fruit By id', function () {
            hippie()
                .json()
                .base('https://localhost:44337')
                .get('/api/fruits/jsdhg')
                .expectStatus(200)
                .expectBody({
                
            })
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });
    });
    describe('Posts Controller', function () {
        //GET
        it('Get All Posts', function () {
            hippie()
                .json()
                .base('https://localhost:44337')
                .get('/api')
                .expectStatus(200)
                .end();
        });
        it('Get Post By id', function () {
            hippie()
                .json()
                .base('http://localhost:25518')
                .get('/api/110')
                .expectStatus(200)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
            });
        });
        //POST
        it('Add Post', function () {
            var post = {
                userId: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('http://localhost:25518')
                .post('/api')
                .send(post)
                .expectStatus(201)
                .end(function (err, res, body) {
                    if (err) throw err;
                    console.log(res);
                    process.exit(0);
                });
        });
        it.only('Add Post should give error 400', function () {
            var postModel = {
                userId: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('http://localhost:25518')
                .post('/api/add')
                .send(postModel)
                .expectStatus(201)
                .end();
            /*hippie()
                .get('https://api.github.com/users/vesln')
                .expect(function (res, body, next) {
                    var err = assertSomething;
                    next(err);
                })
                .end(function (err, res, body) {
                    if (err) throw err;
                });*/
        });
        it('Put Post', function () {
            var post = {
                userId: 1,
                title: "sunt",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .put('/api/1')
                .send(post)
                .expectStatus(201)
                .end();
        });
        it('Put Post should give error 400', function () {
            var post = {
                userId: 1,
                title: "sunt",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .put('/api/1')
                .send(post)
                .expectStatus(201)
                .end();
        });
        //PATCH
        it('Patch Post', function () {
            var post = {
                title: "changing"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .patch('/api/1')
                .send(post)
                .expectStatus(201)
                .end();
        });
        it('Patch Post should give error 400', function () {
            var post = {
                userId: "89"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .patch('/api/1')
                .send(post)
                .expectStatus(201)
                .end();
        });
        //DELETE
        it('Delete Post', function () {
            hippie()
                .json()
                .base('https://localhost:44337/api/1')
                .method('DELETE')
                .expectStatus(200)
                .end();
        });



        it('Hippie test', function () {
            hippie()
                .header("User-Agent", "hippie")
                .json()
                .get('https://api.github.com/users/vesln')
                .expectStatus(400)
                .end(function (err, res, body) {
                    if (err) throw err;
                });
        });
    });
});