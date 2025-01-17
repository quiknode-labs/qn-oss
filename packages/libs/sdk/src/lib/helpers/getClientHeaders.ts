import packageJson from '../../../package.json';

// Headers to use in RPC clients
export function getClientHeaders(): { [key: string]: string } {
  const packageVersion = packageJson?.version || 'n/a';
  return {
    'x-qn-sdk-version': packageVersion
  }
}
