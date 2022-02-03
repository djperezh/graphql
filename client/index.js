const graphqlRequest = require('./myModule.js')
const gql = require("graphql-request").gql;

// This could be set by config values
// const endpoint = 'http://127.0.0.1:8080/graphql';
// const query = gql`
//     {
//         getAliens {
//             id
//             firstName
//             lastName
//             planet
//         } 
//     }
// `

const endpoint = 'https://graphql.contentful.com/content/v1/spaces/mt0pmhki5db7';
const query = gql`{
    showCollection {
      items { title }
    }
  }
`

// GraphQL API function
graphqlRequest(endpoint, query).then(function(result) {
    result.showCollection.items.forEach(item => {
        console.log(item.title)
    });

    // Print to console
    // result.getAliens.forEach(alien => {
    //     console.log(`[${alien.id}] ${alien.firstName} (from: ${alien.planet})`)
    // });
});