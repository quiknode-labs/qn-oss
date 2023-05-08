import { API } from '../../src';

const opts: Record<string, any> = {
  graphApiKey: process.env['QUICKNODE_GQL_API_KEY'] || '',
};

export const apiClient = new API(opts);
