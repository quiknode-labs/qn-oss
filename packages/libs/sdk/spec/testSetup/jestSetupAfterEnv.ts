// @ts-ignore
afterEach(async () => {
  // pause between tests to avoid test race conditions
  console.log('HERE1');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('HERE2');
});
