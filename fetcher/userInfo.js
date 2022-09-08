import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async (username, TOKEN) => {
  try {
    const userInfoQuery = gql`
      query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          avatarUrl
          bio
          location
          company
          createdAt
          email
          id
          isCampusExpert
          twitterUsername
          websiteUrl
          followers {
            totalCount
          }
          pullRequests(first: 100) {
            totalCount
          }
          organizations {
            totalCount
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
      query: userInfoQuery,
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
