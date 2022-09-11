# GitHub ⚔️ Duel
----

### Compare your GitHub profiles with your friends


---
## Want to contribute?

1. Clone the repository
```bash
git clone git@github.com:anshuman-8/github-duel.git
cd github-duel
```
2. Install all the packages
```bash
npm i 
```
3. Set up environment variable for the GitHub API.
    Get a GitHub access token with with all `repo` and `user` access.
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

