import baseConfig from './base.js';
import reactConfig from './react/react.js';

const eslintConfig = [...baseConfig, ...reactConfig];

export default eslintConfig;
