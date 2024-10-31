import { SolanaV1 } from './v1';
import { SolanaV2 } from './v2';
import { BaseSolanaClientArgs, ClientVersion } from './shared';

export class SolanaClientFactory {
    static createClient(version: ClientVersion, args: BaseSolanaClientArgs) {
        switch (version) {
            case 'v1':
                return new SolanaV1(args);
            case 'v2':
                return new SolanaV2(args);
            default:
                throw new Error(`Unsupported version: ${version}`);
        }
    }
}