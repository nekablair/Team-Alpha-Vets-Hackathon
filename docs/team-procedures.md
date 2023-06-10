## Reporting Bugs

If you find a bug, check Trello to see if it's already been reported. If not, add a new card to Bugs bucket.

## Pull Request Template

You can utilize the PR Template below for the project.

### Describe your changes
- Inputchanges here
### Issue ticket number and link
- #_Number
- URL
### Checklist before requesting a review
- [ ] I have performed a self-review of my code
- [ ] If it is a core feature, I have added thorough tests.
- [ ] Do we need to implement analytics?
- [ ] Will this be part of a product update? If yes, please write one phrase about this update.

## Writing A Pull Request

Here are some general guidelines to follow when submitting a pull request.

- Name your brach with your initials and a relevant name (ex: ls/update-product-card-styling)
- If the new code will benefit from tests, include them in the initial PR, rather than a follow-up.
- Before adding a reviewer, thoroughly test and review your own PR.
- Try to keep pull requests as small and targeted as possible, making them easier to review.
- Write a thorough description with the assumption that the reviewer has little or no context. Describe the problem you're solving, your solution, as well as any other relevant info, such as testing instructions and out-of-scope work.
- If there are visual changes, include screenshots or gif.
- When your PR is ready for review, add a reviewer.
- Merge your PR promptly so it doesn't go stale.

## Reviewing A Pull Requests

- Take as much time as you need to do a proper review. Rushed reviewing lets in bad code, which wastes way more time in the long run.
- Prioritize reviewing over new work. This'll prevent the team from getting blocked and will reduce merge conflicts.
- Always pull down the branch and run it locally.
- Do your best to break the new code. Don't be satisfied with it working under ideal conditions.
- When requesting changes, use it as teaching opportunity. Take time to explain why another way might be better. Always be open to pushback.
- Don't understand the code you're reviewing? Use this as a learning opportunity by asking the author what is happening in Slack or GitHub.
- If you're only requesting a tiny change (formatting, spelling, etc.), feel free to add the comment and approve the PR anyway. This will prevent the author from getting blocked and you from having to do another review.

## Workflow

## General Dev Work During Hackathon

- Pull off of main
- Create a local feature branch
- Make changes to the code
- Add and commit changes to the feature branch
- Push the feature branch
- In Github GUI create a PR for approval and merge to the main branch

## General Dev Work Sandbox/Prototypes Pre-Hackathon

- Pull off of develop
- Create a local feature branch
- Make changes to the code
- Add and commit changes to the feature branch
- Push the feature branch
- In Github GUI create a PR for approval and merge to the develop branch

\*\*Implement the staging branch if needed. If we encounter too many bugs in main we will need to PR from dev to staging then PR to main. Although this is costly in time it may save us from ourselves.
