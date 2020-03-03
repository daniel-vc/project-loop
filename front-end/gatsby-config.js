/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "ProjectLoop",
        // Field under which the schema is accessible, used in Gatsby query
        fieldName: "projectloop",
        url: "http://loop.test.circulareconomy.space/api",
        // Additional options to pass to node-fetch
        refetchInterval: 60,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
  ]
}