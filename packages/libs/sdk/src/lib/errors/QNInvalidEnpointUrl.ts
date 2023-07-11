export class QNInvalidEndpointUrl extends Error {
  constructor() {
    super(
      'Endpoint URL is not in a valid QuickNode URL format. Please check the URL and try again'
    );
  }
}
