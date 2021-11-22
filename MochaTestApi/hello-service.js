const mbHelper = require('./mountebank-helper');
const settings = require('./settings');

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
    return mbHelper.addService(5001, stubs);
}


function getPost() {
    const stubs = [
        {
            predicates: [{
                and: [
                    { equals: { method: "GET" } },
                    { startsWith: { "path": "/posts/" } }
                ]
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: '{ "userId": "${row}[userId]", "id": "${row}[id]", "title": "${row}[title]", "body": "${row}[body]" }'
                    },
                    _behaviors: {
                        lookup: [
                            {
                                "key": {
                                    "from": "path",
                                    "using": { "method": "regex", "selector": "/posts/(.*)$" },
                                    "index": 1
                                },
                                "fromDataSource": {
                                    "csv": {
                                        "path": "data/mock_data.csv",
                                        "keyColumn": "id"
                                    }
                                },
                                "into": "${row}"
                            }
                        ]
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(5002, stubs);
}

function getAllPost() {
    const stubs = [
        {
            predicates: [{
                and: [
                    { equals: { method: "GET" } },
                    { startsWith: { "path": "/posts" } },
                    { endsWith: { "path": "/posts" } }
                ]
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: '{ "userId": "${row}[userId]", "id": "${row}[id]", "title": "${row}[title]", "body": "${row}[body]" }'
                    },
                    _behaviors: {
                        lookup: [
                            {
                                "key": {
                                    "from": "path",
                                    "using": { "method": "regex", "selector": "/posts" },
                                    "index": 1
                                },
                                "fromDataSource": {
                                    "csv": {
                                        "path": "data/mock_data.csv",
                                        "keyColumn": "id"
                                    }
                                },
                                "into": "${row}"
                            }
                        ]
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(5003, stubs);
}


function addPost(body) {
    const stubs = [
        {
            predicates: [{
                and: [
                    { equals: { method: "POST" } },
                    { startsWith: { "path": "/posts/" } }
                ]
            }],
            responses: [
                {
                    is: {
                        statusCode: 201,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: body
                    },
                    _behaviors: {
                        lookup: [
                            {
                                "key": {
                                    "from": "path",
                                    "using": { "method": "regex", "selector": "/posts" },
                                    "index": 1
                                },
                                "fromDataSource": {
                                    "csv": {
                                        "path": "data/mock_data.csv",
                                        "keyColumn": "id"
                                    }
                                },
                                "into": "${row}"
                            }
                        ]
                    }
                }
            ]
        }
    ];

    return mbHelper.addService(5003, stubs);
}


module.exports = { getPost, addPost };