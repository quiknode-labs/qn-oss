# Contributing to QuickNode

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to QuickNode and its packages, which are hosted in the [QuickNode Organization](https://github.com/QuickNode) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute)

  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Additional Notes](#additional-notes)

  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)


## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for QuickNode. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/QuickNode/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Check the [debugging guide](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/).** You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem [in the latest version of QuickNode](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#update-to-the-latest-version), if the problem happens when you run QuickNode in [safe mode](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#check-if-the-problem-shows-up-in-safe-mode), and if you can get the desired behavior by changing [QuickNode's or packages' config settings](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#check-QuickNode-and-package-settings).
* **Check the [faq](https://flight-manual.QuickNode.io/faq/) and the [discussions](https://github.com/QuickNode/QuickNode/discussions)** for a list of common questions and problems.
* **Determine [which repository the problem should be reported in](#QuickNode-and-packages)**.
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3AQuickNode)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#QuickNode-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](https://github.com/QuickNode/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started QuickNode, e.g. which command exactly you used in the terminal, or how you started QuickNode otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an QuickNode command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/QuickNode/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that QuickNode crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a [CPU profile capture](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#diagnose-runtime-performance) with your report.
* **If Chrome's developer tools pane is shown without you triggering it**, that normally means that you have a syntax error in one of your themes or in your `styles.less`. Try running in [Safe Mode](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#using-safe-mode) and using a different theme or comment out the contents of your `styles.less` to see if that fixes the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem in [safe mode](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#diagnose-runtime-performance-problems-with-the-dev-tools-cpu-profiler)?**
* **Did the problem start happening recently** (e.g. after updating to a new version of QuickNode) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of QuickNode?** What's the most recent version in which the problem doesn't happen? You can download older versions of QuickNode from [the releases page](https://github.com/QuickNode/QuickNode/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of QuickNode are you using?** You can get the exact version by running `QuickNode -v` in your terminal, or by starting QuickNode and running the `Application: About` command from the [Command Palette](https://github.com/QuickNode/command-palette).
* **What's the name and version of the OS you're using**?
* **Are you running QuickNode in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Which [packages](#QuickNode-and-packages) do you have installed?** You can get that list by running `apm list --installed`.
* **Are you using [local configuration files](https://flight-manual.QuickNode.io/using-QuickNode/sections/basic-customization/)** `config.cson`, `keymap.cson`, `snippets.cson`, `styles.less` and `init.coffee` to customize QuickNode? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Are you using QuickNode with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for QuickNode, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/QuickNode/.github/blob/master/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [debugging guide](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of QuickNode](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#update-to-the-latest-version) and if you can get the desired behavior by changing [QuickNode's or packages' config settings](https://flight-manual.QuickNode.io/hacking-QuickNode/sections/debugging/#check-QuickNode-and-package-settings).
* **Check if there's already [a package](https://QuickNode.io/packages) which provides that enhancement.**
* **Determine [which repository the enhancement should be suggested in](#QuickNode-and-packages).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3AQuickNode)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#QuickNode-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of QuickNode which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most QuickNode users and isn't something that can or should be implemented as a [community package](#QuickNode-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of QuickNode you're using.** You can get the exact version by running `QuickNode -v` in your terminal, or by starting QuickNode and running the `Application: About` command from the [Command Palette](https://github.com/QuickNode/command-palette).
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to QuickNode? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

If you want to read about using QuickNode or developing packages in QuickNode, the [QuickNode Flight Manual](https://flight-manual.QuickNode.io) is free and available online. You can find the source to the manual in [QuickNode/flight-manual.QuickNode.io](https://github.com/QuickNode/flight-manual.QuickNode.io).

#### Local development

QuickNode Core and all packages can be developed locally. For instructions on how to do this, see the following sections in the [QuickNode Flight Manual](https://flight-manual.QuickNode.io):

* [Hacking on QuickNode Core][hacking-on-QuickNode-core]
* [Contributing to Official QuickNode Packages][contributing-to-official-QuickNode-packages]

### Pull Requests

The process described here has several goals:

- Maintain QuickNode's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible QuickNode
- Enable a sustainable system for QuickNode's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.


## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all QuickNode repositories, but some are specific to `QuickNode/QuickNode`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `QuickNode/QuickNode` and all QuickNode-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `QuickNode/QuickNode` which haven't been reviewed yet](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `QuickNode/QuickNode` only and also across all QuickNode repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue has a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `QuickNode/QuickNode` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `QuickNode/QuickNode` :mag_right: | `QuickNode`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-QuickNode-repo-label-enhancement] | [search][search-QuickNode-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-QuickNode-repo-label-bug] | [search][search-QuickNode-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-QuickNode-repo-label-question] | [search][search-QuickNode-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-QuickNode-repo-label-feedback] | [search][search-QuickNode-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-QuickNode-repo-label-help-wanted] | [search][search-QuickNode-org-label-help-wanted] | The QuickNode core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-QuickNode-repo-label-beginner] | [search][search-QuickNode-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to QuickNode. |
| `more-information-needed` | [search][search-QuickNode-repo-label-more-information-needed] | [search][search-QuickNode-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-QuickNode-repo-label-needs-reproduction] | [search][search-QuickNode-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-QuickNode-repo-label-blocked] | [search][search-QuickNode-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-QuickNode-repo-label-duplicate] | [search][search-QuickNode-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-QuickNode-repo-label-wontfix] | [search][search-QuickNode-org-label-wontfix] | The QuickNode core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-QuickNode-repo-label-invalid] | [search][search-QuickNode-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-QuickNode-repo-label-package-idea] | [search][search-QuickNode-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending QuickNode or core QuickNode packages. |
| `wrong-repo` | [search][search-QuickNode-repo-label-wrong-repo] | [search][search-QuickNode-org-label-wrong-repo] | Issues reported on the wrong repository (e.g. a bug related to the [Settings View package](https://github.com/QuickNode/settings-view) was reported on [QuickNode core](https://github.com/QuickNode/QuickNode)). |

#### Topic Categories

| Label name | `QuickNode/QuickNode` :mag_right: | `QuickNode`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-QuickNode-repo-label-windows] | [search][search-QuickNode-org-label-windows] | Related to QuickNode running on Windows. |
| `linux` | [search][search-QuickNode-repo-label-linux] | [search][search-QuickNode-org-label-linux] | Related to QuickNode running on Linux. |
| `mac` | [search][search-QuickNode-repo-label-mac] | [search][search-QuickNode-org-label-mac] | Related to QuickNode running on macOS. |
| `documentation` | [search][search-QuickNode-repo-label-documentation] | [search][search-QuickNode-org-label-documentation] | Related to any type of documentation (e.g. [API documentation](https://QuickNode.io/docs/api/latest/) and the [flight manual](https://flight-manual.QuickNode.io/)). |
| `performance` | [search][search-QuickNode-repo-label-performance] | [search][search-QuickNode-org-label-performance] | Related to performance. |
| `security` | [search][search-QuickNode-repo-label-security] | [search][search-QuickNode-org-label-security] | Related to security. |
| `ui` | [search][search-QuickNode-repo-label-ui] | [search][search-QuickNode-org-label-ui] | Related to visual design. |
| `api` | [search][search-QuickNode-repo-label-api] | [search][search-QuickNode-org-label-api] | Related to QuickNode's public APIs. |
| `uncaught-exception` | [search][search-QuickNode-repo-label-uncaught-exception] | [search][search-QuickNode-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package](https://github.com/QuickNode/notifications). |
| `crash` | [search][search-QuickNode-repo-label-crash] | [search][search-QuickNode-org-label-crash] | Reports of QuickNode completely crashing. |
| `auto-indent` | [search][search-QuickNode-repo-label-auto-indent] | [search][search-QuickNode-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-QuickNode-repo-label-encoding] | [search][search-QuickNode-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-QuickNode-repo-label-network] | [search][search-QuickNode-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-QuickNode-repo-label-git] | [search][search-QuickNode-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `QuickNode/QuickNode` Topic Categories

| Label name | `QuickNode/QuickNode` :mag_right: | `QuickNode`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `editor-rendering` | [search][search-QuickNode-repo-label-editor-rendering] | [search][search-QuickNode-org-label-editor-rendering] | Related to language-independent aspects of rendering text (e.g. scrolling, soft wrap, and font rendering). |
| `build-error` | [search][search-QuickNode-repo-label-build-error] | [search][search-QuickNode-org-label-build-error] | Related to problems with building QuickNode from source. |
| `error-from-pathwatcher` | [search][search-QuickNode-repo-label-error-from-pathwatcher] | [search][search-QuickNode-org-label-error-from-pathwatcher] | Related to errors thrown by the [pathwatcher library](https://github.com/QuickNode/node-pathwatcher). |
| `error-from-save` | [search][search-QuickNode-repo-label-error-from-save] | [search][search-QuickNode-org-label-error-from-save] | Related to errors thrown when saving files. |
| `error-from-open` | [search][search-QuickNode-repo-label-error-from-open] | [search][search-QuickNode-org-label-error-from-open] | Related to errors thrown when opening files. |
| `installer` | [search][search-QuickNode-repo-label-installer] | [search][search-QuickNode-org-label-installer] | Related to the QuickNode installers for different OSes. |
| `auto-updater` | [search][search-QuickNode-repo-label-auto-updater] | [search][search-QuickNode-org-label-auto-updater] | Related to the auto-updater for different OSes. |
| `deprecation-help` | [search][search-QuickNode-repo-label-deprecation-help] | [search][search-QuickNode-org-label-deprecation-help] | Issues for helping package authors remove usage of deprecated APIs in packages. |
| `electron` | [search][search-QuickNode-repo-label-electron] | [search][search-QuickNode-org-label-electron] | Issues that require changes to [Electron](https://electron.QuickNode.io) to fix or implement. |

#### Pull Request Labels

| Label name | `QuickNode/QuickNode` :mag_right: | `QuickNode`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-QuickNode-repo-label-work-in-progress] | [search][search-QuickNode-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-QuickNode-repo-label-needs-review] | [search][search-QuickNode-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or QuickNode core team. |
| `under-review` | [search][search-QuickNode-repo-label-under-review] | [search][search-QuickNode-org-label-under-review] | Pull requests being reviewed by maintainers or QuickNode core team. |
| `requires-changes` | [search][search-QuickNode-repo-label-requires-changes] | [search][search-QuickNode-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-QuickNode-repo-label-needs-testing] | [search][search-QuickNode-org-label-needs-testing] | Pull requests which need manual testing. |

[search-QuickNode-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aenhancement
[search-QuickNode-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aenhancement
[search-QuickNode-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Abug
[search-QuickNode-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Abug
[search-QuickNode-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aquestion
[search-QuickNode-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aquestion
[search-QuickNode-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Afeedback
[search-QuickNode-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Afeedback
[search-QuickNode-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Ahelp-wanted
[search-QuickNode-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Ahelp-wanted
[search-QuickNode-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Abeginner
[search-QuickNode-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Abeginner
[search-QuickNode-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Amore-information-needed
[search-QuickNode-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Amore-information-needed
[search-QuickNode-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aneeds-reproduction
[search-QuickNode-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aneeds-reproduction
[search-QuickNode-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Atriage-help-needed
[search-QuickNode-org-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Atriage-help-needed
[search-QuickNode-repo-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Awindows
[search-QuickNode-org-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Awindows
[search-QuickNode-repo-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Alinux
[search-QuickNode-org-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Alinux
[search-QuickNode-repo-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Amac
[search-QuickNode-org-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Amac
[search-QuickNode-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Adocumentation
[search-QuickNode-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Adocumentation
[search-QuickNode-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aperformance
[search-QuickNode-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aperformance
[search-QuickNode-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Asecurity
[search-QuickNode-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Asecurity
[search-QuickNode-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aui
[search-QuickNode-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aui
[search-QuickNode-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aapi
[search-QuickNode-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aapi
[search-QuickNode-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Acrash
[search-QuickNode-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Acrash
[search-QuickNode-repo-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aauto-indent
[search-QuickNode-org-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aauto-indent
[search-QuickNode-repo-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aencoding
[search-QuickNode-org-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aencoding
[search-QuickNode-repo-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Anetwork
[search-QuickNode-org-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Anetwork
[search-QuickNode-repo-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Auncaught-exception
[search-QuickNode-org-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Auncaught-exception
[search-QuickNode-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Agit
[search-QuickNode-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Agit
[search-QuickNode-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Ablocked
[search-QuickNode-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Ablocked
[search-QuickNode-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aduplicate
[search-QuickNode-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aduplicate
[search-QuickNode-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Awontfix
[search-QuickNode-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Awontfix
[search-QuickNode-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Ainvalid
[search-QuickNode-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Ainvalid
[search-QuickNode-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Apackage-idea
[search-QuickNode-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Apackage-idea
[search-QuickNode-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Awrong-repo
[search-QuickNode-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Awrong-repo
[search-QuickNode-repo-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aeditor-rendering
[search-QuickNode-org-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aeditor-rendering
[search-QuickNode-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Abuild-error
[search-QuickNode-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Abuild-error
[search-QuickNode-repo-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aerror-from-pathwatcher
[search-QuickNode-org-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aerror-from-pathwatcher
[search-QuickNode-repo-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aerror-from-save
[search-QuickNode-org-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aerror-from-save
[search-QuickNode-repo-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aerror-from-open
[search-QuickNode-org-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aerror-from-open
[search-QuickNode-repo-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Ainstaller
[search-QuickNode-org-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Ainstaller
[search-QuickNode-repo-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Aauto-updater
[search-QuickNode-org-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aauto-updater
[search-QuickNode-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AQuickNode%2FQuickNode+label%3Adeprecation-help
[search-QuickNode-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Adeprecation-help
[search-QuickNode-repo-label-electron]: https://github.com/search?q=is%3Aissue+repo%3AQuickNode%2FQuickNode+is%3Aopen+label%3Aelectron
[search-QuickNode-org-label-electron]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AQuickNode+label%3Aelectron
[search-QuickNode-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+label%3Awork-in-progress
[search-QuickNode-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AQuickNode+label%3Awork-in-progress
[search-QuickNode-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+label%3Aneeds-review
[search-QuickNode-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AQuickNode+label%3Aneeds-review
[search-QuickNode-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+label%3Aunder-review
[search-QuickNode-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AQuickNode+label%3Aunder-review
[search-QuickNode-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+label%3Arequires-changes
[search-QuickNode-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AQuickNode+label%3Arequires-changes
[search-QuickNode-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AQuickNode%2FQuickNode+label%3Aneeds-testing
[search-QuickNode-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AQuickNode+label%3Aneeds-testing

[beginner]:https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3AQuickNode+sort%3Acomments-desc
[help-wanted]:https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3AQuickNode+sort%3Acomments-desc+-label%3Abeginner
[contributing-to-official-QuickNode-packages]:https://flight-manual.QuickNode.io/hacking-QuickNode/sections/contributing-to-official-QuickNode-packages/
[hacking-on-QuickNode-core]: https://flight-manual.QuickNode.io/hacking-QuickNode/sections/hacking-on-QuickNode-core/