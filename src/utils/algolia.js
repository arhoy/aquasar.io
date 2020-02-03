const algoliaQuery = `

{
    allContentfulAlexQuasarArticles {
      nodes {
       slug
       title
       description
       tags
      }
    }
    allContentfulBlogPost {
      nodes {
        slug
        title
        description
        tags
      }
    }
  }
  
`;

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) =>
      data.allContentfulAlexQuasarArticles.nodes.concat(
        data.allContentfulBlogPost.nodes,
      ),
  },
];
console.log('queries', queries);
module.exports = queries;
