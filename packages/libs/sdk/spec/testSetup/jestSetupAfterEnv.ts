// @ts-ignore
beforeEach(async () => {
  // pause between tests to avoid test race conditions
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
