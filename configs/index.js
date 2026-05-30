import reactConfig from '../rules/react.js';

import baseConfig from './base.js';

const eslintConfig = [...baseConfig, ...reactConfig];

export default eslintConfig;
