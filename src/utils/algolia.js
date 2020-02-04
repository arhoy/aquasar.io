const algoliaQuery = `

{
    allContentfulAlexQuasarArticles {
      nodes {
       slug
       title
       description {
         id
         description
       }
       tags
      }
    }
  }
  
`;

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => data.allContentfulAlexQuasarArticles.nodes,
  },
];
console.log('queries', queries);
module.exports = queries;
