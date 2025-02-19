import { PACKAGE_VERSION } from "lib/constants";

// Headers to use in RPC clients
export function getClientHeaders(): { [key: string]: string } {
  const packageVersion = PACKAGE_VERSION || 'n/a';
  return {
    'x-qn-sdk-version': packageVersion
  }
}
