import { ChainName } from '../types/chains';
import { CustomApolloClient } from '../graphql/customApolloClient';
//import { QNApolloErrorHandler } from '../utils/QNApolloErrorHandler';
import { DEFAULT_CHAIN } from '../utils/constants';

export class EventsController {
  constructor(
    private client: CustomApolloClient,
    private defaultChain: ChainName = DEFAULT_CHAIN
  ) {}
}
