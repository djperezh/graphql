// from https://github.com/prisma-labs/graphql-request

//const gql = require("graphql-request").gql;
//const request = require("graphql-request").request;
const graphQLClient = require("graphql-request");

module.exports = async function (endpoint, query) {
    const qry = graphQLClient.gql`{
        showCollection {
          items { title }
        }
      }
    `;

    const client = new graphQLClient.GraphQLClient(endpoint, {
        headers: {
            authorization: "Bearer 8c7dbd270cb98e83f9d8d57fb8a2ab7bac9d7501905fb013c69995ebf1b2a719",
        },
    });
    //return await request(endpoint, query)
    return await client.request(qry);
};