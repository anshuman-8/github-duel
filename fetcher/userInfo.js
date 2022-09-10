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
          isGitHubStar
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
          repositories(first: 100) {
            totalCount
          }
          repositoriesContributedTo {
            totalCount
          }
          # repositories(first: 100) {
          #   totalCount
          #   nodes {
          #     stargazerCount
          #     isFork
          #     forkCount
          #     description
          #     visibility
          #     name
          #     updatedAt
          #     hasIssuesEnabled
          #     hasWikiEnabled
          #     url
          #     codeOfConduct {
          #       name
          #     }
          #     licenseInfo {
          #       name
          #     }
          #     issueTemplates {
          #       title
          #     }
          #   }
          # }
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

    const response = await client.query({
      query: userInfoQuery,
      variables: variables,
    });
  
    const data = response.data;
    return data.user;

  } catch (err) {
    console.log(err);
    return {
      statusText: "Not Found",
    };
  }
};
