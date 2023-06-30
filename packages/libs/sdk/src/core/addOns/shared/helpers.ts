// Unfortunately we can't dynamically extend the viem client based on which add-ons are specified,
// which would make the types fully align with the add-ons for the client so we do run-time
// checks to prevent calling add-ons not explicitly added in the config
export function checkAddOnEnabled(
  enabled: boolean,
  humanName: string,
  configName: string
) {
  if (!enabled) {
    throw new Error(
      `${humanName} is not set as enabled. Please ensure the addon is enabled on both your QuickNode endpoint and enable ${configName} in the createQNClient() configuration argument`
    );
  }
}
