# React quiz

Quiz for quick evaluation of student progress in the React module.

### Instructions for the class

1. Post the repo in Slack and get the students to pull it
2. Instruct students to work on it individually on their own computer, although referring to course material or anything on the Internet is ok.
3. When time's up, have students upload the completed `Quiz.js` file in a [Gist](https://gist.github.com/) and share the link on Slack.
4. Give feedback.

### Using the tests

We have provided some unit tests (see `src/__tests__/Quiz.test.js`) to help you along. To run the tests, after you've `npm install`ed the dependencies, run `npm test`. Hit `a` to run all of the tests.

Currently only the test for Question 1 is running - delete the `.skip` before each other question's tests as you get to it, i.e. change:

```js
  describe.skip("Question 2 - Lions", () => {
```

to:

```js
  describe("Question 2 - Lions", () => {
```

Each question may have multiple tests - try to get them **all** to pass before moving on.
