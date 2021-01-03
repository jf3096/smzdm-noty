import * as env from 'dotenv-flow';
import * as path from 'path';
import invariant from 'tiny-invariant';
import * as globby from 'globby';

const resolve = (pathname = '') => path.resolve(__dirname, '../', pathname);

const VALID_ENV_LIST = globby
  .sync('.env.*', {
    dot: true,
    cwd: resolve(),
  })
  .map((filename) => filename.replace('.env.', ''));

const { NODE_ENV } = process.env;

invariant(
  VALID_ENV_LIST.indexOf(NODE_ENV) > -1,
  `仅支持以下环境变量${VALID_ENV_LIST}. 当前环境变量 process.env.NODE_ENV = ${NODE_ENV} 不合法`,
);

env.config({
  node_env: NODE_ENV,
  path: resolve(),
});
