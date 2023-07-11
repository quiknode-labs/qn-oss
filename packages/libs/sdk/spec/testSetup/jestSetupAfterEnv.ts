// @ts-ignore
afterEach(async () => {
  // pause after tests to avoid race conditions
  await new Promise((resolve) => setTimeout(resolve, 100));
});

global.fetch = fetch;
