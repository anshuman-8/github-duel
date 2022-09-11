import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default async (username) => {
  try {
    const userInfoQuery = gql`
      query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          avatarUrl
          bio
          location
          # company
          # createdAt
          # email
          # id
          isCampusExpert
          isBountyHunter
          isDeveloperProgramMember
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
          contributionsCollection {
            # totalCommitContributions
            totalIssueContributions
            # totalPullRequestContributions
            # totalRepositoryContributions
            contributionCalendar {
              totalContributions
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
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });

    console.log();

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
