import { Api } from '../../src';

const opts: Record<string, any> = {
  qnApiKey: process.env['QUICKNODE_GQL_API_KEY'] || '',
};

export const apiClient = new Api(opts);
