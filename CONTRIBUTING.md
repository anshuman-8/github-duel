
## Want to contribute? 🤔

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
for no Errors or Critical Warnings.

### ! All Changes Happen Through Pull Requests

### Bug Reports

**Great Bug Reports** tend to have:

-   A quick summary and/or background
-   Steps to reproduce
    -   Be specific!
    -   Share the snapshot, if possible.
    -   GitHub Readme Stats' live link
-   What actually happens
-   What you expected would happen
-   Notes (possibly including why you think this might be happening or stuff you tried that didn't work)

### Feature Request

Great Feature Requests tend to have:
- A quick idea summary
- What & why do you want to add the specific feature
- Additional context like images, links to resources to implement the feature, etc.


## Licence
By contributing, you agree that your contributions will be licensed under its MIT License.

