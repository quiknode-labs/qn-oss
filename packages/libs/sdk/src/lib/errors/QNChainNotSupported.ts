export class QNChainNotSupported extends Error {
  constructor(endpointUrl: string) {
    super(
      `The chain for endpoint URL ${endpointUrl} is not currently supported by the QuickNode SDK.`
    );
  }
}
