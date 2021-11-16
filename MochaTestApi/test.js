var hippie=require('hippie');

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
                    genus: "Malus",
                    name: "Apple",
                    id: 6,
                    family: "Rosaceae",
                    order: "Rosales"
                })
                .end();
        });
    });


    describe('Posts Controller', function () {

        //GET
        it('Get All Posts', function () {
            hippie()
                .json()
                .base('https://localhost:44337')
                .get('/api/posts')
                .expectStatus(200)
                .end();
        });

        it('Get Post By id', function () {
            hippie()
                .json()
                .base('https://localhost:44337')
                .get('/api/posts/1872')
                .expectStatus(200)
                .expectBody({
                    userId: 1,
                    id: 110,
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                })
                .end();
        });


        //POST
        it('Add Post', function () {
            var post = {
                userId: 1,
                id: 110,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .post('/api/posts')
                .send(post)
                .expectStatus(201)
                .end();
        });


        it.only('Add Post should give error 400', function () {
            var post = {
                userId: 1,
                id: "110",
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            };
            hippie()
                .json()
                .base('https://localhost:44337')
                .post('/api/posts')
                .send(post)
                .expectStatus(201)
                .end();
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
                .put('/api/posts/1')
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
                .put('/api/posts/1')
                .send(post)
                .expectStatus(201)
                .end();
        });

    });
});
