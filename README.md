<h1 align="center">
  Web à Québec website
</h1>

## 🚀 Quick start

1.  **Clone repository**

    Fire up your terminal and clone the repository using SSH wherever you might want to on your computer

    ```shell
    git clone git@github.com:webaquebec/webaquebec.git
    ```

2.  **Install packages 📦**

    Navigate into the site’s directory and install packages

    ```shell
    cd webaquebec/
    yarn install
    ```

3.  **Create a new feature or fix branch**

    ```shell
    git checkout -b my-feature-branch
    ```

4.  **Start developing 👩‍💻**

    Start it up (Never stop, never stop...)

    ```shell
    yarn develop
    ```

5.  **Open the code and have fun!🤘**

    The site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

## Commit early, commit often

Whenever possible, try to commit your changes as soon as you have a small piece of code working.
We're following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in order to standardize our commit messages. We're using [commitizen](https://github.com/commitizen/cz-cli) with [gitmoji](https://gitmoji.dev/) as tools to apply those conventions.

1.  **Commit your changes**

    ```shell
      yarn commit
    ```

2.  **Select the type of change**

    ```sh
     ? Select the type of change you're committing:
       seed          🌱  Adding or updating seed files.
       flags         🚩  Adding, updating, or removing feature flags.
       animation     💫  Adding or updating animations and transitions.
     ❯ style         🎨  Improving structure / format of the code.
       perf          ⚡️  Improving performance.
       prune         🔥  Removing code or files.
       fix           🐛  Fixing a bug.
     (Move up and down to reveal more choices)
    ```

3.  **Select a scope (Not necessary at that stage. Press Enter to skip that one)**

    ```sh
    ? Select the type of change you're committing: ui      💄  Updating the UI and style files.
    ? Specify a scope:
    ```

4.  **Write a short description**

    Make your commit messages meaningful using a [semantic style](https://seesparkbox.com/foundry/semantic_commit_messages)

    ```sh
    ? Select the type of change you're committing: ui      💄  Updating the UI and style files.
    ? Specify a scope:
    ? Write a short description: Adjust button padding
      (40/75 characters)
    ```

5.  **Provide a longer description (optional. Press Enter to skip that one)**

    ```sh
      ? Select the type of change you're committing: ui       💄  Updating the UI and style files.
      ? Specify a scope:
      ? Write a short description: :lipstick:   Adjust button padding
      ? Provide a longer description:
    ```

6.  **Provide a longer description in case of a BREAKING CHANGE commit (Press Enter to skip that one if not applicable)**

    ```sh
      ? Select the type of change you're committing: ui       💄  Updating the UI and style files.
      ? Specify a scope:
      ? Write a short description: :lipstick:   Adjust button padding
      ? A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:
    ```

7.  **List any issue closed by indicating their respective id number (Press Enter to skip that one if not applicable)**

    ```sh
      ? Select the type of change you're committing: ui       💄  Updating the UI and style files.
      ? Specify a scope:
      ? Write a short description: :lipstick:   Adjust button padding
      ? A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:

      ? List any issue closed (#1, #2, ...):
    ```

8.  **You're done!**

## Push and Pull Request

1.  Once you commit all your changes, now you're ready to push your branch to the remote repository.

    ```shell
      git push origin my-feature-branch
    ```

2.  Go to [the repository](https://github.com/webaquebec/webaquebec) and make a [Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Documentation and more

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readmeutm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readmeutm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readmeutm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readmeutm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
