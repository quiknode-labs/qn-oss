export interface CoreArguments {
  endpointUrl: string;
  network?: string;
}

export type QNClientConfig = {
  addOns: {
    nftTokenV2: boolean;
  };
};
