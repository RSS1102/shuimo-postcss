
/**
 * @description jsx build config
 * @author 阿怪
 * @date 2023/1/24 02:17
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { ShuimoBuildConfig } from '../../../index';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const config: ShuimoBuildConfig = {
  plugins: {
    // resolve: true,
    // commonjs: true,
    typescript: {
      filterRoot: path.resolve(__dirname,'../../../../../tools/jsx'),
      exclude: ['**/vue/**', '**/react/**', '**/apps/**']
    }
  }
};
