import * as env from 'dotenv-flow';
import * as path from 'path';

const envConfigDirectory = path.resolve(__dirname, '../');

env.config({
  node_env: 'development',
  path: envConfigDirectory,
});
