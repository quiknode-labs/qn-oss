// @ts-ignore
afterEach(async () => {
  // pause after tests to avoid race conditions
  // Needed because we were seeing this issue:
  // ApolloError: req.setHeader is not a function

  await new Promise((resolve) => setTimeout(resolve, 100));
});
