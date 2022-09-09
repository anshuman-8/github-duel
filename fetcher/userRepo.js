import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async (username, TOKEN) => {
  try {
    const userRepoQuery = gql`
      query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          repositories(first: 100 isFork: false ownerAffiliations: OWNER  privacy: PUBLIC) {
            totalCount
            nodes {
              stargazerCount
              forkCount
              description
              name
              url
              codeOfConduct {
                name
              }
              licenseInfo {
                name
              }
              issueTemplates {
                title
              }
              pullRequestTemplates {
                filename
              }
              pullRequests {
                totalCount
              }
            }
          }
        }
      }
    `;

    const variables = {
      username: username,
    };

    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache(),
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    // console.log("Client: ", client);

    const response = await client.query({
      query: userRepoQuery,
      variables: variables,
    });
    // console.log("response: ", response.data);
    // return data.user;
    const data = response.data;

    return data.user;
  } catch (err) {
    console.log(err);
    return {
      statusText: "Not Found",
    };
  }
};
