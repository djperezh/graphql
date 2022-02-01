const gql = require("graphql-request").gql;
const request = require("graphql-request").request;

module.exports = function (endpoint, query) {
    request(endpoint, query).then((data) => {
        console.log(data)
    });
};