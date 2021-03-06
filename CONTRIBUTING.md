## How To Contribute

### About the App Structure

This app depends on the following libraries:

* [react](https://github.com/facebook/react) for the view layer
* [redux](https://github.com/reactjs/redux) for state management
* [axios](https://github.com/mzabriskie/axios) for asynchronous API calls
* [redux-thunk](https://github.com/gaearon/redux-thunk) for performing asynchronous redux dispatches
* [redux-persist](https://github.com/rt2zz/redux-persist) for persisting selective state to and from localStorage
* [create-react-app](https://github.com/facebookincubator/create-react-app) for bundling and development

From a functionality-perspective this app is composed of a number of widgets which the user can interact with to view or record information including weather, links, todos, notes, a "zen" background video and options.

The widgets included are:

* News:
  * Feature: Display categorized news from Reddit or specified RSS
  * Status: **Not implemented**
* Note:
  * Feature: Write a note that will persist between sessions
  * Status: Implemented
* Search:
  * Feature: Search Google, opening results in iFrame
  * Status: **Not implemented**
* Quick Links:
  * Feature: Display and update list of persisted quick links
  * Status: Implemented
* Top Visited:
  * Feature: Display top visited sites (note: not possible as web page, needs to be Chrome Extension)
  * Status **Not implemented**
* Calendar:
  * Feature: Display Google Calendar
  * Status: **Not implemented**
* Todo List:
  * Feature: Update and view todo list including persistence between sessions
  * Status: **Not implemented**
* Weather:
  * Feature: Fetch latest weather based on geolocation or custom location
  * Status: Partially implemented
  * Outstanding items:
    * Graceful error handling - default to constant location OR use IP if geolocation fails?
    * Add custom location functionality
* Zen Mode:
  * Feature: Runs a video in the background
  * Status: **Not implemented**
* Background:
  * Feature: Displays random background image from collection, random color, or specified background
  * Status: Partially implemented
  * Outstanding items:
    * Graceful error handling and shorter timeout - use color instead or specific picture?
    * Random color functionality
* Clock:
  * Feature: Displays clock in background
  * Status: Implemented
* Quotes:
  * Feature: Displays random quote
  * Status: **Not-implemented**
* Options:
  * Feature: Set options
  * Status: Partially implemented
  * Outstanding items:
    * Zen options
    * To-do list integration
    * Quotes integration
    * Theme - styling based on drop-down
    * Weather - custom location (see above)

The widget specific view code is stored in its own directory under ``src/components``, for example ``src/components/WeatherWidget``.

The redux code is stored in ``src/actions`` for the [action creators](http://redux.js.org/docs/basics/Actions.html#action-creators) and ``src/reducers`` for the [reducers](http://redux.js.org/docs/basics/Reducers.html).

### Creating a Widget

To create a widget you need to create the necessary action creators, redux reducers and react components as well as integrate with options as appropriate.

#### Action Creators

Create a file in ``src/actions`` with the naming convention *widget*Actions.js.

If any actions are asynchronous (e.g. an API call) use [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and export a function which takes ``dispatch`` as an argument and returns a call to ``dispatch`` with a plain object containing a type and the new data. For an example see ``weatherActions.js``.

For synchronous actions simply return the type and any new data.

If there is any complex helper function required or that would be shared by actions from different widgets you can move this to its own file being sure it doesn't have "Actions" in its name.

#### Reducers

Create a file in ``src/reducers`` with the naming convention *widget*.js. The reducer is a function that takes the current state and dispatched action as arguments and returns new state.

Never return mutated state, so the [spread operator for arrays](https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/05-Avoiding_Array_Mutations.md) and [Object.assign()](https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/06-Avoiding_Object_Mutations.md) for objects. Two helper functions have been created in ``src/utils`` to help with this.

#### Components

Create a folder for each widget within ``src/components`` including a js file in that folder that will contain all the code, named "*Widget*Widget". If custom CSS is required it can be stored defined in a .css file with the same name.

The js file should contains a redux-aware "container" component. Presentational components can be defined above. 

Any of the widgets which implement the "sliding widget" user interface should utilize the ``src/components/common/SlidingWidget*`` components. Those widgets include:

* Quick Links
* Top Visited
* Weather
* Todo List
* Note
* News

For these, be sure to set ``heightWhenActive`` and ``maxHeightWhenActive`` to control the height. By default the height will increase based on the child content's height when active.

Other widgets will be more custom, utilize ``src/components/common`` as appropriate. These widgets include:

* Options
* Quotes
* Background
* Clock
* Search
* Zen

For custom styles create a css file with the same name and import it into that file

Use ``mapStateToProps`` and ``mapDispatchToProps`` for connecting to redux. If local state or React lifecycle hooks are required then extend the React Container class. Otherwise, use a "stateless" function for both "container" and "presentational" components

#### Options & Persistence

If anything integrations with options widget are required also edit the options widget.

Each section has it's own js file under ``OptionsWidget/sections``.

If persistence to localStorage is required include the reducer in the ``whitelist`` in the ``src/index.js`` file. **Important**: Sometimes clearing of localStorage is required once the state is improperly updated during development - execute ``localStorage.clear()``

### Testing

Right now complete manual testing to ensure the functionality matches Leoh (or improves on it, if there any issues). We are looking into unit/regression testing options.

### Working with Git and GitHub - **Core Team**

#### Issue & Topic Branch

For any work, create an issue and assign yourself, if not already done so. Then create a topic branch (never work directly on master).

Before branching from master, make sure you are on master and it is up to date with origin (GitHub).

  > ```shell
  > $ git status
  > On branch master
  > Your branch is up-to-date with 'origin/master'.
  > ```

Next checkout your topic branch and start working!

  > ```shell
  > $ git checkout -b create-note-widget
  > ```

Once you are done with all of your work, rebase onto master before pushing so we can [avoid a merge commit](https://nathanleclaire.com/blog/2014/09/14/dont-be-scared-of-git-rebase/).

##### Rebasing onto Master

Make sure `master` is up-to-date locally:

  > ```shell
  > $ git checkout master
  > $ git pull
  > On branch master
  > Your branch is up-to-date with 'origin/master'.
  > ```

Checkout your branch. If you have multiple commits, it may be easier to squash them first before rebasing onto master.

  > ```shell
  > $ git checkout create-note-widget
  > $ git log --oneline #find the SHA of the commit prior to your first on this branch
  > $ git rebase -i SHA #"pick" the first commit, and change the rest to "f"
  > ```

Rebase onto master:

  > ```shell
  > $ git rebase master # if there are no unresolvable conflicts, you'll see
  > First, rewinding head to replay your work on top of it...
  > Applying: Finished fetch user
  > # if there are conflicts, fix those, retest and then add an extra merge resolve commit
  > ```

Finally push to GitHub:

  > ```shell
  > $ git push
  > ```

#### Create Pull Request

On GitHub open a pull request into master, assigning another person in the team - include text "Resolves #issuenum".

Once satisfied, the reviewer will complete the pull request into master which closes the issue.

If there is anything that needs to be resolved before pulling, use the PR as discussion, the worker may need to do further work and additional commits until reviewer satisfied.

### Working with Git and GitHub - Non-Core Team

#### Cloning The Repo

1. Open a Terminal / Command Line / Bash Shell in your projects directory.
2. Clone this repo

```shell
$ git clone https://github.com/chingu-coders/voyage1-turtles-team-38.git
```

#### Maintaining Your Fork

Now that you have a copy of the repo, there is work you will need to do to keep it current.


##### **Rebasing from Upstream**

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `master` branch

  > ```shell
  > $ git status
  > On branch master
  > Your branch is up-to-date with 'origin/master'.
  > ```

  > If your aren't on `master`, resolve outstanding files / commits and checkout the `master` branch

  > ```shell
  > $ git checkout master
  > ```

2. Do a pull with rebase against `upstream`

  > ```shell
  > $ git pull --rebase upstream master
  > ```

  > This will pull down all of the changes to the official master branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated master branch to your GitHub fork

  > ```shell
  > $ git push origin master --force
  > ```

  > This will overwrite the master branch of your fork.

#### Create Issue (for bug, feature, documentation, etc.)

Go to issues tab on GitHub repository page and click on **New Issue**.

#### Create A Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

#### Squash Your Commits

Do work locally, make as many (or as few) commits as you'd like (can act as save points) - we'll squash them before merging for a clean master history - [https://github.com/blog/2141-squash-your-commits](https://github.com/blog/2141-squash-your-commits) (you can also do this locally, however).

#### Creating A Pull Request

Push and open a pull request into master, assigning another person in the team - include text "Resolves #issuenum".

Once satisfied, the reviewer will complete the pull request into master which closes the issue.

If there is anything that needs to be resolved before pulling, use the PR as discussion, the worker may need to do further work and additional commits until reviewer satisfied.
