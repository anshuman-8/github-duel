# GitHub ⚔️ Duel



### Deployed at 🚀: https://githubduel.vercel.app/ 

## Compare your GitHub profiles with your friends 

It gives score to GitHub profile based on repositories, contributions, pull request, issues and other factors.

Go checkout the [site](https://githubduel.vercel.app/) and check who wins! 😎


---
## Want to contribute? 🤔

1. Fork this repository and then Clone it
```bash
git clone {{repo URL}}
cd github-duel
```
2. Install all the packages
```bash
npm i 
```
3. Set up environment variable for the GitHub API.

    Get a GitHub Personal access token with scope of all `repo` and `user` access.
    Then set the token in `.env.local` file in root folder as
```.env
NEXT_PUBLIC_TOKEN: <your token>
```
4. To run the website locally 
```bash
npm run dev
```
5. Before making any PRs, confirm your build with 

```bash
npm run build
npm run export
```
for no Errors or Critical Warnings

