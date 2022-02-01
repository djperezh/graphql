// from https://github.com/prisma-labs/graphql-request

const gql = require("graphql-request").gql;
const request = require("graphql-request").request;

module.exports = async function (endpoint, query) {
    return await request(endpoint, query)
};