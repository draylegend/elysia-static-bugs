import playwright from 'eslint-plugin-playwright';
import { config } from 'typescript-eslint';

import baseConfig from '../../eslint.config.js';

export default config(...baseConfig, playwright.configs['flat/recommended']);
