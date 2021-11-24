const mbHelper = require('./mountebank-helper');
const settings = require('./settings');

const data = [{ "userId": 1, "id": 1, "title": "Structural Analysis Engineer", "body": "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus" },
    { "userId": 1, "id": 2, "title": "Geological Engineer", "body": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices" },
    { "userId": 1, "id": 3, "title": "Research Associate", "body": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia" },
    { "userId": 1, "id": 4, "title": "Project Manager", "body": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus" },
    { "userId": 1, "id": 5, "title": "Safety Technician I", "body": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur" },
    { "userId": 1, "id": 6, "title": "Biostatistician I", "body": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam" },
    { "userId": 1, "id": 7, "title": "Senior Sales Associate", "body": "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in" },
    { "userId": 1, "id": 8, "title": "Food Chemist", "body": "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu" },
    { "userId": 1, "id": 9, "title": "Senior Editor", "body": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices" }];


function helloWorld() {
    const response = { message: "hello world" }

    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "GET",
                    "path": "/"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(response)
                    }
                }
            ]
        }
    ];

    //console.log(imposter);
    return mbHelper.addService(stubs);
}


function getPost() {
    const body = { "userId": 1, "id": 1, "title": "Structural Analysis Engineer", "body": "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus" };
    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "GET",
                    "path": "/posts/1",

                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: body
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}

function getAllPost() {
    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "GET",
                    "path": "/posts",

                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: data
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}


function addPost() {
    const body = { "userId": 1, "id": 10, "title": "ABC", "body": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices" };

    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "POST",
                    "path": "/posts",
                    "body": body
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 201,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {}
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}


function putPost() {
    const body = { "userId": 1, "id": 1, "title": "ABC", "body": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices" };

    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "PUT",
                    "path": "/posts/1",
                    "body": body
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 202,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {}
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}

function patchPost() {
    const body = { "userId": 1, "id": 1, "title": "ABC", "body": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices" };

    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "PATCH",
                    "path": "/posts/1",
                    "body": body
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 202,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {}
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}

function deletePost() {
    const stubs = [
        {
            predicates: [{
                equals: {
                    method: "DELETE",
                    "path": "/posts/1"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(stubs);
}


module.exports = { getAllPost, getPost, addPost, putPost, patchPost, deletePost };